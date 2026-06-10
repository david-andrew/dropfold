import { describe, it, expect } from 'vitest';
import { makeInitialState, validateState, totalArea } from '../../engine/model';
import { applyOp } from '../../engine/ops';
import { shapePolygon } from '../../paper_shapes';
import { polygonArea } from '../../engine/geometry';
import { SAMPLES } from '../index';

describe('samples replay', () => {
    for (const sample of SAMPLES) {
        it(`replays ${sample.name} to completion`, () => {
            const poly = shapePolygon(sample.file.paper.shape, sample.file.paper.size);
            const paperArea = Math.abs(polygonArea(poly));
            let state = makeInitialState(poly);
            sample.file.ops.forEach((op, i) => {
                const next = applyOp(state, op);
                expect(next, `op ${i} (${op.type}) failed`).not.toBeNull();
                state = next!;
                expect(validateState(state), `state invalid after op ${i} (${op.type})`).toBeNull();
                // sliver filtering may shed a tiny fraction of area per op
                expect(Math.abs(totalArea(state) - paperArea) / paperArea).toBeLessThan(1e-3);
            });
        });
    }
});
