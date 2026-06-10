/**
 * Compound fold operations: inside reverse fold, squash fold, petal fold.
 *
 * Strategy: each op explicitly constructs the re-folded pieces it understands
 * (seeds), then a propagation pass carries the change through the rest of the
 * paper by preserving every other crease's relative transform. Finally the
 * candidate state is validated (no torn creases, no same-layer overlap);
 * invalid candidates reject the op.
 */
import {
    Vec2,
    Line,
    Polygon,
    Isometry,
    dist,
    lerp,
    midpoint,
    perpBisector,
    lineFromPoints,
    signedDist,
    applyIso,
    composeIso,
    invertIso,
    reflectionAcross,
    transformLine,
    splitPolygon,
    polygonArea,
    sharedBoundarySegments,
    clipPolygon,
    isMirrored,
    EPS
} from './geometry';
import {
    FoldedState,
    Facet,
    Crease,
    facetAtPoint,
    foldedPoly,
    getCreases,
    findOverride,
    normalizeLayers,
    canonicalizeVertices,
    validateState,
    pointOnSegment
} from './model';
import { poseConsistent } from './pose';

export type CompoundFoldParams = {
    grab: Vec2; // folded-plane grab point (on the piece being manipulated)
    to: Vec2; // folded-plane target point
    sign: 1 | -1; // which face of the paper was grabbed
    flip?: boolean; // squash only: opened pages land across the axis instead of in place
};

export type CompoundFoldResult = {
    state: FoldedState;
    foldLine: Line;
};

const MIN_DRAG = 0.05;

/** Reject ops whose involved facets touch creases with non-flat angle overrides. */
const involvedHasOverride = (state: FoldedState, creases: Crease[], involved: Set<number>): boolean => {
    if (state.overrides.length === 0) return false;
    for (const c of creases) {
        if ((involved.has(c.a) || involved.has(c.b)) && findOverride(state, c)) return true;
    }
    return false;
};

/** Folded-space segment of a crease (well-defined: both facets agree). */
const creaseFoldedSeg = (state: FoldedState, c: Crease): [Vec2, Vec2] => [
    applyIso(state.facets[c.a].iso, c.seg[0]),
    applyIso(state.facets[c.a].iso, c.seg[1])
];

const segmentLengthOnPositiveSide = (a: Vec2, b: Vec2, l: Line): number => {
    const da = signedDist(l, a);
    const db = signedDist(l, b);
    const L = dist(a, b);
    if (da <= EPS && db <= EPS) return 0;
    if (da >= -EPS && db >= -EPS) return L;
    const t = da / (da - db);
    const x = lerp(a, b, t);
    return da > 0 ? dist(a, x) : dist(x, b);
};

type Piece = {
    poly: Polygon; // paper space
    iso: Isometry;
    layer: number;
    sourceIdx: number; // facet index in the input state it came from
    oldLayer: number; // layer of the source facet before the op
    reassigned: boolean; // whether the op explicitly set this piece's isometry
};

/**
 * Propagate isometry changes through the paper: every crease between a
 * reassigned piece and an untouched piece keeps its relative transform, which
 * may drag further facets along. Conflicts mean the op would tear the paper.
 * Returns the final facet list or null.
 */
const propagate = (pieces: Piece[], originalIsos: Isometry[]): Facet[] | null => {
    const n = pieces.length;
    // segments shorter than this are point contacts (vertex weld drift), not seams
    const MIN_SEAM = 2e-2;
    const seams = (a: Piece, b: Piece) =>
        sharedBoundarySegments(a.poly, b.poly).filter((s) => dist(s[0], s[1]) > MIN_SEAM);
    // adjacency by shared paper-space boundary
    const adj: number[][] = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (seams(pieces[i], pieces[j]).length > 0) {
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }

    const assigned: (Isometry | null)[] = pieces.map((p) => (p.reassigned ? p.iso : null));
    const queue: number[] = [];
    pieces.forEach((p, i) => {
        if (p.reassigned) queue.push(i);
    });

    while (queue.length > 0) {
        const i = queue.shift()!;
        for (const j of adj[i]) {
            // a piece that was already (re)assigned keeps its iso; genuine tears are
            // caught later by the seg-consistency check in validateState
            if (assigned[j] !== null) continue;
            // if the shared boundary still coincides under i's new iso and j's
            // current iso, the crease is a hinge (it lies on i's fold line) and
            // j stays put; otherwise j is dragged to keep its relative transform:
            // newJ = newI o oldI^-1 o oldJ
            const segs = seams(pieces[i], pieces[j]);
            const hinged = segs.every((seg) =>
                seg.every((p) => dist(applyIso(assigned[i]!, p), applyIso(pieces[j].iso, p)) < 1e-3)
            );
            if (hinged) continue;
            const oldI = originalIsos[pieces[i].sourceIdx];
            const oldJ = originalIsos[pieces[j].sourceIdx];
            const required = composeIso(composeIso(assigned[i]!, invertIso(oldI)), oldJ);
            assigned[j] = required;
            pieces[j].iso = required;
            pieces[j].reassigned = true;
            // dragged pieces ride along: keep their layer offset relative to the dragger
            pieces[j].layer = pieces[i].layer + (pieces[j].oldLayer - pieces[i].oldLayer);
            queue.push(j);
        }
    }

    return pieces.map((p) => ({ poly: p.poly, iso: p.iso, layer: p.layer }));
};

