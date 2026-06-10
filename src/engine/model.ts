/**
 * Core data model for the fold engine.
 *
 * The ground truth is a fully flat folded state: every facet is a convex
 * polygon in "paper space" (the unfolded sheet) together with a 2D isometry
 * mapping it into the folded plane, and an integer layer for stacking order.
 *
 * Creases are not stored; they are derived from paper-space adjacency
 * (paper never tears, so any shared paper-space boundary is a physical
 * connection). Non-flat "finishing" angles are stored as overrides keyed by a
 * paper-space point lying on the crease, which is stable across re-indexing.
 */

import {
    Vec2,
    Polygon,
    Isometry,
    IDENTITY,
    applyIso,
    isMirrored,
    midpoint,
    pointInPolygon,
    polygonArea,
    polygonsOverlap,
    sharedBoundarySegments,
    collinearOverlap,
    ensureCCW,
    EPS,
    dist
} from './geometry';

export type Facet = {
    poly: Polygon; // paper-space polygon, CCW
    iso: Isometry; // paper space -> folded plane
    layer: number; // stacking order, 0 = bottom
};

export type AngleOverride = {
    point: Vec2; // paper-space point on the crease
    angle: number; // degrees in [0, 180]; 180 = fully flat-folded, smaller opens the fold
};

export type FoldedState = {
    facets: Facet[];
    overrides: AngleOverride[];
};

export type Crease = {
    a: number; // facet index
    b: number; // facet index
    seg: [Vec2, Vec2]; // shared segment in paper space
};

export const makeInitialState = (paperPoly: Polygon): FoldedState => ({
    facets: [{ poly: ensureCCW(paperPoly), iso: { ...IDENTITY }, layer: 0 }],
    overrides: []
});

/** Facet polygon mapped into the folded plane. */
export const foldedPoly = (f: Facet): Polygon => f.poly.map((p) => applyIso(f.iso, p));

/** Whether the facet's front face (paper front side) points up (+z) in the folded state. */
export const facetFaceUp = (f: Facet): boolean => !isMirrored(f.iso);

/** All creases, derived from paper-space adjacency. */
export const getCreases = (state: FoldedState): Crease[] => {
    const out: Crease[] = [];
    const n = state.facets.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const segs = sharedBoundarySegments(state.facets[i].poly, state.facets[j].poly);
            for (const seg of segs) {
                out.push({ a: i, b: j, seg });
            }
        }
    }
    return out;
};

/** Find the angle override applying to a crease, if any. */
export const findOverride = (state: FoldedState, crease: Crease): AngleOverride | null => {
    for (const o of state.overrides) {
        if (pointOnSegment(o.point, crease.seg)) return o;
    }
    return null;
};

export const pointOnSegment = (p: Vec2, seg: [Vec2, Vec2]): boolean => {
    const d = dist(seg[0], seg[1]);
    if (d < EPS) return false;
    return Math.abs(dist(p, seg[0]) + dist(p, seg[1]) - d) < EPS * 100;
};

export const creaseKeyPoint = (crease: Crease): Vec2 => midpoint(crease.seg[0], crease.seg[1]);

/**
 * Effective fold angle per crease: a crease's own override, or one inherited
 * from an overridden crease stacked on the same folded line -- layers folded
 * across a common hinge line physically open together.
 */
export const effectiveAngles = (state: FoldedState, creases: Crease[]): (number | null)[] => {
    const angles: (number | null)[] = creases.map((c) => findOverride(state, c)?.angle ?? null);
    if (state.overrides.length === 0) return angles;
    const segs = creases.map((c): [Vec2, Vec2] => [
        applyIso(state.facets[c.a].iso, c.seg[0]),
        applyIso(state.facets[c.a].iso, c.seg[1])
    ]);
    let changed = true;
    while (changed) {
        changed = false;
        for (let i = 0; i < creases.length; i++) {
            if (angles[i] === null) continue;
            for (let j = 0; j < creases.length; j++) {
                if (angles[j] !== null) continue;
                if (collinearOverlap(segs[i][0], segs[i][1], segs[j][0], segs[j][1])) {
                    angles[j] = angles[i];
                    changed = true;
                }
            }
        }
    }
    return angles;
};

/**
 * Facets lifted out of the base plane by 3D angle overrides: everything not
 * connected to the largest facet (the pose root) through flat creases.
 */
