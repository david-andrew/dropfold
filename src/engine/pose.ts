/**
 * 3D pose solver: maps the flat folded state to world transforms per facet.
 *
 * The ground-truth model is always flat; facets sit at z = layer * thickness.
 * Creases may carry angle overrides (180 = fully folded flat, 0 = unfolded,
 * -180 = flat on the opposite side).
 * Poses are computed by walking a spanning tree of the crease graph: a crease
 * with an override rotates its whole subtree about the hinge axis, opening
 * the fold away from the flat position.
 */
import * as THREE from 'three';
import {
    applyIso,
    lineFromPoints,
    signedDist,
    polygonCentroid,
    cross,
    perp,
    sub,
    normalize,
    Vec2
} from './geometry';
import {
    FoldedState,
    Crease,
    getCreases,
    effectiveAngles,
    flatComponentInfo,
    foldedPoly,
    findOverride,
    creaseKeyPoint,
    pointOnSegment
} from './model';
import { polygonArea } from './geometry';

/** 4x4 matrix from a 2D isometry plus a z offset. */
const isoToMatrix = (iso: { a: number; b: number; c: number; d: number; tx: number; ty: number }, z: number) => {
    const m = new THREE.Matrix4();
    // prettier-ignore
    m.set(
        iso.a, iso.b, 0, iso.tx,
        iso.c, iso.d, 0, iso.ty,
        0,     0,     1, z,
        0,     0,     0, 1
    );
    return m;
};

class UnionFind {
    parent: number[];
    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
    }
    find(x: number): number {
        while (this.parent[x] !== x) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }
    union(a: number, b: number): boolean {
        const ra = this.find(a);
        const rb = this.find(b);
        if (ra === rb) return false;
        this.parent[ra] = rb;
        return true;
    }
}

export type PoseResult = {
    matrices: THREE.Matrix4[]; // world transform per facet (applied to paper-space geometry at z=0)
    // world direction of increasing layer per facet; follows the thickness
    // frame, which diverges from the surface frame once a hinge goes negative
    layerDirs: THREE.Vector3[];
    creases: Crease[];
};