const finalize = (
    pieces: Piece[],
    originalIsos: Isometry[],
    overrides: FoldedState['overrides'],
    foldLine: Line
): CompoundFoldResult | null => {
    const facets = propagate(pieces, originalIsos);
    if (facets === null) return null;
    canonicalizeVertices(facets);
    normalizeLayers(facets);
    const state: FoldedState = { facets, overrides };
    if (validateState(state) !== null) return null;
    // landed material must not tear when posed with existing 3D overrides
    if (!poseConsistent(state)) return null;
    return { state, foldLine };
};

// ---------------------------------------------------------------------------
// inside reverse fold

/**
 * Inside reverse fold: the flap tip beyond the fold line turns inside out,
 * pushing the spine between the layers. Geometrically: reflect the tip across
 * the line (like a simple fold) but reverse the moving layers IN PLACE rather
 * than stacking them on top.
 */
export const reverseFold = (state: FoldedState, params: CompoundFoldParams): CompoundFoldResult | null => {
    const { grab, to, sign } = params;
    if (dist(grab, to) < MIN_DRAG) return null;

    const foldLine = perpBisector(grab, to);
    const grabIdx = facetAtPoint(state, grab, sign);
    if (grabIdx === -1) return null;

    const facets = state.facets;
    const creases = getCreases(state);
    const paperLines: Line[] = facets.map((f) => transformLine(invertIso(f.iso), foldLine));
    const paperSide: (1 | -1)[] = facets.map((f) => (isMirrored(f.iso) ? -1 : 1));
    const movingArea = (i: number) => {
        const piece = clipPolygon(facets[i].poly, paperLines[i], paperSide[i]);
        return piece.length >= 3 ? Math.abs(polygonArea(piece)) : 0;
    };

    if (movingArea(grabIdx) < 1e-4) return null;

    // flood with crease pulls only (no layer sweep; the tip inverts within the flap)
    const involved = new Set<number>();
    const queue = [grabIdx];
    while (queue.length > 0) {
        const i = queue.pop()!;
        if (involved.has(i) || movingArea(i) < 1e-4) continue;
        involved.add(i);
        for (const c of creases) {
            if (c.a !== i && c.b !== i) continue;
            const j = c.a === i ? c.b : c.a;
            if (involved.has(j)) continue;
            const [s0, s1] = creaseFoldedSeg(state, c);
            if (segmentLengthOnPositiveSide(s0, s1, foldLine) > EPS * 100) queue.push(j);
        }
    }

    if (involvedHasOverride(state, creases, involved)) return null;

    const reflection = reflectionAcross(foldLine);
    const pieces: Piece[] = [];
    const moverLayers: number[] = [];

    facets.forEach((f, i) => {
        if (!involved.has(i)) {
            pieces.push({ poly: f.poly, iso: f.iso, layer: f.layer, oldLayer: f.layer, sourceIdx: i, reassigned: false });
            return;
        }
        const { pos, neg } = splitPolygon(f.poly, paperLines[i]);
        const movingPoly = paperSide[i] === 1 ? pos : neg;
        const stayingPoly = paperSide[i] === 1 ? neg : pos;
        if (stayingPoly) {
            pieces.push({ poly: stayingPoly, iso: f.iso, layer: f.layer, oldLayer: f.layer, sourceIdx: i, reassigned: false });
        }
        if (movingPoly) {
            pieces.push({
                poly: movingPoly,
                iso: composeIso(reflection, f.iso),
                layer: f.layer, // band-reversed below
                oldLayer: f.layer,
                sourceIdx: i,
                reassigned: true
            });
            moverLayers.push(f.layer);
        }
    });

    if (moverLayers.length === 0) return null;
    const lmin = Math.min(...moverLayers);
    const lmax = Math.max(...moverLayers);
    if (lmin === lmax) return null; // a single-layer tip cannot reverse-fold
    // the inverted tip tucks strictly between the sheets it hinges to: reverse
    // mover order, then squeeze into the open interval (lmin, lmax)
    // (fractional layers are re-ranked by normalizeLayers)
    const span = lmax - lmin;
    pieces.forEach((p) => {
        if (p.reassigned) {
            const reversed = lmin + lmax - p.layer;
            p.layer = lmin + ((reversed - lmin + 1) * span) / (span + 2);
        }
    });

    return finalize(pieces, state.facets.map((f) => f.iso), state.overrides, foldLine);
};