export const outOfPlaneFacets = (state: FoldedState, creases: Crease[] = getCreases(state)): Set<number> => {
    const n = state.facets.length;
    if (state.overrides.length === 0) return new Set();
    const angles = effectiveAngles(state, creases);
    const adj: number[][] = Array.from({ length: n }, () => []);
    creases.forEach((c, k) => {
        if (angles[k] === null) {
            adj[c.a].push(c.b);
            adj[c.b].push(c.a);
        }
    });
    let root = 0;
    let bestArea = -Infinity;
    state.facets.forEach((f, i) => {
        const a = Math.abs(polygonArea(f.poly));
        if (a > bestArea) {
            bestArea = a;
            root = i;
        }
    });
    const inPlane = new Set<number>([root]);
    const queue = [root];
    while (queue.length > 0) {
        const u = queue.pop()!;
        for (const v of adj[u]) {
            if (!inPlane.has(v)) {
                inPlane.add(v);
                queue.push(v);
            }
        }
    }
    const out = new Set<number>();
    for (let i = 0; i < n; i++) {
        if (!inPlane.has(i)) out.add(i);
    }
    return out;
};

/**
 * Topmost (sign=+1) or bottommost (sign=-1) facet containing a folded-plane point.
 * Returns -1 if no facet contains the point.
 */
export const facetAtPoint = (
    state: FoldedState,
    p: Vec2,
    sign: 1 | -1,
    eps: number = 5e-3,
    exclude?: Set<number>
): number => {
    let best = -1;
    let bestLayer = sign === 1 ? -Infinity : Infinity;
    state.facets.forEach((f, i) => {
        if (exclude?.has(i)) return;
        if (!pointInPolygon(foldedPoly(f), p, eps)) return;
        if (sign === 1 ? f.layer > bestLayer : f.layer < bestLayer) {
            bestLayer = f.layer;
            best = i;
        }
    });
    return best;
};

/**
 * Snap together paper-space vertices of different facets that are within the
 * welding tolerance. Splits computed through different isometries drift by
 * tiny amounts; snapping keeps shared boundaries exactly equal so the derived
 * crease graph stays connected.
 */
export const canonicalizeVertices = (facets: Facet[]): void => {
    const SNAP = 2e-3;
    const reps: Vec2[] = [];
    for (const f of facets) {
        const mapped = f.poly.map((p) => {
            for (const r of reps) {
                if (dist(r, p) < SNAP) return r;
            }
            reps.push(p);
            return p;
        });
        // snapping can collapse short edges; drop the resulting duplicates
        f.poly = mapped.filter((p, i) => p !== mapped[(i + 1) % mapped.length]);
    }
};

/** Compress layer values to dense 0..k-1 ranks, preserving order. */
export const normalizeLayers = (facets: Facet[]): void => {
    const layers = [...new Set(facets.map((f) => f.layer))].sort((x, y) => x - y);
    const rank = new Map(layers.map((l, i) => [l, i]));
    facets.forEach((f) => (f.layer = rank.get(f.layer)!));
};

export const totalArea = (state: FoldedState): number =>
    state.facets.reduce((s, f) => s + Math.abs(polygonArea(f.poly)), 0);

export const maxLayer = (state: FoldedState): number => Math.max(...state.facets.map((f) => f.layer));

/**
 * Check physical consistency of a folded state. Returns an error description
 * or null if the state is valid. Used to reject ops that would tear the paper
 * or interpenetrate layers.
 */
export const validateState = (state: FoldedState): string | null => {
    // creased neighbors must map their shared segment to the same folded segment (no tearing)
    for (const c of getCreases(state)) {
        const fa = state.facets[c.a];
        const fb = state.facets[c.b];
        for (const p of c.seg) {
            const pa = applyIso(fa.iso, p);
            const pb = applyIso(fb.iso, p);
            // tolerance covers vertex welding drift near hinge lines
            if (dist(pa, pb) > 1e-2) {
                return `torn crease between facets ${c.a} and ${c.b}`;
            }
        }
    }
    // overlapping facets must occupy distinct layers
    const folded = state.facets.map(foldedPoly);
    for (let i = 0; i < state.facets.length; i++) {
        for (let j = i + 1; j < state.facets.length; j++) {
            if (state.facets[i].layer !== state.facets[j].layer) continue;
            if (polygonsOverlap(folded[i], folded[j])) {
                return `facets ${i} and ${j} overlap on layer ${state.facets[i].layer}`;
            }
        }
    }
    return null;
};

export const cloneState = (state: FoldedState): FoldedState => ({
    facets: state.facets.map((f) => ({ poly: f.poly.map((p) => [p[0], p[1]] as Vec2), iso: { ...f.iso }, layer: f.layer })),
    overrides: state.overrides.map((o) => ({ point: [o.point[0], o.point[1]] as Vec2, angle: o.angle }))
});
