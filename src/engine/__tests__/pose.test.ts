import { describe, expect, it } from 'vitest';

import { makeInitialState, creaseKeyPoint, effectiveAngles } from '../model';
import { setCreaseAngle } from '../ops';
import * as THREE from 'three';

import { computePose, poseConsistent } from '../pose';
import { simpleFold } from '../simple_fold';
import { polygonCentroid } from '../geometry';

describe('pose angles', () => {
    it('supports negative 3D fold angles', () => {
        const square = [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1]
        ] as const;
        const folded = simpleFold(makeInitialState([...square]), { from: [1, 0], to: [-1, 0], sign: 1 })!.state;
        const crease = computePose(folded, 0).creases[0];
        const point = creaseKeyPoint(crease);

        const posed = setCreaseAngle(folded, point, -45);
        expect(posed).not.toBeNull();
        expect(posed!.overrides[0].angle).toBe(-45);
        expect(poseConsistent(posed!)).toBe(true);
        expect(computePose(posed!, 0).matrices).toHaveLength(2);
    });

    it('keeps -180 as a distinct opposite-side fold', () => {
        const square = [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1]
        ] as const;
        const folded = simpleFold(makeInitialState([...square]), { from: [1, 0], to: [-1, 0], sign: 1 })!.state;
        const crease = computePose(folded, 0).creases[0];
        const point = creaseKeyPoint(crease);

        const opposite = setCreaseAngle(folded, point, -180);
        expect(opposite).not.toBeNull();
        expect(opposite!.overrides).toHaveLength(1);
        expect(opposite!.overrides[0].angle).toBe(-180);
    });

    it('flips thickness to the opposite side at -180', () => {
        const square = [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1]
        ] as const;
        const folded = simpleFold(makeInitialState([...square]), { from: [1, 0], to: [-1, 0], sign: 1 })!.state;
        const crease = computePose(folded, 0).creases[0];
        const point = creaseKeyPoint(crease);

        const pos = setCreaseAngle(folded, point, 180)!;
        const neg = setCreaseAngle(folded, point, -180)!;
        const posMatrices = computePose(pos, 0.01).matrices;
        const negMatrices = computePose(neg, 0.01).matrices;
        const p = new THREE.Vector3(0, 0, 0).applyMatrix4(posMatrices[1]);
        const n = new THREE.Vector3(0, 0, 0).applyMatrix4(negMatrices[1]);

        expect(p.z).toBeGreaterThan(0);
        expect(n.z).toBeLessThan(0);
    });

    it('pins folds landing on an open hinge line flat instead of inheriting its angle', () => {
        const square: [number, number][] = [
            [-2, -2],
            [2, -2],
            [2, 2],
            [-2, 2]
        ];
        // half fold: sheets A (L0) and B (L1) coincide on the left half
        const s1 = simpleFold(makeInitialState(square), { from: [2, 0], to: [-2, 0], sign: 1 })!.state;
        // fold the top sheet's corner across the diagonal (-2,0.8)-(-0.8,2)
        const s2 = simpleFold(s1, { from: [-1.8, 1.8], to: [-1.0, 1.0], sign: 1, fromPaper: [1.8, 1.8] })!.state;
        // open that corner crease to 90 degrees
        const hinge = computePose(s2, 0).creases.find((c) => Math.max(s2.facets[c.a].layer, s2.facets[c.b].layer) === 2)!;
        const s3 = setCreaseAngle(s2, creaseKeyPoint(hinge), 90)!;

        // fold the bottom sheet's corner under, across the same line: the new
        // crease coincides with the open hinge line but isn't wrapped into its
        // packet (different component pair), so it must stay flat
        const r4 = simpleFold(s3, { from: [-1.8, 1.8], to: [-1.0, 1.0], sign: -1, fromPaper: [-1.9, 1.9] });
        expect(r4).not.toBeNull();
        const s4 = r4!.state;

        const { matrices } = computePose(s4, 0);
        const v = new THREE.Vector3();
        for (const i of r4!.movedFacets) {
            const c = polygonCentroid(s4.facets[i].poly);
            v.set(c[0], c[1], 0).applyMatrix4(matrices[i]);
            expect(Math.abs(v.z)).toBeLessThan(1e-6);
        }
        // the real hinge keeps its angle
        const creases4 = computePose(s4, 0).creases;
        const angles4 = effectiveAngles(s4, creases4);
        expect(angles4.some((a) => a === 90)).toBe(true);
    });

    it('reports a flipped layer direction on negative-angle components', () => {
        const square = [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1]
        ] as const;
        const folded = simpleFold(makeInitialState([...square]), { from: [1, 0], to: [-1, 0], sign: 1 })!.state;
        const crease = computePose(folded, 0).creases[0];
        const point = creaseKeyPoint(crease);

        // flap is facet 1; flat-folded its layers stack upward
        const pos = setCreaseAngle(folded, point, 180)!;
        expect(computePose(pos, 0.01).layerDirs[1].z).toBeCloseTo(1);

        // at -180 the surface frame is back to identity (mid-surfaces coincide)
        // but the material stacks on the other side: layer direction points down
        const neg = setCreaseAngle(folded, point, -180)!;
        const negPose = computePose(neg, 0.01);
        expect(negPose.layerDirs[1].z).toBeCloseTo(-1);
        // the base facet's layer direction is unaffected
        expect(negPose.layerDirs[0].z).toBeCloseTo(1);
    });
});
