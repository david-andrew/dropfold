import { describe, expect, it } from 'vitest';

import { makeInitialState, creaseKeyPoint } from '../model';
import { setCreaseAngle } from '../ops';
import * as THREE from 'three';

import { computePose, poseConsistent } from '../pose';
import { simpleFold } from '../simple_fold';

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