export const computePose = (state: FoldedState, thickness: number): PoseResult => {
    const n = state.facets.length;
    const flat = state.facets.map((f) => isoToMatrix(f.iso, 0));
    const creases = getCreases(state);

    if (state.overrides.length === 0) {
        return {
            matrices: state.facets.map((f) => isoToMatrix(f.iso, f.layer * thickness)),
            layerDirs: state.facets.map(() => new THREE.Vector3(0, 0, 1)),
            creases
        };
    }

    // spanning tree over the crease graph; hinged creases claim tree edges first
    // so that every hinged crease actually participates in the pose
    // (effectiveAngles spreads each override to creases stacked on its line, so
    // a packet folded across the hinge opens together instead of tearing)
    type Edge = { crease: Crease; angle: number | null };
    const angles = effectiveAngles(state, creases);
    const edges: Edge[] = creases.map((c, k) => ({ crease: c, angle: angles[k] }));
    edges.sort((a, b) => Number(a.angle === null) - Number(b.angle === null));

    const uf = new UnionFind(n);
    const adj: { to: number; edge: Edge }[][] = Array.from({ length: n }, () => []);
    for (const e of edges) {
        if (uf.union(e.crease.a, e.crease.b)) {
            adj[e.crease.a].push({ to: e.crease.b, edge: e });
            adj[e.crease.b].push({ to: e.crease.a, edge: e });
        }
    }

    // root inside the base component (the area-weighted centroid of the
    // component tree), so the heavier side of every hinge stays fixed and the
    // lighter side swings; any facet of the rigid base gives the same pose
    const { compOf, base } = flatComponentInfo(state, creases);
    let root = 0;
    let bestArea = -Infinity;
    state.facets.forEach((f, i) => {
        if (compOf[i] !== base) return;
        const a = Math.abs(polygonArea(f.poly));
        if (a > bestArea) {
            bestArea = a;
            root = i;
        }
    });

    const matrices: THREE.Matrix4[] = new Array(n);
    const thicknessFrames: THREE.Matrix4[] = new Array(n);
    // world direction of increasing layer per facet (+z carried through the
    // beta-clamped hinges, so it flips to the far side past -0 degrees)
    const layerDirs: THREE.Vector3[] = new Array(n);
    // for facets entered through a hinged tree edge: the world direction of
    // the fold's bisector (half-angle, unclamped so -180 wraps below) and the
    // parent facet; the thickness seam steps across the hinge along this
    // direction so both sides of the fold splay symmetrically like a spine
    const hingeStep: (THREE.Vector3 | null)[] = new Array(n).fill(null);
    const hingeFrom: number[] = new Array(n).fill(-1);
    const visited = new Array(n).fill(false);

    const visit = (u: number) => {
        visited[u] = true;
        for (const { to: v, edge } of adj[u]) {
            if (visited[v]) continue;
            // relative transform of v with respect to u in the flat state
            const rel = flat[u].clone().invert().multiply(flat[v]);
            let local = rel;
            let localThickness = rel;
            if (edge.angle !== null && edge.angle < 180) {
                const c = edge.crease;
                // hinge line in the flat folded plane, seen through facet u
                const p0 = applyIso(state.facets[u].iso, c.seg[0]);
                const p1 = applyIso(state.facets[u].iso, c.seg[1]);
                const d2 = normalize(sub(p1, p0));
                const line = lineFromPoints(p0 as Vec2, p1 as Vec2);
                // which side of the hinge v's folded material lies on
                const vCentroid = polygonCentroid(foldedPoly(state.facets[v]));
                const sideV = Math.sign(signedDist(line, vCentroid)) || 1;
                // open upward if v is stacked above u, downward otherwise
                const upSign = Math.sign(state.facets[v].layer - state.facets[u].layer) || 1;
                // pick axis direction so rotating v's material by +alpha moves it toward upSign*z
                const nDir: Vec2 = [perp(d2)[0] * sideV, perp(d2)[1] * sideV];
                const axisSign = cross(d2, nDir) * upSign > 0 ? 1 : -1;
                const axis = new THREE.Vector3(d2[0] * axisSign, d2[1] * axisSign, 0);
                const alpha = ((180 - edge.angle) * Math.PI) / 180;
                const beta = Math.min(alpha, Math.PI);
                const pivot = new THREE.Vector3(p0[0], p0[1], 0);
                const rot = new THREE.Matrix4()
                    .makeTranslation(pivot.x, pivot.y, pivot.z)
                    .multiply(new THREE.Matrix4().makeRotationAxis(axis, alpha))
                    .multiply(new THREE.Matrix4().makeTranslation(-pivot.x, -pivot.y, -pivot.z));
                const rotThickness = new THREE.Matrix4()
                    .makeTranslation(pivot.x, pivot.y, pivot.z)
                    .multiply(new THREE.Matrix4().makeRotationAxis(axis, beta))
                    .multiply(new THREE.Matrix4().makeTranslation(-pivot.x, -pivot.y, -pivot.z));
                // rotation acts in u's flat frame: P(v) = P(u) * flat(u)^-1 * rot * flat(v)
                local = flat[u].clone().invert().multiply(rot).multiply(flat[v]);
                localThickness = flat[u].clone().invert().multiply(rotThickness).multiply(flat[v]);
                const half = new THREE.Matrix4().makeRotationAxis(axis, alpha / 2);
                hingeStep[v] = new THREE.Vector3(0, 0, 1).transformDirection(
                    thicknessFrames[u].clone().multiply(flat[u].clone().invert()).multiply(half)
                );
                hingeFrom[v] = u;
            }
            matrices[v] = matrices[u].clone().multiply(local);
            thicknessFrames[v] = thicknessFrames[u].clone().multiply(localThickness);
            // isometries preserve z, so this is +z rotated by the hinges on the path
            layerDirs[v] = new THREE.Vector3(0, 0, 1).transformDirection(thicknessFrames[v]);
            visit(v);
        }
    };

    matrices[root] = flat[root].clone();
    thicknessFrames[root] = flat[root].clone();
    layerDirs[root] = new THREE.Vector3(0, 0, 1);
    visit(root);
    // disconnected facets (shouldn't happen for real paper) fall back to flat pose
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            matrices[i] = flat[i];
            layerDirs[i] = new THREE.Vector3(0, 0, 1);
        }
    }

    // Thickness placement: facet i sits at anchor(comp) + layer * t * layerDir.
    // Every facet of a rigid component shares one anchor, so stacking inside a
    // packet is exact (seam gap = |layer delta| * t) no matter how many hinge
    // creases enter it -- per-tree-path offsets would anchor each subtree at a
    // different parent layer and shear the packet apart. The anchor continues
    // each sheet from its parent-side height, stepping across the hinge along
    // the fold's bisector so the thickness opens symmetrically (a book spine,
    // not one cover pivoting on the other's edge): a hinge (u in p, v in c)
    // wants
    //   A_c + Lv*t*z_c = (A_p + Lu*t*z_p) + (Lv - Lu)*t*m
    // with m the bisector direction; averaged over all hinges into c.
    const nComp = compOf.reduce((m, c) => Math.max(m, c), 0) + 1;
    const compDir: THREE.Vector3[] = new Array(nComp);
    for (let i = 0; i < n; i++) compDir[compOf[i]] = layerDirs[i];
    const anchors: (THREE.Vector3 | null)[] = new Array(nComp).fill(null);
    anchors[base] = new THREE.Vector3();
    const queue = [base];
    while (queue.length) {
        const p = queue.shift()!;
        const acc = new Map<number, { lu: number; lv: number; count: number }>();
        creases.forEach((c, k) => {
            const a = angles[k];
            if (a === null || a >= 180) return;
            for (const [u, v] of [
                [c.a, c.b],
                [c.b, c.a]
            ]) {
                if (compOf[u] !== p || compOf[v] === p || anchors[compOf[v]] !== null) continue;
                const e = acc.get(compOf[v]) ?? { lu: 0, lv: 0, count: 0 };
                e.lu += state.facets[u].layer;
                e.lv += state.facets[v].layer;
                e.count++;
                acc.set(compOf[v], e);
            }
        });
        for (const [child, { lu, lv, count }] of acc) {
            const mLu = (lu / count) * thickness;
            const mLv = (lv / count) * thickness;
            let step: THREE.Vector3 | null = null;
            for (let i = 0; i < n && !step; i++) {
                if (compOf[i] === child && hingeStep[i] && compOf[hingeFrom[i]] === p) step = hingeStep[i];
            }
            anchors[child] = anchors[p]!.clone()
                .addScaledVector(compDir[p], mLu)
                .addScaledVector(step ?? compDir[child], mLv - mLu)
                .addScaledVector(compDir[child], -mLv);
            queue.push(child);
        }
    }

    const finalMatrices = matrices.map((m, i) => {
        if (thickness === 0) return m;
        const off = (anchors[compOf[i]] ?? new THREE.Vector3())
            .clone()
            .addScaledVector(layerDirs[i], state.facets[i].layer * thickness);
        const out = m.clone();
        out.elements[12] += off.x;
        out.elements[13] += off.y;
        out.elements[14] += off.z;
        return out;
    });

    return { matrices: finalMatrices, layerDirs, creases };
};