// ---------------------------------------------------------------------------
// squash fold

/**
 * Squash fold: open the pocket between the grabbed sheet F and the sheet U it
 * shares its spine crease with, and flatten symmetrically. The spine P-Q
 * swings about its anchored end P until Q points toward `to` (the axis);
 * both sheets crease along the bisector between the spine and the axis.
 *
 * The spine-side halves of F and U rotate about P (so the spine lands on the
 * axis); the far halves either stay in place (`flip` false: the opened pages
 * settle back over their old spot) or fold across the axis (`flip` true: the
 * pages land on the other side, growing the silhouette -- the classic
 * preliminary-base squash).
 */
export const squashFold = (state: FoldedState, params: CompoundFoldParams): CompoundFoldResult | null => {
    const { grab, to, sign } = params;
    const flip = params.flip ?? false;
    if (dist(grab, to) < MIN_DRAG) return null;

    const fIdx = facetAtPoint(state, grab, sign);
    if (fIdx === -1) return null;
    const facets = state.facets;
    const creases = getCreases(state);

    // the spine: the crease of F whose folded segment is closest to the grab point
    let spine: Crease | null = null;
    let spineDist = Infinity;
    for (const c of creases) {
        if (c.a !== fIdx && c.b !== fIdx) continue;
        const [s0, s1] = creaseFoldedSeg(state, c);
        const d = distToSegment(grab, s0, s1);
        if (d < spineDist) {
            spineDist = d;
            spine = c;
        }
    }
    if (!spine) return null;
    const uIdx = spine.a === fIdx ? spine.b : spine.a;

    const [s0, s1] = creaseFoldedSeg(state, spine);
    // Q is the free end being grabbed and swung toward `to`; P anchors
    const [P, Q] = dist(s0, grab) < dist(s1, grab) ? [s1, s0] : [s0, s1];

    // bisector through P between directions P->Q and P->to
    const dirQ = normalizeVec(sub2(Q, P));
    const dirT = normalizeVec(sub2(to, P));
    const bisDir = normalizeVec([dirQ[0] + dirT[0], dirQ[1] + dirT[1]]);
    if (!isFinite(bisDir[0]) || Math.hypot(bisDir[0], bisDir[1]) < EPS) return null;
    const bisector: Line = { p: P, d: bisDir };
    const axis: Line = { p: P, d: dirT };

    // spine-side pieces rotate about P (reflect across bisector, then across
    // the axis if flipping); far pieces stay or fold across the axis
    const Rb = reflectionAcross(bisector);
    const Ra = reflectionAcross(axis);
    const spineIso = flip ? composeIso(Ra, Rb) : Rb;
    const farIso = flip ? Ra : null; // null = unchanged

    if (involvedHasOverride(state, creases, new Set([fIdx, uIdx]))) return null;

    const maxL = Math.max(...facets.map((f) => f.layer));
    const minL = Math.min(...facets.map((f) => f.layer));
    const outward = (k: number) => (sign === 1 ? maxL + k : minL - k);
    // nesting outward on the grabbed side, keeping each sheet's two halves
    // adjacent so the new "pages" hinge cleanly at their fold edges:
    //   flip:    U_far(1), U_spine(2), F_spine(3), F_far(4) -- F lands outermost
    //   no flip: F_spine(1), U_spine(2), U_far(3); F_far keeps its layer and
    //            ends innermost (everything else opens out from under it)
    const newLayer = (isF: boolean, isSpine: boolean, oldLayer: number): number => {
        if (flip) return outward(isF ? (isSpine ? 3 : 4) : isSpine ? 2 : 1);
        if (isF) return isSpine ? outward(1) : oldLayer;
        return outward(isSpine ? 2 : 3);
    };

    const pieces: Piece[] = [];
    for (let i = 0; i < facets.length; i++) {
        const f = facets[i];
        if (i !== fIdx && i !== uIdx) {
            pieces.push({ poly: f.poly, iso: f.iso, layer: f.layer, oldLayer: f.layer, sourceIdx: i, reassigned: false });
            continue;
        }
        const paperLine = transformLine(invertIso(f.iso), bisector);
        const { pos, neg } = splitPolygon(f.poly, paperLine);
        if (!pos || !neg) return null; // the bisector must cross both pocket sheets
        const spineMid = midpoint(spine.seg[0], spine.seg[1]);
        const posHasSpine = pointOnPolyBoundary(pos, spineMid);
        const spinePoly = posHasSpine ? pos : neg;
        const farPoly = posHasSpine ? neg : pos;
        const isF = i === fIdx;
        pieces.push({
            poly: spinePoly,
            iso: composeIso(spineIso, f.iso),
            layer: newLayer(isF, true, f.layer),
            oldLayer: f.layer,
            sourceIdx: i,
            reassigned: true
        });
        pieces.push({
            poly: farPoly,
            iso: farIso ? composeIso(farIso, f.iso) : f.iso,
            layer: newLayer(isF, false, f.layer),
            oldLayer: f.layer,
            sourceIdx: i,
            reassigned: farIso !== null
        });
    }

    return finalize(pieces, state.facets.map((f) => f.iso), state.overrides, bisector);
};

