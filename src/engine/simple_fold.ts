/**
 * Simple (straight-line) fold operation.
 *
 * A fold is defined by a grab point and a drag target in the folded plane:
 * the fold line is the perpendicular bisector of grab->target, and the paper
 * on the grab side of the line reflects across it.
 *
 * Which facets participate is determined by a physical flood fill:
 *  - the grabbed facet's moving-side piece seeds the set
 *  - no-tearing: any crease of a mover lying (partly) strictly on the moving
 *    side pulls the neighboring facet in
 *  - layer sweep: any facet stacked beyond a mover (in the fold direction)
 *    that overlaps the mover's moving piece is swept in (the rotating paper
 *    would pass through it otherwise)
 * iterated to fixpoint. Facets crossing the fold line are split; moving
 * pieces reflect and restack (order reversed) on top of (or under) the
 * stationary stack they land on.
 */

import {
    Vec2,
    Line,
    Polygon,
    dist,
    perpBisector,
    signedDist,
    applyIso,
    invertIso,
    composeIso,
    reflectionAcross,
    transformLine,
    clipPolygon,
    splitPolygon,
    polygonArea,
    polygonsOverlap,
    isMirrored,
    lerp,
    EPS
} from './geometry';
import {
    FoldedState,
    Facet,
    facetAtPoint,
    foldedPoly,
    getCreases,
    outOfPlaneFacets,
    normalizeLayers,
    canonicalizeVertices
} from './model';

export type SimpleFoldParams = {
    from: Vec2; // folded-plane grab point (lies on the piece that moves)
    to: Vec2; // folded-plane target point (grab point reflects onto this)
    sign: 1 | -1; // +1: fold over the top (+z), -1: fold underneath (-z)
};

const MIN_DRAG = 0.05;
// minimum length of shared crease on the moving side to count as a pull;
// generous enough to ignore vertex-grazing drift from welded coordinates
const MIN_SEG_LEN = 1e-2;

/** Portion of folded-space segment strictly on the positive side of L, as a length. */
const segmentLengthOnPositiveSide = (a: Vec2, b: Vec2, l: Line): number => {
    const da = signedDist(l, a);
    const db = signedDist(l, b);
    const L = dist(a, b);
    if (da <= EPS && db <= EPS) return 0;
    if (da >= -EPS && db >= -EPS) return L;
    // crosses the line
    const t = da / (da - db);
    const x = lerp(a, b, t);
    return da > 0 ? dist(a, x) : dist(x, b);
};

export type SimpleFoldResult = {
    state: FoldedState;
    foldLine: Line;
    movedFacets: number[]; // indices into the result state
    params: SimpleFoldParams; // effective params (may be clamped)
};

