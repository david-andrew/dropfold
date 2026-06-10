import { SaveFile } from '../app';

/**
 * Classic dart paper airplane on letter paper (8.5 x 11, size=11 -> centered,
 * x in [-4.25, 4.25], y in [-5.5, 5.5]).
 *
 * 1-2: fold top corners to the centerline
 * 3-4: fold the slanted edges to the centerline again (dart)
 * 5:   fold in half (left over right)
 * 6-7: wing folds front and back
 * angle ops: open the fuselage and level the wings
 */
export const airplane: SaveFile = {
    version: 1,
    name: 'paper-airplane',
    paper: {
        shape: 'letter',
        size: 11,
        style: {
            frontPattern: 'plain',
            frontColor0: '#e8e4d8',
            frontColor1: '#ffffff',
            backPattern: 'plain',
            backColor0: '#cfd6e4',
            backColor1: '#ffffff',
            edgeColor: '#3a3f4a'
        },
        background: '#22324a'
    },
    ops: [
        // top-left corner to centerline
        { type: 'simple', from: [-4.25, 5.5], to: [0, 1.25], sign: 1 },
        // top-right corner to centerline
        { type: 'simple', from: [4.25, 5.5], to: [0, 1.25], sign: 1 },
        // dart: slanted left edge to centerline (4.25*sqrt(2) below the nose)
        { type: 'simple', from: [-4.25, 1.25], to: [0, -0.5104], sign: 1 },
        // dart: slanted right edge to centerline
        { type: 'simple', from: [4.25, 1.25], to: [0, -0.5104], sign: 1 },
        // fold in half, left over right
        { type: 'simple', from: [-4.25, -5], to: [4.25, -5], sign: 1 },
        // top wing down
        { type: 'simple', from: [4.25, -5], to: [-2.45, -5], sign: 1 },
        // bottom wing down (underneath)
        { type: 'simple', from: [4.25, -5], to: [-2.45, -5], sign: -1 },
        // open the fuselage and level the wings
        { type: 'angle', point: [0, -3], angle: 150 },
        { type: 'angle', point: [-0.9, -3], angle: 90 },
        { type: 'angle', point: [0.9, -3], angle: 90 }
    ]
};
