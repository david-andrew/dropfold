import { SaveFile } from '../app';

/**
 * Origami crane on a 10x10 square (x, y in [-5, 5]).
 *
 * Route (verified by replay in src/samples/__tests__):
 * 1-2:   diagonal fold twice -> 4-layer triangle {O, (5,5), (5,-5)},
 *        paper center O=(0,0) closed
 * 3-4:   squash front (pages flip left) and back (pages settle in place)
 *        -> preliminary base: diamond {O, (5,0), B=(5,-5), (0,-5)} with
 *        axis O-B, all raw corners gathered at B
 * 5-8:   kite folds front and back (raw edges onto the axis)
 * 9-10:  petal folds front and back -> bird base
 * then:  reverse folds for neck/tail/head, simple folds for wings,
 *        angle ops to open the body
 */
export const crane: SaveFile = {
    version: 1,
    name: 'origami-crane',
    paper: {
        shape: 'square',
        size: 10,
        style: {
            frontPattern: 'plain',
            frontColor0: '#d8453e',
            frontColor1: '#ffffff',
            backPattern: 'plain',
            backColor0: '#f3ece1',
            backColor1: '#ffffff',
            edgeColor: '#42210b'
        },
        background: '#1f2430'
    },
    ops: [
        // diagonal fold: upper-left corner onto lower-right
        { type: 'simple', from: [-5, 5], to: [5, -5], sign: 1 },
        // fold the triangle in half across the other diagonal
        { type: 'simple', from: [-2, -3], to: [3, 2], sign: 1 },
        // squash front flap -> left half of the preliminary base
        { type: 'squash', grab: [3, 2.9], to: [4.9, -4.9], sign: 1, flip: true },
        // squash back flap in place -> preliminary base
        { type: 'squash', grab: [3, 2.9], to: [4.9, -4.9], sign: -1 },
        // kite folds, front (raw edges onto the axis O-B)
        { type: 'simple', from: [5, -2.5], to: [3.232, -3.232], sign: 1 },
        { type: 'simple', from: [2.5, -5], to: [3.232, -3.232], sign: 1 },
        // kite folds, back
        { type: 'simple', from: [5, -2.5], to: [3.232, -3.232], sign: -1 },
        { type: 'simple', from: [2.5, -5], to: [3.232, -3.232], sign: -1 },
        // petal folds, front and back -> bird base (petal crease through the
        // kite crease endpoints, the line x - y = 2.929)
        { type: 'petal', grab: [4.9, -4.9], to: [-1.971, 1.971], sign: 1 },
        { type: 'petal', grab: [4.9, -4.9], to: [-1.971, 1.971], sign: -1 },
        // reverse-fold the front spike sideways -> neck
        { type: 'reverse', grab: [-1.9, 2.0], to: [-0.1, 2.0], sign: 1 },
        // reverse-fold the back spike the other way -> tail
        { type: 'reverse', grab: [-2.0, 1.9], to: [-2.0, 0.1], sign: -1 },
        // reverse-fold the neck tip -> head
        { type: 'reverse', grab: [-0.1, 1.95], to: [-0.1, 1.45], sign: 1 },
        // fold the wings down, front and back
        { type: 'simple', from: [4.9, -4.9], to: [-0.5, 0.5], sign: 1 },
        { type: 'simple', from: [4.9, -4.9], to: [-0.5, 0.5], sign: -1 },
        // raise the wings (paper-space points on the wing hinge creases)
        { type: 'angle', point: [2.78, 1.62], angle: 110 },
        { type: 'angle', point: [-1.62, -2.78], angle: 110 }
    ]
};
