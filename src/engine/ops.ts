/**
 * Fold operations as serializable data, plus history replay.
 * The engine is deterministic, so a paper polygon + op list fully determines
 * the folded object; save files and samples are just op lists.
 */
import { Vec2, Polygon } from './geometry';
import { FoldedState, makeInitialState, getCreases, pointOnSegment } from './model';
import { simpleFold } from './simple_fold';
import { reverseFold, squashFold, petalFold } from './compound_folds';

export type SimpleFoldOp = { type: 'simple'; from: Vec2; to: Vec2; sign: 1 | -1; fromPaper?: Vec2 };
export type ReverseFoldOp = { type: 'reverse'; grab: Vec2; to: Vec2; sign: 1 | -1 };
export type SquashFoldOp = { type: 'squash'; grab: Vec2; to: Vec2; sign: 1 | -1; flip?: boolean };
export type PetalFoldOp = { type: 'petal'; grab: Vec2; to: Vec2; sign: 1 | -1 };
export type SetAngleOp = { type: 'angle'; point: Vec2; angle: number }; // point in paper space, on the crease

export type FoldOp = SimpleFoldOp | ReverseFoldOp | SquashFoldOp | PetalFoldOp | SetAngleOp;

export const applyOp = (state: FoldedState, op: FoldOp): FoldedState | null => {
    switch (op.type) {
        case 'simple': {
            const r = simpleFold(state, { from: op.from, to: op.to, sign: op.sign, fromPaper: op.fromPaper });
            return r ? r.state : null;
        }
        case 'reverse': {
            const r = reverseFold(state, { grab: op.grab, to: op.to, sign: op.sign });
            return r ? r.state : null;
        }
        case 'squash': {
            const r = squashFold(state, { grab: op.grab, to: op.to, sign: op.sign, flip: op.flip });
            return r ? r.state : null;
        }
        case 'petal': {
            const r = petalFold(state, { grab: op.grab, to: op.to, sign: op.sign });
            return r ? r.state : null;
        }
        case 'angle':
            return setCreaseAngle(state, op.point, op.angle);
    }
};

export const setCreaseAngle = (state: FoldedState, point: Vec2, angle: number): FoldedState | null => {
    // the point must lie on some crease
    const crease = getCreases(state).find((c) => pointOnSegment(point, c.seg));
    if (!crease) return null;
    // drop any existing override on this crease, then add the new one
    // (angles are clamped to [-180, 180]; +180 = original flat fold, -180 =
    // flat on the opposite side, so only +180 clears the override)
    angle = Math.max(-180, Math.min(180, angle));
    const overrides = state.overrides.filter((o) => !pointOnSegment(o.point, crease.seg));
    if (angle < 180) {
        overrides.push({ point, angle });
    }
    return { facets: state.facets, overrides };
};

export const replay = (paperPoly: Polygon, ops: FoldOp[]): FoldedState | null => {
    let state = makeInitialState(paperPoly);
    for (const op of ops) {
        const next = applyOp(state, op);
        if (next === null) return null;
        state = next;
    }
    return state;
};
