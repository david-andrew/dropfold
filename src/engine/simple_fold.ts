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
    segmentPolygonPenetration,
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
    flatComponentInfo,
    hingeWallSegments,
    normalizeLayers,
    canonicalizeVertices
} from './model';
import { poseConsistent } from './pose';
import { pointInPolygon } from './geometry';

export type SimpleFoldParams = {
    from: Vec2; // grab point in the flat frame of the grabbed component
    to: Vec2; // target point in the same frame (grab point reflects onto this)
    sign: 1 | -1; // +1: fold over the top (+z), -1: fold underneath (-z)
    // paper-space grab point: identifies the grabbed facet (and so the flat
    // component the fold happens in) unambiguously, since paper space never
    // overlaps; without it the grab defaults to the base component
    fromPaper?: Vec2;
};

const MIN_DRAG = 0.05;
// minimum length of shared crease on the moving side to count as a pull;
// generous enough to ignore vertex-grazing drift from welded coordinates
const MIN_SEG_LEN = 1e-2;
// a fold line grazing a facet closer than this doesn't split it: hair-thin
// remainder pieces become degenerate facets whose sliver creases rigidly pin
// distant layers together, locking every hinge in the model
const SLIVER = 0.05;

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

    // a fold happens within one flat component: facets of other components
    // are physically in other planes (across 3D hinges), so they can't be
    // grabbed, pulled or swept, and the hinges are obstacles
    const { compOf } = flatComponentInfo(state, creases);
    let grabIdx: number;
    if (params.fromPaper) {
        grabIdx = facets.findIndex((f) => pointInPolygon(f.poly, params.fromPaper!));
    } else {
        // legacy ops (no fromPaper): prefer the base plane, then lifted components
        grabIdx = facetAtPoint(state, from, sign, undefined, outOfPlaneFacets(state, creases));
        if (grabIdx === -1) grabIdx = facetAtPoint(state, from, sign);
    }
    if (grabIdx === -1) return null;
    const comp = compOf[grabIdx];

    // per-facet derived data
    const folded: Polygon[] = facets.map(foldedPoly);
    // paper-space fold line and clip side for each facet (mirrored isometries flip sidedness)
    const paperLines: Line[] = facets.map((f) => transformLine(invertIso(f.iso), foldLine));
    const paperSide: (1 | -1)[] = facets.map((f) => (isMirrored(f.iso) ? -1 : 1));
    // moving piece of each facet, in paper space (may be empty)
    const movingPiece: Polygon[] = facets.map((f, i) => clipPolygon(f.poly, paperLines[i], paperSide[i]));
    // how far a piece extends from the fold line toward the given side
    const extentBeyond = (poly: Polygon, line: Line, side: 1 | -1): number =>
        poly.reduce((m, p) => Math.max(m, side * signedDist(line, p)), 0);
    const hasMovingArea = (i: number) =>
        movingPiece[i].length >= 3 &&
        Math.abs(polygonArea(movingPiece[i])) > 1e-4 &&
        extentBeyond(movingPiece[i], paperLines[i], paperSide[i]) > SLIVER;
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
                if (compOf[j] !== comp) return null;
                queue.push(j);
            }
        }

        // layer sweep: facets stacked beyond the mover in the fold direction
        for (let k = 0; k < n; k++) {
            if (involved.has(k) || compOf[k] !== comp) continue;
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
    const stayerComp: number[] = [];

    facets.forEach((f, i) => {
        if (!involved.has(i)) {
            stayers.push({ ...f, poly: f.poly });
            stayerComp.push(compOf[i]);
            return;
        }
        const { pos, neg } = splitPolygon(f.poly, paperLines[i]);
        let movingPoly = paperSide[i] === 1 ? pos : neg;
        let stayingPoly = paperSide[i] === 1 ? neg : pos;
        // the staying remainder is a hair along the fold line: take the whole
        // facet instead of leaving a degenerate sliver behind
        if (stayingPoly && extentBeyond(stayingPoly, paperLines[i], -paperSide[i] as 1 | -1) < SLIVER) {
            movingPoly = f.poly;
            stayingPoly = null;
        }
        if (movingPoly) {
            movers.push({
                facet: { poly: movingPoly, iso: composeIso(reflection, f.iso), layer: f.layer },
                origLayer: f.layer
            });
        }
        if (stayingPoly) {
            stayers.push({ poly: stayingPoly, iso: f.iso, layer: f.layer });
            stayerComp.push(compOf[i]);
        }
    });

    if (movers.length === 0) return null;
    // a fold must hinge against stationary paper of its own component;
    // otherwise it's just a rigid motion (or a 3D rotation about a hinge)
    if (!stayerComp.includes(comp)) return null;

    const moverFolded = movers.map((m) => foldedPoly(m.facet));

    // 3D-opened hinges bounding this component raise material out of its
    // plane along their folded segment: a wall that landed material may not
    // cross (it would pass through the lifted paper). Landing exactly against
    // the wall is fine. Hinges between other components live in other planes.
    for (const w of hingeWallSegments(state, creases)) {
        if ((compOf[w.a] === comp) === (compOf[w.b] === comp)) continue;
        for (const mp of moverFolded) {
            if (segmentPolygonPenetration(w.seg[0], w.seg[1], mp, 5e-3) > MIN_SEG_LEN) return null;
        }
    }

    // ------------------------------------------------------------- layering
    // movers land beyond the fold line; stack them (order reversed) on top of
    // (sign=+1) or underneath (sign=-1) the stationary facets of the same
    // component they overlap (other components stack in other planes)
    let extreme: number | null = null;
    stayers.forEach((s, si) => {
        if (stayerComp[si] !== comp) return;
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

    const newState: FoldedState = { facets: newFacets, overrides: state.overrides };
    // with 3D overrides present, the landed material may create creases that a
    // hinge drags (e.g. a new crease collinear with an open hinge) while its
    // other seams stay put -- reject folds whose result would tear when posed.
    // clampedSimpleFold turns this rejection into an obstacle: the drag stops
    // at the furthest tear-free fold.
    if (!poseConsistent(newState)) return null;

    const movedFacets = movers.map((_, k) => stayers.length + k);
    return {
        state: newState,
        foldLine,
        movedFacets,
        params
    };
};

// clamp resolution in world units; finer precision accumulates across moves
// because each move bisects from the previous move's clamped target
const CLAMP_RES = 0.02;

/**
 * Simple fold with drag clamping: if the target drag point yields an invalid
 * fold, bisect between a known-good drag point and the target to find the
 * furthest valid fold along the way. `lastGood` is the result from the
 * previous move of the same drag (same state), reused as the known-good
 * starting point without re-validating it.
 */
export const clampedSimpleFold = (
    state: FoldedState,
    params: SimpleFoldParams,
    lastGood: SimpleFoldResult | null
): SimpleFoldResult | null => {
    const direct = simpleFold(state, params);
    if (direct) return direct;
    if (lastGood === null) return null;

    const from = lastGood.params.to;
    const span = dist(from, params.to);
    if (span <= CLAMP_RES) return lastGood;
    let best = lastGood;

    // gallop outward from the known-good point to bracket the obstacle: while
    // the drag is pinned against it the first small probe fails immediately,
    // so holding the cursor past an obstacle costs ~1 probe per move instead
    // of a full bisection
    let lo = 0;
    let hi = 1;
    let step = (CLAMP_RES * 2) / span;
    while (lo + step < 1) {
        const r = simpleFold(state, { ...params, to: lerp(from, params.to, lo + step) });
        if (r) {
            best = r;
            lo = lo + step;
            step *= 2;
        } else {
            hi = lo + step;
            break;
        }
    }
    while ((hi - lo) * span > CLAMP_RES) {
        const mid = (lo + hi) / 2;
        const r = simpleFold(state, { ...params, to: lerp(from, params.to, mid) });
        if (r) {
            best = r;
            lo = mid;
        } else {
            hi = mid;
        }
    }
    return best;
};
