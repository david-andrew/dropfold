import { Vec2, Polygon } from './engine/geometry';

export type ShapeId = 'square' | 'letter' | 'a4' | 'triangle' | 'pentagon' | 'hexagon';

export const SHAPES: { id: ShapeId; label: string }[] = [
    { id: 'square', label: 'Square' },
    { id: 'letter', label: 'Letter (8.5 x 11)' },
    { id: 'a4', label: 'A4' },
    { id: 'triangle', label: 'Triangle' },
    { id: 'pentagon', label: 'Pentagon' },
    { id: 'hexagon', label: 'Hexagon' }
];

/** Paper outline polygon, centered at the origin. `size` is the longest dimension. */
export const shapePolygon = (shape: ShapeId, size: number): Polygon => {
    switch (shape) {
        case 'square': {
            const h = size / 2;
            return [
                [-h, -h],
                [h, -h],
                [h, h],
                [-h, h]
            ];
        }
        case 'letter':
            return rect(size * (8.5 / 11), size);
        case 'a4':
            return rect(size * (210 / 297), size);
        case 'triangle':
            return regular(3, size / 2, Math.PI / 2);
        case 'pentagon':
            return regular(5, size / 2, Math.PI / 2);
        case 'hexagon':
            return regular(6, size / 2, 0);
    }
};

const rect = (w: number, h: number): Polygon => [
    [-w / 2, -h / 2],
    [w / 2, -h / 2],
    [w / 2, h / 2],
    [-w / 2, h / 2]
];

const regular = (n: number, radius: number, phase: number): Polygon => {
    const pts: Vec2[] = [];
    for (let i = 0; i < n; i++) {
        const a = phase + (i * 2 * Math.PI) / n;
        pts.push([radius * Math.cos(a), radius * Math.sin(a)]);
    }
    return pts;
};
