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
    angle: number; // degrees in [-180, 180]; 180 = flat fold, 0 = fully open, -180 = flat on the opposite side
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

// memoized per facets array: facet polys are never mutated once a state is
// built, and drag clamping re-derives creases for the same state many times
const creaseCache = new WeakMap<Facet[], Crease[]>();

// shortest shared boundary that counts as a crease; well above vertex-weld
// drift (2e-3) and far below any meaningful fold feature
const MIN_CREASE_LEN = 2e-2;

/** All creases, derived from paper-space adjacency. */
export const getCreases = (state: FoldedState): Crease[] => {
    const cached = creaseCache.get(state.facets);
    if (cached) return cached;

    const out: Crease[] = [];
    const n = state.facets.length;
    // facets can only share boundary if their paper-space bounding boxes touch
    const boxes = state.facets.map((f) => {
        let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        for (const p of f.poly) {
            if (p[0] < x0) x0 = p[0];
            if (p[0] > x1) x1 = p[0];
            if (p[1] < y0) y0 = p[1];
            if (p[1] > y1) y1 = p[1];
        }
        return { x0, y0, x1, y1 };
    });
    const margin = 1e-2;
    for (let i = 0; i < n; i++) {
        const bi = boxes[i];
        for (let j = i + 1; j < n; j++) {
            const bj = boxes[j];
            if (bi.x1 < bj.x0 - margin || bj.x1 < bi.x0 - margin) continue;
            if (bi.y1 < bj.y0 - margin || bj.y1 < bi.y0 - margin) continue;
            const segs = sharedBoundarySegments(state.facets[i].poly, state.facets[j].poly);
            for (const seg of segs) {
                // near-point contacts (vertex-weld noise where many fold lines
                // converge) are not physical creases: they must not connect
                // components, pull neighbors, or route the pose tree
                if (dist(seg[0], seg[1]) < MIN_CREASE_LEN) continue;
                out.push({ a: i, b: j, seg });
            }
        }
    }
    creaseCache.set(state.facets, out);
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
 *
 * Inheritance requires being wrapped into the same packet, not mere
 * collinearity: the crease must connect the same pair of rigid components as
 * the overridden crease. Creases that just happen to land on the line (a fold
 * clamped against a hinge wall, a mirrored stack's twin sheet, or a flap
 * tucked under the opposite face) are independent hinges and stay flat.
 */
export const effectiveAngles = (state: FoldedState, creases: Crease[]): (number | null)[] => {
    const own: (number | null)[] = creases.map((c) => findOverride(state, c)?.angle ?? null);
    if (state.overrides.length === 0) return own;
    const m = creases.length;
    const segs = creases.map((c): [Vec2, Vec2] => [
        applyIso(state.facets[c.a].iso, c.seg[0]),
        applyIso(state.facets[c.a].iso, c.seg[1])
    ]);
    // union creases that overlap on a common folded line (chains of overlap)
    const parent = Array.from({ length: m }, (_, i) => i);
    const find = (x: number): number => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m; j++) {
            if (find(i) === find(j)) continue;
            if (collinearOverlap(segs[i][0], segs[i][1], segs[j][0], segs[j][1])) {
                parent[find(i)] = find(j);
            }
        }
    }

    // provisional rigid components, treating every line-group member as hinged
    // (a packet member is flat-connected to the overridden crease's facets
    // elsewhere, so it spans the same component pair; an incidental flap is
    // its own provisional component and matches nothing)
    const n = state.facets.length;
    const fparent = Array.from({ length: n }, (_, i) => i);
    const ffind = (x: number): number => {
        while (fparent[x] !== x) {
            fparent[x] = fparent[fparent[x]];
            x = fparent[x];
        }
        return x;
    };
    const groupHasOverride = new Set<number>();
    for (let i = 0; i < m; i++) {
        if (own[i] !== null && own[i]! < 180) groupHasOverride.add(find(i));
    }
    creases.forEach((c, k) => {
        const hinged = groupHasOverride.has(find(k)) && !(own[k] !== null && own[k]! >= 180);
        if (!hinged) fparent[ffind(c.a)] = ffind(c.b);
    });

    const pairKey = (k: number) => {
        const a = ffind(creases[k].a);
        const b = ffind(creases[k].b);
        return `${find(k)}:${Math.min(a, b)},${Math.max(a, b)}`;
    };
    const packetAngle = new Map<string, number>();
    for (let i = 0; i < m; i++) {
        if (own[i] !== null && own[i]! < 180) packetAngle.set(pairKey(i), own[i]!);
    }
    const angles = own.slice();
    for (let i = 0; i < m; i++) {
        if (angles[i] === null) angles[i] = packetAngle.get(pairKey(i)) ?? null;
    }
    return angles;
};