// ---------------------------------------------------------------------------
// petal fold

/**
 * Petal fold: lift a point of the front layer up across a crease line h; the
 * side pleats attached to the lifted center swing inward, pivoting about the
 * endpoints of h (each pleat reflects with the lift, then folds back across
 * its moved hinge crease, which nets to an in-plane rotation about the
 * endpoint). Pieces dragged along by connectivity are handled by propagation;
 * physically impossible petals fail validation and reject the op.
 *
 * Several facets may contain the grab point (the flap tip is a stack); each
 * candidate is tried from the grabbed side inward until one produces a valid
 * fold.
 */
export const petalFold = (state: FoldedState, params: CompoundFoldParams): CompoundFoldResult | null => {
    const { grab, to, sign } = params;
    if (dist(grab, to) < MIN_DRAG) return null;

    // candidate facets under the grab point, nearest grabbed surface first
    const candidates = state.facets
        .map((f, i) => ({ i, f }))
        .filter(({ f }) => {
            const fp = foldedPoly(f);
            return fp.length >= 3 && pointInPolygonLoose(fp, grab);
        })
        .sort((a, b) => (sign === 1 ? b.f.layer - a.f.layer : a.f.layer - b.f.layer));

    for (const { i } of candidates) {
        const r = petalFoldOnFacet(state, i, grab, to, sign);
        if (r) return r;
    }
    return null;
};

/** Facets connected to seed through creases whose two facets are coplanar (same iso): the visible "face". */
const coplanarGroup = (state: FoldedState, creases: Crease[], seed: number): Set<number> => {
    const sameIso = (a: Isometry, b: Isometry): boolean =>
        Math.abs(a.a - b.a) < 1e-6 &&
        Math.abs(a.b - b.b) < 1e-6 &&
        Math.abs(a.c - b.c) < 1e-6 &&
        Math.abs(a.d - b.d) < 1e-6 &&
        Math.abs(a.tx - b.tx) < 1e-3 &&
        Math.abs(a.ty - b.ty) < 1e-3;
    const group = new Set<number>([seed]);
    const queue = [seed];
    while (queue.length > 0) {
        const i = queue.pop()!;
        for (const c of creases) {
            if (c.a !== i && c.b !== i) continue;
            const j = c.a === i ? c.b : c.a;
            if (group.has(j)) continue;
            if (sameIso(state.facets[i].iso, state.facets[j].iso)) {
                group.add(j);
                queue.push(j);
            }
        }
    }
    return group;
};

