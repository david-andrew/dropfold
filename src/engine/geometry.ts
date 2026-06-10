/**
 * Pure 2D geometry kernel for the fold engine.
 * No three.js dependency; everything works on plain serializable data.
 */

export type Vec2 = readonly [number, number];

export const EPS = 1e-6; // length-scale epsilon (paper dimensions are ~1-20 units)
export const EPS_AREA = 1e-9;

// ---------------------------------------------------------------------------
// vectors

export const add = (a: Vec2, b: Vec2): Vec2 => [a[0] + b[0], a[1] + b[1]];
export const sub = (a: Vec2, b: Vec2): Vec2 => [a[0] - b[0], a[1] - b[1]];
export const scale = (a: Vec2, s: number): Vec2 => [a[0] * s, a[1] * s];
export const dot = (a: Vec2, b: Vec2): number => a[0] * b[0] + a[1] * b[1];
export const cross = (a: Vec2, b: Vec2): number => a[0] * b[1] - a[1] * b[0];
export const len = (a: Vec2): number => Math.hypot(a[0], a[1]);
export const dist = (a: Vec2, b: Vec2): number => len(sub(a, b));
export const normalize = (a: Vec2): Vec2 => scale(a, 1 / len(a));
export const lerp = (a: Vec2, b: Vec2, t: number): Vec2 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
export const perp = (a: Vec2): Vec2 => [-a[1], a[0]]; // 90 degrees CCW
export const midpoint = (a: Vec2, b: Vec2): Vec2 => lerp(a, b, 0.5);

// ---------------------------------------------------------------------------
// lines (infinite, directed)

export type Line = { p: Vec2; d: Vec2 }; // d is unit length

export const lineFromPoints = (a: Vec2, b: Vec2): Line => ({ p: a, d: normalize(sub(b, a)) });

/** Perpendicular bisector of segment a->b. Positive side (left of direction) contains `a`. */
export const perpBisector = (a: Vec2, b: Vec2): Line => {
    const m = midpoint(a, b);
    // direction such that `a` is on the positive (left) side
    const d = normalize(perp(sub(b, a)));
    return { p: m, d };
};

/** Signed distance from line (positive = left of direction d). */
export const signedDist = (l: Line, q: Vec2): number => cross(l.d, sub(q, l.p));

/** Intersection parameter t along segment a->b where it crosses the line, or null if parallel. */
export const segmentLineIntersection = (a: Vec2, b: Vec2, l: Line): Vec2 | null => {
    const da = signedDist(l, a);
    const db = signedDist(l, b);
    if (Math.abs(da - db) < 1e-12) return null;
    const t = da / (da - db);
    if (t < -EPS || t > 1 + EPS) return null;
    return lerp(a, b, t);
};

// ---------------------------------------------------------------------------
// isometries (2D rigid transforms, possibly mirrored)
// p -> [a*x + b*y + tx, c*x + d*y + ty], with orthogonal linear part (det = +-1)

export type Isometry = { a: number; b: number; c: number; d: number; tx: number; ty: number };

export const IDENTITY: Isometry = { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 };

export const applyIso = (m: Isometry, p: Vec2): Vec2 => [
    m.a * p[0] + m.b * p[1] + m.tx,
    m.c * p[0] + m.d * p[1] + m.ty
];

export const applyIsoLinear = (m: Isometry, v: Vec2): Vec2 => [m.a * v[0] + m.b * v[1], m.c * v[0] + m.d * v[1]];

/** first apply g, then f */
export const composeIso = (f: Isometry, g: Isometry): Isometry => ({
    a: f.a * g.a + f.b * g.c,
    b: f.a * g.b + f.b * g.d,
    c: f.c * g.a + f.d * g.c,
    d: f.c * g.b + f.d * g.d,
    tx: f.a * g.tx + f.b * g.ty + f.tx,
    ty: f.c * g.tx + f.d * g.ty + f.ty
});

export const invertIso = (m: Isometry): Isometry => {
    // orthogonal linear part: inverse = transpose / det handling via adjugate (det = +-1)
    const det = m.a * m.d - m.b * m.c;
    const a = m.d / det;
    const b = -m.b / det;
    const c = -m.c / det;
    const d = m.a / det;
    return { a, b, c, d, tx: -(a * m.tx + b * m.ty), ty: -(c * m.tx + d * m.ty) };
};

