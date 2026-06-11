/**
 * Builds the three.js scene representation of a folded state.
 * The whole object is rebuilt whenever the state changes (facet counts are
 * small, and this guarantees the preview always matches the model exactly).
 */
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

import { FoldedState, foldedPoly } from '../engine/model';
import { computePose } from '../engine/pose';
import { dist, isMirrored } from '../engine/geometry';
import { makePatternMaterial, PatternId } from './materials';

export type PaperStyle = {
    frontPattern: PatternId;
    frontColor0: string;
    frontColor1: string;
    backPattern: PatternId;
    backColor0: string;
    backColor1: string;
    edgeColor: string;
    thickness?: number; // per-layer z offset; default DEFAULT_THICKNESS
};

export type PaperObject = {
    group: THREE.Group;
    facetMeshes: THREE.Mesh[]; // indexed like state.facets
    matrices: THREE.Matrix4[]; // pose transform per facet (paper space -> world)
    layerDirs: THREE.Vector3[]; // world direction of increasing layer per facet
    // dim every facet not in the set (null restores full colors); used to
    // emphasize the facets a hovered 3D hinge would move
    setEmphasis: (moving: Set<number> | null) => void;
    dispose: () => void;
};

const DEFAULT_THICKNESS = 0.0025;

export const buildPaperObject = (state: FoldedState, style: PaperStyle): PaperObject => {
    const group = new THREE.Group();
    const disposables: { dispose: () => void }[] = [];
    const facetMeshes: THREE.Mesh[] = [];

    const { matrices, layerDirs, creases } = computePose(state, style.thickness ?? DEFAULT_THICKNESS);

    const frontMat = makePatternMaterial(style.frontPattern, style.frontColor0, style.frontColor1, THREE.FrontSide);
    const backMat = makePatternMaterial(style.backPattern, style.backColor0, style.backColor1, THREE.BackSide);
    disposables.push(frontMat, backMat);

    const lineMat = new LineMaterial({ color: new THREE.Color(style.edgeColor).getHex(), linewidth: 1.5 });
    lineMat.resolution.set(window.innerWidth, window.innerHeight);
    disposables.push(lineMat);

    const ribbonMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(style.frontColor0).lerp(new THREE.Color('#ffffff'), 0.3),
        side: THREE.DoubleSide
    });
    disposables.push(ribbonMat);

    // facets
    state.facets.forEach((f, i) => {
        const shape = new THREE.Shape(f.poly.map(([x, y]) => new THREE.Vector2(x, y)));
        const geometry = new THREE.ShapeGeometry(shape);
        // three.js flips frontFace for negative-determinant matrices, which would
        // keep the front material facing the viewer on flipped-over facets;
        // reverse the winding of mirrored facets so the back of the paper
        // actually shows the back material
        if (isMirrored(f.iso)) {
            const idx = geometry.index!;
            for (let t = 0; t < idx.count; t += 3) {
                const a = idx.getX(t);
                idx.setX(t, idx.getX(t + 2));
                idx.setX(t + 2, a);
            }
        }
        geometry.clearGroups();
        geometry.addGroup(0, geometry.index!.count, 0);
        geometry.addGroup(0, geometry.index!.count, 1);
        disposables.push(geometry);

        const mesh = new THREE.Mesh(geometry, [frontMat, backMat]);
        mesh.applyMatrix4(matrices[i]);
        group.add(mesh);
        facetMeshes.push(mesh);

        // outline
        const pts = [...f.poly, f.poly[0]].map(([x, y]) => new THREE.Vector3(x, y, 0).applyMatrix4(matrices[i]));
        const lineGeometry = new LineGeometry();
        lineGeometry.setPositions(pts.flatMap((p) => [p.x, p.y, p.z]));
        disposables.push(lineGeometry);
        const line = new Line2(lineGeometry, lineMat);
        group.add(line);
    });

    // crease ribbons connect facets across layer gaps
    for (const c of creases) {
        // the segment as seen from facet a and from facet b (same xy, different z when stacked)
        const a0 = new THREE.Vector3(c.seg[0][0], c.seg[0][1], 0).applyMatrix4(matrices[c.a]);
        const a1 = new THREE.Vector3(c.seg[1][0], c.seg[1][1], 0).applyMatrix4(matrices[c.a]);
        const b0 = new THREE.Vector3(c.seg[0][0], c.seg[0][1], 0).applyMatrix4(matrices[c.b]);
        const b1 = new THREE.Vector3(c.seg[1][0], c.seg[1][1], 0).applyMatrix4(matrices[c.b]);
        if (a0.distanceTo(b0) < 1e-6 && a1.distanceTo(b1) < 1e-6) continue; // coplanar, no gap

        const geometry = new THREE.BufferGeometry();
        // prettier-ignore
        const vertices = new Float32Array([
            a0.x, a0.y, a0.z,
            a1.x, a1.y, a1.z,
            b1.x, b1.y, b1.z,
            b0.x, b0.y, b0.z
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex([0, 1, 2, 2, 3, 0]);
        disposables.push(geometry);
        group.add(new THREE.Mesh(geometry, ribbonMat));
    }

    const dimColor = (c: string) => '#' + new THREE.Color(c).multiplyScalar(0.3).getHexString();
    let dimPair: THREE.Material[] | null = null;
    const setEmphasis = (moving: Set<number> | null) => {
        if (moving !== null && !dimPair) {
            dimPair = [
                makePatternMaterial(
                    style.frontPattern,
                    dimColor(style.frontColor0),
                    dimColor(style.frontColor1),
                    THREE.FrontSide
                ),
                makePatternMaterial(style.backPattern, dimColor(style.backColor0), dimColor(style.backColor1), THREE.BackSide)
            ];
            disposables.push(...dimPair);
        }
        facetMeshes.forEach((mesh, i) => {
            mesh.material = moving === null || moving.has(i) ? [frontMat, backMat] : dimPair!;
        });
    };

    return {
        group,
        facetMeshes,
        matrices,
        layerDirs,
        setEmphasis,
        dispose: () => disposables.forEach((d) => d.dispose())
    };
};

export { DEFAULT_THICKNESS };

/** Approximate silhouette extent, used for camera framing. */
export const stateRadius = (state: FoldedState): number => {
    let r = 1;
    for (const f of state.facets) {
        for (const p of foldedPoly(f)) {
            r = Math.max(r, dist([0, 0], p));
        }
    }
    return r;
};