// generous enough for vertex-weld drift between nearly-collinear stacked
// hinges, far below the O(flap size) gap of a genuine tear
const TEAR_TOL = 0.05;

/**
 * Whether the state poses without tearing: every crease must map its shared
 * segment to the same place through both of its facets. Zero thickness, so
 * legitimate layer gaps don't count as tears.
 *
 * The pose solver only follows a spanning tree, so facets connected by
 * multiple paths can disagree across non-tree creases when a hinge separates
 * them -- exactly the "stretched edge" artifact; this detects it up front.
 */
export const poseConsistent = (state: FoldedState): boolean => {
    if (state.overrides.length === 0) return true;
    const { matrices, creases } = computePose(state, 0);
    const pa = new THREE.Vector3();
    const pb = new THREE.Vector3();
    for (const c of creases) {
        for (const e of c.seg) {
            pa.set(e[0], e[1], 0).applyMatrix4(matrices[c.a]);
            pb.set(e[0], e[1], 0).applyMatrix4(matrices[c.b]);
            if (pa.distanceTo(pb) > TEAR_TOL) return false;
        }
    }
    return true;
};

/**
 * Whether the crease can hinge in 3D without tearing the paper: poses a trial
 * angle (on top of any existing overrides) and checks seam consistency.
 */
export const canOpenCrease = (state: FoldedState, crease: Crease): boolean => {
    const current = findOverride(state, crease)?.angle ?? 180;
    const sign = current < 0 ? -1 : 1;
    const testAngle = sign * (Math.abs(Math.abs(current) - 90) < 1 ? 45 : 90);
    const overrides = state.overrides.filter((o) => !pointOnSegment(o.point, crease.seg));
    overrides.push({ point: creaseKeyPoint(crease), angle: testAngle });
    return poseConsistent({ facets: state.facets, overrides });
};