export const isoDet = (m: Isometry): number => m.a * m.d - m.b * m.c;
export const isMirrored = (m: Isometry): boolean => isoDet(m) < 0;

/** Reflection across a line, as an isometry (det = -1). */
export const reflectionAcross = (l: Line): Isometry => {
    const n = perp(l.d); // unit normal
    const [nx, ny] = n;
    const k = 2 * dot(l.p, n);
    return {
        a: 1 - 2 * nx * nx,
        b: -2 * nx * ny,
        c: -2 * nx * ny,
        d: 1 - 2 * ny * ny,
        tx: k * nx,
        ty: k * ny
    };
};

/** Map a line through an isometry. */
export const transformLine = (m: Isometry, l: Line): Line => ({
    p: applyIso(m, l.p),
    d: normalize(applyIsoLinear(m, l.d))
});

// ---------------------------------------------------------------------------
// polygons (arrays of vertices; facets are always convex)

export type Polygon = Vec2[];

/** Signed area (positive for CCW). */
export const polygonArea = (poly: Polygon): number => {
    let s = 0;
    for (let i = 0; i < poly.length; i++) {
        s += cross(poly[i], poly[(i + 1) % poly.length]);
    }
    return s / 2;
};

export const polygonCentroid = (poly: Polygon): Vec2 => {
    let cx = 0;
    let cy = 0;
    let area = 0;
    for (let i = 0; i < poly.length; i++) {
        const p = poly[i];
        const q = poly[(i + 1) % poly.length];
        const c = cross(p, q);
        area += c;
        cx += (p[0] + q[0]) * c;
        cy += (p[1] + q[1]) * c;
    }
    area /= 2;
    return [cx / (6 * area), cy / (6 * area)];
};

export const ensureCCW = (poly: Polygon): Polygon => (polygonArea(poly) < 0 ? [...poly].reverse() : poly);

const WELD_EPS = 1e-4; // vertices closer than this are merged (paper scale is ~10 units)

/** Remove consecutive near-duplicate vertices (and collinear slivers). */
export const cleanPolygon = (poly: Polygon): Polygon => {
    const out: Vec2[] = [];
    for (const p of poly) {
        if (out.length > 0 && dist(out[out.length - 1], p) < WELD_EPS) continue;
        out.push(p);
    }
    while (out.length > 1 && dist(out[0], out[out.length - 1]) < WELD_EPS) out.pop();
    // drop collinear middle vertices
    const out2: Vec2[] = [];
    for (let i = 0; i < out.length; i++) {
        const prev = out[(i - 1 + out.length) % out.length];
        const cur = out[i];
        const next = out[(i + 1) % out.length];
        if (Math.abs(cross(sub(cur, prev), sub(next, cur))) < EPS_AREA && dot(sub(cur, prev), sub(next, cur)) > 0) {
            continue;
        }
        out2.push(cur);
    }
    return out2;
};

/**
 * Clip polygon to one side of a line (Sutherland-Hodgman against a half-plane).
 * side = +1 keeps the positive (left) side, -1 keeps the negative side.
 */
export const clipPolygon = (poly: Polygon, l: Line, side: 1 | -1): Polygon => {
    const out: Vec2[] = [];
    const n = poly.length;
    for (let i = 0; i < n; i++) {
        const cur = poly[i];
        const next = poly[(i + 1) % n];
        const dc = side * signedDist(l, cur);
        const dn = side * signedDist(l, next);
        if (dc >= -EPS) {
            out.push(cur);
            if (dn < -EPS && dc > EPS) {
                const x = segmentLineIntersection(cur, next, l);
                if (x) out.push(x);
            }
        } else if (dn > EPS) {
            const x = segmentLineIntersection(cur, next, l);
            if (x) out.push(x);
        }
    }
    return cleanPolygon(out);
};

export type SplitResult = { pos: Polygon | null; neg: Polygon | null };