const petalFoldOnFacet = (
    state: FoldedState,
    fIdx: number,
    grab: Vec2,
    to: Vec2,
    sign: 1 | -1
): CompoundFoldResult | null => {
    const facets = state.facets;
    const creases = getCreases(state);

    const h = perpBisector(grab, to); // positive side contains grab (the lifted side)
    const Rh = reflectionAcross(h);

    // the lifted face may consist of several coplanar facets (e.g. the two
    // halves of a base face joined at its center crease)
    const group = coplanarGroup(state, creases, fIdx);

    // endpoints of h across the face: crossings of the group's outer boundary
    // (edges shared between group members are interior and skipped)
    const hits: Vec2[] = [];
    const pushHit = (p: Vec2) => {
        if (!hits.some((q) => dist(p, q) < EPS * 1000)) hits.push(p);
    };
    const interiorPoint = (p: Vec2, self: number): boolean => {
        for (const c of creases) {
            if (!group.has(c.a) || !group.has(c.b)) continue;
            if (c.a !== self && c.b !== self) continue;
            const seg = creaseFoldedSeg(state, c);
            if (distToSegment(p, seg[0], seg[1]) < EPS * 1000) return true;
        }
        return false;
    };
    for (const gi of group) {
        const fp = foldedPoly(facets[gi]);
        for (let i = 0; i < fp.length; i++) {
            const a = fp[i];
            const b = fp[(i + 1) % fp.length];
            const da = signedDist(h, a);
            const db = signedDist(h, b);
            let p: Vec2 | null = null;
            if (Math.abs(da) < EPS * 100) p = a;
            else if ((da > EPS && db < -EPS) || (da < -EPS && db > EPS)) p = lerp(a, b, da / (da - db));
            if (p && !interiorPoint(p, gi)) pushHit(p);
        }
    }
    if (hits.length !== 2) {
        return null;
    }
    const [e1, e2] = hits;

    // each endpoint must land on a crease from the face to a side pleat; when
    // several creases meet at e, the pleat hinge is the one running into the
    // lifted side (toward the point being raised)
    const findSideCrease = (e: Vec2): Crease | null => {
        let fallback: Crease | null = null;
        for (const c of creases) {
            const aIn = group.has(c.a);
            const bIn = group.has(c.b);
            if (aIn === bIn) continue;
            const seg = creaseFoldedSeg(state, c);
            if (!pointOnSegmentLoose(e, seg)) continue;
            if (seg.some((p) => signedDist(h, p) > 1e-2)) return c;
            fallback = fallback ?? c;
        }
        return fallback;
    };
    const c1 = findSideCrease(e1);
    const c2 = findSideCrease(e2);
    if (!c1 || !c2 || c1 === c2) {
        return null;
    }
    const s1Idx = group.has(c1.a) ? c1.b : c1.a;
    const s2Idx = group.has(c2.a) ? c2.b : c2.a;
    if (s1Idx === s2Idx) {
        return null;
    }

    // the lifted point: common folded endpoint of the two side creases
    const seg1 = creaseFoldedSeg(state, c1);
    const seg2 = creaseFoldedSeg(state, c2);
    let B: Vec2 | null = null;
    for (const p of seg1) {
        for (const q of seg2) {
            if (dist(p, q) < EPS * 10000) B = p;
        }
    }
    if (!B) {
        return null;
    }
    // B must be on the lifted (grab) side of h
    if (signedDist(h, B) < EPS) {
        return null;
    }

    const involved = new Set([...group, s1Idx, s2Idx]);
    if (involvedHasOverride(state, creases, involved)) return null;

    // the pleats (the sheets hanging off the side creases, e.g. kite-folded
    // slivers) must lie entirely on the lifted side: they ride with the tip
    const pleatOK = (sIdx: number) => foldedPoly(facets[sIdx]).every((p) => signedDist(h, p) > -1e-2);
    if (!pleatOK(s1Idx) || !pleatOK(s2Idx)) {
        return null;
    }

    const originalIsos = facets.map((f) => f.iso);
    const pieces: Piece[] = [];

    type Mover = { poly: Polygon; iso: Isometry; oldLayer: number; sourceIdx: number };
    const movers: Mover[] = [];

    // split each face facet along h: grab-side pieces lift
    for (const gi of group) {
        const F = facets[gi];
        const paperLine = transformLine(invertIso(F.iso), h);
        const { pos, neg } = splitPolygon(F.poly, paperLine);
        if (!pos || !neg) {
            return null;
        }
        const sidePaper = isMirrored(F.iso) ? -1 : 1; // positive folded side maps to this paper side
        const lifted = sidePaper === 1 ? pos : neg;
        const staying = sidePaper === 1 ? neg : pos;
        pieces.push({ poly: staying, iso: F.iso, layer: F.layer, oldLayer: F.layer, sourceIdx: gi, reassigned: false });
        movers.push({ poly: lifted, iso: composeIso(Rh, F.iso), oldLayer: F.layer, sourceIdx: gi });
    }
    // the pleats ride whole
    for (const sIdx of [s1Idx, s2Idx]) {
        const S = facets[sIdx];
        movers.push({ poly: S.poly, iso: composeIso(Rh, S.iso), oldLayer: S.layer, sourceIdx: sIdx });
    }

    // pleat companions (e.g. the strip a kite fold pulled from the sheet
    // beneath a sliver) stay put: their seam to the pleat lies on h, so the
    // hinge simply opens as the pleat lifts away
    for (const sIdx of [s1Idx, s2Idx]) {
        for (let j = 0; j < facets.length; j++) {
            if (involved.has(j)) continue;
            const segs = sharedBoundarySegments(facets[sIdx].poly, facets[j].poly).filter(
                (s) => dist(s[0], s[1]) > 2e-2
            );
            if (segs.length === 0) continue;
            // only seams lying on h can peel open
            const folded = segs.map((s) => s.map((p) => applyIso(facets[j].iso, p)));
            const onH = folded.every((s) => s.every((p) => Math.abs(signedDist(h, p)) < 1e-2));
            if (!onH) {
                return null;
            }
            involved.add(j);
            pieces.push({
                poly: facets[j].poly,
                iso: facets[j].iso,
                layer: facets[j].layer,
                oldLayer: facets[j].layer,
                sourceIdx: j,
                reassigned: false
            });
        }
    }

    // movers stack (order reversed) outward on the grabbed side
    const maxL = Math.max(...facets.map((f) => f.layer));
    const minL = Math.min(...facets.map((f) => f.layer));
    const base = sign === 1 ? maxL + 1 : minL - 1;
    const pivot = sign === 1 ? Math.max(...movers.map((m) => m.oldLayer)) : Math.min(...movers.map((m) => m.oldLayer));
    for (const m of movers) {
        pieces.push({
            poly: m.poly,
            iso: m.iso,
            layer: base + sign * Math.abs(pivot - m.oldLayer),
            oldLayer: m.oldLayer,
            sourceIdx: m.sourceIdx,
            reassigned: true
        });
    }

    // all other facets pass through (may be dragged by propagation)
    facets.forEach((f, i) => {
        if (involved.has(i)) return;
        pieces.push({ poly: f.poly, iso: f.iso, layer: f.layer, oldLayer: f.layer, sourceIdx: i, reassigned: false });
    });

    return finalize(pieces, originalIsos, state.overrides, h);
};