/**
 * Facets lifted out of the base plane by 3D angle overrides: everything not
 * connected to the largest facet (the pose root) through flat creases.
 */
export type ComponentInfo = {
    compOf: number[]; // flat-component id per facet
    base: number; // id of the base component (stays fixed in the pose)
    count: number;
};

const componentCache = new WeakMap<FoldedState, ComponentInfo>();

/**
 * Flat components: groups of facets connected through flat (non-hinged)
 * creases. Each component is rigid and internally flat; 3D hinges only occur
 * between components.
 *
 * The base component (the one that stays fixed in the pose, and that grabs
 * default to) is the area-weighted centroid of the component tree: for every
 * hinge, the side with more paper stays put and the lighter side swings.
 * Unlike a "largest facet" rule this is stable while folds split facets.
 */
export const flatComponentInfo = (state: FoldedState, creases: Crease[] = getCreases(state)): ComponentInfo => {
    const cached = componentCache.get(state);
    if (cached) return cached;
    const n = state.facets.length;

    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x: number): number => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };
    const angles = state.overrides.length === 0 ? creases.map(() => null) : effectiveAngles(state, creases);
    creases.forEach((c, k) => {
        if (angles[k] === null || angles[k]! >= 180) parent[find(c.a)] = find(c.b);
    });

    const ids = new Map<number, number>();
    const compOf = state.facets.map((_, i) => {
        const r = find(i);
        if (!ids.has(r)) ids.set(r, ids.size);
        return ids.get(r)!;
    });
    const count = ids.size;

    // component areas and hinge adjacency
    const area = new Array(count).fill(0);
    state.facets.forEach((f, i) => (area[compOf[i]] += Math.abs(polygonArea(f.poly))));
    const adj: Set<number>[] = Array.from({ length: count }, () => new Set());
    creases.forEach((c) => {
        const a = compOf[c.a];
        const b = compOf[c.b];
        if (a !== b) {
            adj[a].add(b);
            adj[b].add(a);
        }
    });

    // area-weighted centroid: walk toward any neighbor whose side holds more
    // than half the total area (BFS subtree sums treat the graph as a tree)
    const total = area.reduce((s, a) => s + a, 0);
    let base = area.indexOf(Math.max(...area));
    for (let guard = 0; guard < count; guard++) {
        const side = (from: number, into: number): number => {
            let sum = 0;
            const seen = new Set([from, into]);
            const queue = [into];
            while (queue.length > 0) {
                const u = queue.pop()!;
                sum += area[u];
                for (const v of adj[u]) {
                    if (!seen.has(v)) {
                        seen.add(v);
                        queue.push(v);
                    }
                }
            }
            return sum;
        };
        const heavier = [...adj[base]].find((v) => side(base, v) > total / 2);
        if (heavier === undefined) break;
        base = heavier;
    }

    const info = { compOf, base, count };
    componentCache.set(state, info);
    return info;
};

export type HingeWall = { seg: [Vec2, Vec2]; a: number; b: number };

const wallCache = new WeakMap<FoldedState, HingeWall[]>();

/**
 * Folded-space hinge segments of 3D-opened creases. Material rises out of the
 * plane exactly along these segments, so for flat folds within an adjacent
 * component they act as walls that no moved material may cross.
 */
export const hingeWallSegments = (state: FoldedState, creases: Crease[] = getCreases(state)): HingeWall[] => {
    if (state.overrides.length === 0) return [];
    const cached = wallCache.get(state);
    if (cached) return cached;
    const angles = effectiveAngles(state, creases);
    const walls: HingeWall[] = [];
    creases.forEach((c, k) => {
        if (angles[k] === null || angles[k]! >= 180) return;
        const iso = state.facets[c.a].iso;
        walls.push({ seg: [applyIso(iso, c.seg[0]), applyIso(iso, c.seg[1])], a: c.a, b: c.b });
    });
    wallCache.set(state, walls);
    return walls;
};

/** Facets lifted out of the base plane (not in the base flat component). */
export const outOfPlaneFacets = (state: FoldedState, creases: Crease[] = getCreases(state)): Set<number> => {
    if (state.overrides.length === 0) return new Set();
    const { compOf, base } = flatComponentInfo(state, creases);
    const out = new Set<number>();
    compOf.forEach((c, i) => {
        if (c !== base) out.add(i);
    });
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