export const simpleFold = (state: FoldedState, params: SimpleFoldParams): SimpleFoldResult | null => {
    const { from, to, sign } = params;
    if (dist(from, to) < MIN_DRAG) return null;

    const foldLine = perpBisector(from, to); // positive side contains `from` (the moving side)
    const facets = state.facets;
    const n = facets.length;
    const creases = getCreases(state);

    // facets lifted out of the plane by 3D angle overrides are physically
    // elsewhere: they can't be grabbed, pulled or swept, and a hinged crease
    // is an obstacle the fold cannot move past
    const outOfPlane = outOfPlaneFacets(state, creases);
    const grabIdx = facetAtPoint(state, from, sign, undefined, outOfPlane);
    if (grabIdx === -1) return null;

    // per-facet derived data
    const folded: Polygon[] = facets.map(foldedPoly);
    // paper-space fold line and clip side for each facet (mirrored isometries flip sidedness)
    const paperLines: Line[] = facets.map((f) => transformLine(invertIso(f.iso), foldLine));
    const paperSide: (1 | -1)[] = facets.map((f) => (isMirrored(f.iso) ? -1 : 1));
    // moving piece of each facet, in paper space (may be empty)
    const movingPiece: Polygon[] = facets.map((f, i) => clipPolygon(f.poly, paperLines[i], paperSide[i]));
    const hasMovingArea = (i: number) => movingPiece[i].length >= 3 && Math.abs(polygonArea(movingPiece[i])) > 1e-4;
    const movingPieceFolded: Polygon[] = facets.map((f, i) => movingPiece[i].map((p) => applyIso(f.iso, p)));

    if (!hasMovingArea(grabIdx)) return null;

    // ------------------------------------------------------------------ flood
    const involved = new Set<number>();
    const queue: number[] = [grabIdx];
    while (queue.length > 0) {
        const i = queue.pop()!;
        if (involved.has(i)) continue;
        if (!hasMovingArea(i)) continue;
        involved.add(i);

        // no-tearing pull through creases on the moving side
        for (const c of creases) {
            if (c.a !== i && c.b !== i) continue;
            const j = c.a === i ? c.b : c.a;
            if (involved.has(j)) continue;
            const s0 = applyIso(facets[i].iso, c.seg[0]);
            const s1 = applyIso(facets[i].iso, c.seg[1]);
            if (segmentLengthOnPositiveSide(s0, s1, foldLine) > MIN_SEG_LEN) {
                // the fold would drag material across a 3D hinge: blocked
                if (outOfPlane.has(j)) return null;
                queue.push(j);
            }
        }

        // layer sweep: facets stacked beyond the mover in the fold direction
        for (let k = 0; k < n; k++) {
            if (involved.has(k) || outOfPlane.has(k)) continue;
            if (sign * (facets[k].layer - facets[i].layer) <= 0) continue;
            if (polygonsOverlap(folded[k], movingPieceFolded[i])) {
                queue.push(k);
            }
        }
    }

    // --------------------------------------------------------------- rebuild
    const reflection = reflectionAcross(foldLine);
    type Mover = { facet: Facet; origLayer: number };
    const movers: Mover[] = [];
    const stayers: Facet[] = [];

    facets.forEach((f, i) => {
        if (!involved.has(i)) {
            stayers.push({ ...f, poly: f.poly });
            return;
        }
        const { pos, neg } = splitPolygon(f.poly, paperLines[i]);
        const movingPoly = paperSide[i] === 1 ? pos : neg;
        const stayingPoly = paperSide[i] === 1 ? neg : pos;
        if (movingPoly) {
            movers.push({
                facet: { poly: movingPoly, iso: composeIso(reflection, f.iso), layer: f.layer },
                origLayer: f.layer
            });
        }
        if (stayingPoly) {
            stayers.push({ poly: stayingPoly, iso: f.iso, layer: f.layer });
        }
    });

    if (movers.length === 0) return null;
    // a fold must hinge against stationary paper; otherwise it's just a rigid motion
    if (stayers.length === 0) return null;

    // ------------------------------------------------------------- layering
    // movers land beyond the fold line; stack them (order reversed) on top of
    // (sign=+1) or underneath (sign=-1) the stationary facets they overlap
    const moverFolded = movers.map((m) => foldedPoly(m.facet));
    let extreme: number | null = null;
    stayers.forEach((s) => {
        const sp = foldedPoly(s);
        const overlaps = moverFolded.some((mp) => polygonsOverlap(sp, mp));
        if (!overlaps) return;
        if (extreme === null || sign * s.layer > sign * extreme) extreme = s.layer;
    });
    const base = extreme === null ? 0 : extreme + sign;
    const layers = movers.map((m) => m.origLayer);
    const pivot = sign === 1 ? Math.max(...layers) : Math.min(...layers);
    // sign=+1: new = base + (max - orig)  => former top lands first (bottom of landed stack)
    // sign=-1: new = base - (orig - min)  => former bottom lands first (top of landed under-stack)
    movers.forEach((m) => {
        m.facet.layer = sign === 1 ? base + (pivot - m.origLayer) : base - (m.origLayer - pivot);
    });

    const newFacets = [...stayers, ...movers.map((m) => m.facet)];
    canonicalizeVertices(newFacets);
    normalizeLayers(newFacets);

    const movedFacets = movers.map((_, k) => stayers.length + k);
    return {
        state: { facets: newFacets, overrides: state.overrides },
        foldLine,
        movedFacets,
        params
    };
};

/**
 * Simple fold with drag clamping: if the target drag point yields an invalid
 * fold, bisect between a known-good drag point and the target to find the
 * furthest valid fold along the way.
 */
export const clampedSimpleFold = (
    state: FoldedState,
    params: SimpleFoldParams,
    lastGoodTo: Vec2 | null
): SimpleFoldResult | null => {
    const direct = simpleFold(state, params);
    if (direct) return direct;
    if (lastGoodTo === null) return null;

    let lo = 0; // lerp(lastGoodTo, to, 0) assumed valid
    let hi = 1;
    let best: SimpleFoldResult | null = simpleFold(state, { ...params, to: lastGoodTo });
    if (!best) return null;
    for (let iter = 0; iter < 10; iter++) {
        const mid = (lo + hi) / 2;
        const r = simpleFold(state, { ...params, to: lerp(lastGoodTo, params.to, mid) });
        if (r) {
            best = r;
            lo = mid;
        } else {
            hi = mid;
        }
    }
    return best;
};