const pointInPolygonLoose = (poly: Polygon, p: Vec2): boolean => {
    // inclusive point-in-polygon for either orientation
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const [xi, yi] = poly[i];
        const [xj, yj] = poly[j];
        if (yi > p[1] !== yj > p[1] && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) inside = !inside;
    }
    if (inside) return true;
    return pointOnPolyBoundary(poly, p);
};

const pointOnSegmentLoose = (p: Vec2, seg: [Vec2, Vec2]): boolean => distToSegment(p, seg[0], seg[1]) < EPS * 10000;

// ---------------------------------------------------------------------------
// small local helpers

const sub2 = (a: Vec2, b: Vec2): Vec2 => [a[0] - b[0], a[1] - b[1]];
const normalizeVec = (v: Vec2): Vec2 => {
    const l = Math.hypot(v[0], v[1]);
    return [v[0] / l, v[1] / l];
};

const distToSegment = (p: Vec2, a: Vec2, b: Vec2): number => {
    const ab = sub2(b, a);
    const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * ab[0] + (p[1] - a[1]) * ab[1]) / (ab[0] * ab[0] + ab[1] * ab[1])));
    const c: Vec2 = [a[0] + ab[0] * t, a[1] + ab[1] * t];
    return dist(p, c);
};

/** Whether a point lies on the boundary of a polygon (tolerance covers vertex weld drift). */
const pointOnPolyBoundary = (poly: Polygon, p: Vec2): boolean => {
    for (let i = 0; i < poly.length; i++) {
        if (distToSegment(p, poly[i], poly[(i + 1) % poly.length]) < 5e-3) return true;
    }
    return false;
};
