import { describe, it, expect } from 'vitest';
import { makeInitialState, FoldedState, validateState, totalArea, foldedPoly, maxLayer } from '../model';
import { simpleFold } from '../simple_fold';
import { reverseFold, squashFold, petalFold } from '../compound_folds';
import { Vec2, pointInPolygon } from '../geometry';

const square4: Vec2[] = [
    [0, 0],
    [4, 0],
    [4, 4],
    [0, 4]
];

const check = (state: FoldedState, area: number) => {
    expect(validateState(state)).toBeNull();
    expect(totalArea(state)).toBeCloseTo(area, 3);
};

/** Fold a 4x4 square in half twice: packet occupies [2,4]x[0,2], 4 layers. */
const halfHalfPacket = (): FoldedState => {
    let s = makeInitialState(square4);
    s = simpleFold(s, { from: [2, 4], to: [2, 0], sign: 1 })!.state; // top onto bottom
    s = simpleFold(s, { from: [0, 1], to: [4, 1], sign: 1 })!.state; // left onto right
    return s;
};

describe('reverseFold', () => {
    it('inside-reverses the tip of a folded flap', () => {
        // fold square in half diagonally -> 2-layer triangle, spine along the diagonal
        let s = makeInitialState(square4);
        s = simpleFold(s, { from: [4, 4], to: [0, 0], sign: 1 })!.state;
        check(s, 16);
        expect(s.facets.length).toBe(2);
        // triangle occupies x>=y region below diagonal... after folding (4,4)->(0,0)
        // the silhouette is the lower-right triangle (0,0),(4,0),(4,4)
        // reverse-fold the right tip (4,0)... grab near the spine end and push it up-left
        const r = reverseFold(s, { grab: [3.5, 0.5], to: [2.6, 1.4], sign: 1 });
        expect(r).not.toBeNull();
        check(r!.state, 16);
        // the tip turned inside out and tucked between the stayer sheets:
        // 4 distinct layers where the tip overlaps the body
        expect(maxLayer(r!.state)).toBe(3);
        expect(r!.state.facets.length).toBe(4);
    });

    it('rejects reverse fold on a single sheet', () => {
        const s = makeInitialState(square4);
        expect(reverseFold(s, { grab: [4, 2], to: [2, 2], sign: 1 })).toBeNull();
    });
});

describe('squashFold', () => {
    it('squashes the half-half packet into the preliminary base', () => {
        let s = halfHalfPacket();
        expect(s.facets.length).toBe(4);
        // front flap: top sheet at layer 3 spans [2,4]x[0,2]; its spine (shared with
        // layer 2) is the top edge y=2 from (2,2) to (4,2), anchored at O=(2,2).
        // squash: grab near the spine's free end (4,2) and swing it down toward (2,0)... 
        // direction from P=(2,2): target direction straight down
        const r = squashFold(s, { grab: [3.8, 1.9], to: [2, 0.2], sign: 1 });
        expect(r).not.toBeNull();
        s = r!.state;
        check(s, 16);
        // both pocket sheets split: 6 facets
        expect(s.facets.length).toBe(6);
    });
});

describe('petalFold', () => {
    it('petal-folds a bird-base-like construction', () => {
        // build: half-half packet, then kite folds on the front layer toward the
        // diagonal O(2,2)-B(4,0): fold raw edges x=4 and y=0 (of the front face) in.
        let s = halfHalfPacket();
        // front face is layer 3 spanning [2,4]x[0,2]; diagonal from (2,2) to (4,0).
        // kite fold 1: grab right edge (4,1) and fold toward the diagonal
        // reflect target: the raw edge should land along the diagonal
        // fold (4, 1.17) ~ reflect across bisector... use from/to across the bisector of
        // corner B between edge x=4 and the diagonal.
        // simpler: pick from on the right edge and to as its mirror across the kite crease.
        // kite crease from B=(4,0) at 22.5 degrees above the edge direction (pointing up-left).
        // from = (4, 2-eps...) -> compute reflection of (4,2) across crease line through B
        // crease line direction: rotate edge B->(4,2) (=+y) by 22.5 deg toward diagonal:
        const deg = (d: number) => (d * Math.PI) / 180;
        // edge direction +y is 90deg; rotating toward the diagonal (135deg) by 22.5: 112.5deg
        const cd: Vec2 = [Math.cos(deg(112.5)), Math.sin(deg(112.5))];
        // reflect point p across line through B with direction cd
        const reflectAcrossCrease = (p: Vec2): Vec2 => {
            const B: Vec2 = [4, 0];
            const v: Vec2 = [p[0] - B[0], p[1] - B[1]];
            const along = v[0] * cd[0] + v[1] * cd[1];
            const proj: Vec2 = [cd[0] * along, cd[1] * along];
            return [B[0] + 2 * proj[0] - v[0], B[1] + 2 * proj[1] - v[1]];
        };
        const from1: Vec2 = [4, 1.5];
        const to1 = reflectAcrossCrease(from1);
        let r = simpleFold(s, { from: from1, to: to1, sign: 1 });
        expect(r).not.toBeNull();
        s = r!.state;
        check(s, 16);

        // kite fold 2 (mirror): fold bottom edge y=0 toward the diagonal
        const cd2: Vec2 = [Math.cos(deg(-22.5)), Math.sin(deg(-22.5))];
        const reflectAcrossCrease2 = (p: Vec2): Vec2 => {
            const B: Vec2 = [4, 0];
            const v: Vec2 = [p[0] - B[0], p[1] - B[1]];
            const along = v[0] * cd2[0] + v[1] * cd2[1];
            const proj: Vec2 = [cd2[0] * along, cd2[1] * along];
            return [B[0] + 2 * proj[0] - v[0], B[1] + 2 * proj[1] - v[1]];
        };
        const from2: Vec2 = [2.5, 0];
        const to2 = reflectAcrossCrease2(from2);
        r = simpleFold(s, { from: from2, to: to2, sign: 1 });
        expect(r).not.toBeNull();
        s = r!.state;
        check(s, 16);

        // now petal: grab the front center facet at the tip B=(4,0) and lift it
        // across the line connecting the kite crease endpoints (target ~ the
        // reflection of B across that line)
        const petal = petalFold(s, { grab: [4, 0], to: [1.172, 2.828], sign: 1 });
        expect(petal).not.toBeNull();
        check(petal!.state, 16);
        // the tip was lifted past the old silhouette and the pleats stack up
        expect(maxLayer(petal!.state)).toBeGreaterThanOrEqual(5);
        const liftedTip = petal!.state.facets.some((f) => pointInPolygon(foldedPoly(f), [1.25, 2.75], 0.1));
        expect(liftedTip).toBe(true);
    });
});
