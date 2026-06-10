import { describe, it, expect } from 'vitest';
import {
    perpBisector,
    signedDist,
    reflectionAcross,
    applyIso,
    composeIso,
    invertIso,
    transformLine,
    clipPolygon,
    splitPolygon,
    polygonArea,
    polygonsOverlap,
    convexOverlapArea,
    pointInPolygon,
    collinearOverlap,
    sharedBoundarySegments,
    isMirrored,
    Vec2,
    lineFromPoints
} from '../geometry';

const square: Vec2[] = [
    [0, 0],
    [2, 0],
    [2, 2],
    [0, 2]
];

describe('perpBisector', () => {
    it('puts the first point on the positive side', () => {
        const l = perpBisector([0, 0], [2, 0]);
        expect(signedDist(l, [0, 0])).toBeGreaterThan(0);
        expect(signedDist(l, [2, 0])).toBeLessThan(0);
        expect(Math.abs(signedDist(l, [1, 5]))).toBeLessThan(1e-9);
    });
});

describe('reflectionAcross', () => {
    it('reflects points across the line', () => {
        const l = perpBisector([0, 0], [2, 0]); // vertical line x=1
        const r = reflectionAcross(l);
        expect(isMirrored(r)).toBe(true);
        const p = applyIso(r, [0, 0.5]);
        expect(p[0]).toBeCloseTo(2);
        expect(p[1]).toBeCloseTo(0.5);
        // points on the line are fixed
        const q = applyIso(r, [1, 7]);
        expect(q[0]).toBeCloseTo(1);
        expect(q[1]).toBeCloseTo(7);
    });

    it('is its own inverse', () => {
        const l = lineFromPoints([0.3, -1], [2, 1.7]);
        const r = reflectionAcross(l);
        const rr = composeIso(r, r);
        const p = applyIso(rr, [3, 4]);
        expect(p[0]).toBeCloseTo(3);
        expect(p[1]).toBeCloseTo(4);
    });
});

describe('invertIso', () => {
    it('inverts mirrored isometries', () => {
        const r = reflectionAcross(lineFromPoints([1, 0], [2, 3]));
        const inv = invertIso(r);
        const p = applyIso(inv, applyIso(r, [5, -2]));
        expect(p[0]).toBeCloseTo(5);
        expect(p[1]).toBeCloseTo(-2);
    });
});

describe('transformLine', () => {
    it('maps lines consistently with points', () => {
        const r = reflectionAcross(lineFromPoints([0, 0], [1, 1]));
        const l = lineFromPoints([1, 0], [2, 0]);
        const tl = transformLine(r, l);
        // a point on l maps onto tl
        const p = applyIso(r, [1.5, 0]);
        expect(Math.abs(signedDist(tl, p))).toBeLessThan(1e-9);
    });
});

describe('clip/split', () => {
    it('splits a square in half', () => {
        const l = perpBisector([0, 1], [2, 1]); // x = 1
        const { pos, neg } = splitPolygon(square, l);
        expect(pos).not.toBeNull();
        expect(neg).not.toBeNull();
        expect(Math.abs(polygonArea(pos!))).toBeCloseTo(2);
        expect(Math.abs(polygonArea(neg!))).toBeCloseTo(2);
    });

    it('returns whole polygon when line misses', () => {
        const l = perpBisector([10, 0], [12, 0]);
        const { pos, neg } = splitPolygon(square, l);
        // square entirely on positive side of x=11... positive side contains [10,0]
        expect(pos).toEqual(square);
        expect(neg).toBeNull();
    });

    it('clips against half plane', () => {
        const l = perpBisector([0, 1], [2, 1]);
        const left = clipPolygon(square, l, 1);
        expect(Math.abs(polygonArea(left))).toBeCloseTo(2);
        expect(left.every((p) => p[0] <= 1 + 1e-9)).toBe(true);
    });
});

describe('overlap', () => {
    it('detects overlapping polygons', () => {
        const other: Vec2[] = [
            [1, 1],
            [3, 1],
            [3, 3],
            [1, 3]
        ];
        expect(polygonsOverlap(square, other)).toBe(true);
        expect(convexOverlapArea(square, other)).toBeCloseTo(1);
    });

    it('rejects edge-touching polygons', () => {
        const other: Vec2[] = [
            [2, 0],
            [4, 0],
            [4, 2],
            [2, 2]
        ];
        expect(polygonsOverlap(square, other)).toBe(false);
    });

    it('handles mirrored (CW) polygons', () => {
        const cw = [...square].reverse();
        expect(polygonsOverlap(cw, square)).toBe(true);
    });
});

describe('pointInPolygon', () => {
    it('works inclusive of boundary', () => {
        expect(pointInPolygon(square, [1, 1])).toBe(true);
        expect(pointInPolygon(square, [0, 1])).toBe(true);
        expect(pointInPolygon(square, [-0.1, 1])).toBe(false);
    });
});

describe('collinearOverlap', () => {
    it('finds shared sub-segment', () => {
        const r = collinearOverlap([0, 0], [2, 0], [1, 0], [3, 0]);
        expect(r).not.toBeNull();
        const [a, b] = r!;
        expect(Math.min(a[0], b[0])).toBeCloseTo(1);
        expect(Math.max(a[0], b[0])).toBeCloseTo(2);
    });

    it('rejects non-collinear segments', () => {
        expect(collinearOverlap([0, 0], [2, 0], [1, 0.5], [3, 0.5])).toBeNull();
    });

    it('rejects point-touching segments', () => {
        expect(collinearOverlap([0, 0], [2, 0], [2, 0], [4, 0])).toBeNull();
    });
});

describe('sharedBoundarySegments', () => {
    it('finds the crease between adjacent rectangles', () => {
        const left: Vec2[] = [
            [0, 0],
            [1, 0],
            [1, 2],
            [0, 2]
        ];
        const right: Vec2[] = [
            [1, 0],
            [2, 0],
            [2, 2],
            [1, 2]
        ];
        const segs = sharedBoundarySegments(left, right);
        expect(segs.length).toBe(1);
        const [a, b] = segs[0];
        expect(a[0]).toBeCloseTo(1);
        expect(b[0]).toBeCloseTo(1);
        expect(Math.abs(a[1] - b[1])).toBeCloseTo(2);
    });
});