/** Split a convex polygon by a line into positive-side and negative-side pieces (null if degenerate). */
export const splitPolygon = (poly: Polygon, l: Line): SplitResult => {
    const pos = clipPolygon(poly, l, 1);
    const neg = clipPolygon(poly, l, -1);
    const minArea = 1e-3; // pieces smaller than this are treated as not present
    const posOk = pos.length >= 3 && Math.abs(polygonArea(pos)) > minArea;
    const negOk = neg.length >= 3 && Math.abs(polygonArea(neg)) > minArea;
    if (posOk && !negOk) return { pos: poly, neg: null };
    if (!posOk && negOk) return { pos: null, neg: poly };
    if (!posOk && !negOk) return { pos: null, neg: null };
    return { pos, neg };
};

/** Area of overlap between two convex polygons (orientation-insensitive). */
export const convexOverlapArea = (a: Polygon, b: Polygon): number => {
    let clip = ensureCCW(a);
    const bb = ensureCCW(b);
    const n = bb.length;
    for (let i = 0; i < n; i++) {
        if (clip.length < 3) return 0;
        const edge = lineFromPoints(bb[i], bb[(i + 1) % n]);
        clip = clipPolygon(clip, edge, 1);
    }
    if (clip.length < 3) return 0;
    return Math.abs(polygonArea(clip));
};

export const polygonsOverlap = (a: Polygon, b: Polygon): boolean => convexOverlapArea(a, b) > 1e-4;

/** Point-in-convex-polygon test, inclusive of boundary (within eps). */
export const pointInPolygon = (poly: Polygon, q: Vec2, eps: number = EPS): boolean => {
    const p = ensureCCW(poly);
    const n = p.length;
    for (let i = 0; i < n; i++) {
        const a = p[i];
        const b = p[(i + 1) % n];
        const elen = len(sub(b, a));
        if (elen < WELD_EPS) continue; // degenerate edges carry no direction information
        if (cross(sub(b, a), sub(q, a)) < -eps * elen) return false;
    }
    return true;
};

/** Closest point on the polygon boundary to q, plus the index of the edge it lies on. */
export const closestBoundaryPoint = (poly: Polygon, q: Vec2): { point: Vec2; edge: number; distance: number } => {
    let best: Vec2 = poly[0];
    let bestDist = Infinity;
    let bestEdge = 0;
    const n = poly.length;
    for (let i = 0; i < n; i++) {
        const a = poly[i];
        const b = poly[(i + 1) % n];
        const ab = sub(b, a);
        const denom = dot(ab, ab);
        const t = denom < 1e-12 ? 0 : Math.max(0, Math.min(1, dot(sub(q, a), ab) / denom));
        const c = lerp(a, b, t);
        const d = dist(c, q);
        if (d < bestDist) {
            bestDist = d;
            best = c;
            bestEdge = i;
        }
    }
    return { point: best, edge: bestEdge, distance: bestDist };
};

/**
 * Overlap of two collinear segments. Returns the shared sub-segment if it has
 * positive length, otherwise null. Segments must already be near-collinear.
 */
export const collinearOverlap = (a0: Vec2, a1: Vec2, b0: Vec2, b1: Vec2): [Vec2, Vec2] | null => {
    const d = sub(a1, a0);
    const L = len(d);
    if (L < EPS) return null;
    const dir = scale(d, 1 / L);
    // check collinearity of b's endpoints with segment a (tolerance covers vertex welding drift)
    if (Math.abs(cross(dir, sub(b0, a0))) > 5e-3 || Math.abs(cross(dir, sub(b1, a0))) > 5e-3) return null;
    const t0 = 0;
    const t1 = L;
    let s0 = dot(sub(b0, a0), dir);
    let s1 = dot(sub(b1, a0), dir);
    if (s0 > s1) [s0, s1] = [s1, s0];
    const lo = Math.max(t0, s0);
    const hi = Math.min(t1, s1);
    if (hi - lo < 1e-3) return null;
    return [add(a0, scale(dir, lo)), add(a0, scale(dir, hi))];
};

/** Shared boundary segments between two polygons (paper-space crease detection). */
export const sharedBoundarySegments = (a: Polygon, b: Polygon): [Vec2, Vec2][] => {
    const out: [Vec2, Vec2][] = [];
    for (let i = 0; i < a.length; i++) {
        const a0 = a[i];
        const a1 = a[(i + 1) % a.length];
        for (let j = 0; j < b.length; j++) {
            const b0 = b[j];
            const b1 = b[(j + 1) % b.length];
            const seg = collinearOverlap(a0, a1, b0, b1);
            if (seg) out.push(seg);
        }
    }
    return out;
};
