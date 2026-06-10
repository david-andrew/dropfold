/**
 * 3D pose solver: maps the flat folded state to world transforms per facet.
 *
 * The ground-truth model is always flat; facets sit at z = layer * thickness.
 * Creases may carry angle overrides (180 = fully folded flat, 0 = unfolded).
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
import { FoldedState, Crease, getCreases, effectiveAngles, foldedPoly } from './model';
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
    creases: Crease[];
};

export const computePose = (state: FoldedState, thickness: number): PoseResult => {
    const n = state.facets.length;
    const flat = state.facets.map((f) => isoToMatrix(f.iso, f.layer * thickness));
    const creases = getCreases(state);

    if (state.overrides.length === 0) {
        return { matrices: flat, creases };
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

    // root at the largest facet
    let root = 0;
    let bestArea = -Infinity;
    state.facets.forEach((f, i) => {
        const a = Math.abs(polygonArea(f.poly));
        if (a > bestArea) {
            bestArea = a;
            root = i;
        }
    });

    const matrices: THREE.Matrix4[] = new Array(n);
    const visited = new Array(n).fill(false);

    const visit = (u: number) => {
        visited[u] = true;
        for (const { to: v, edge } of adj[u]) {
            if (visited[v]) continue;
            // relative transform of v with respect to u in the flat state
            const rel = flat[u].clone().invert().multiply(flat[v]);
            let local = rel;
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
                const zU = state.facets[u].layer * thickness;
                const pivot = new THREE.Vector3(p0[0], p0[1], zU);
                const rot = new THREE.Matrix4()
                    .makeTranslation(pivot.x, pivot.y, pivot.z)
                    .multiply(new THREE.Matrix4().makeRotationAxis(axis, alpha))
                    .multiply(new THREE.Matrix4().makeTranslation(-pivot.x, -pivot.y, -pivot.z));
                // rotation acts in u's flat frame: P(v) = P(u) * flat(u)^-1 * rot * flat(v)
                local = flat[u].clone().invert().multiply(rot).multiply(flat[v]);
            }
            matrices[v] = matrices[u].clone().multiply(local);
            visit(v);
        }
    };

    matrices[root] = flat[root].clone();
    visit(root);
    // disconnected facets (shouldn't happen for real paper) fall back to flat pose
    for (let i = 0; i < n; i++) {
        if (!visited[i]) matrices[i] = flat[i];
    }

    return { matrices, creases };
};
