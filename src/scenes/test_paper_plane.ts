// Just testing making the structs and what the paper plane would look like at each step
import * as THREE from 'three';
// import { Vector2 as vec2 } from 'three';

const PI = Math.PI;

type FacetTemplate = {
    vertices: [number, number][],//THREE.Vector2[],
    links: ([number, number, number] | null)[]  // [layer-offset, linked-facet-index, linked-edge-index]
    transform: [number, number, number] // [dx, dy, angle/mirror]. negative angle means mirror across x-axis. angle is always according to right-hand rule
}

type LayerTemplate = FacetTemplate[];
export type ThingTemplate = LayerTemplate[];


type Fold = {
    layer: number,
    facet: number,
    from: THREE.Vector2,
    to: THREE.Vector2
}

type Replay = {
    folds: Fold[],
    states: ThingTemplate[]
}

export const states: ThingTemplate[] = [
    // state 0
    [
        [
            {
                vertices: [[-4.25, 5.5], [4.25, 5.5], [4.25, -5.5], [-4.25, -5.5]],
                links: [null, null, null, null],
                transform: [0, 0, 0]
            }
        ]
    ],

    // state 1
    [
        [
            {
                vertices: [[-4.25, 1.25], [0, 5.5], [4.25, 5.5], [4.25, -5.5], [-4.25, -5.5]],
                links: [[1, 0, 0], null, null, null, null],
                transform: [0, 0, 0]
            }
        ],
        [
            {
                vertices: [[-4.25, 1.25], [0, 5.5], [-4.25, 5.5]],
                links: [[-1, 0, 0], null, null],
                transform: [-5.5, 5.5, -PI/2]
            }
        ]
    ],
    
    // state 3
    [
        [
            {
                vertices: [[-4.25, 1.25], [0, 5.5], [4.25, 1.25], [4.25, -5.5], [-4.25, -5.5]],
                links: [[1, 0, 0], [1, 1, 2], null, null, null],
                transform: [0, 0, 0]
            }
        ],
        [
            {
                vertices: [[-4.25, 1.25], [0, 5.5], [-4.25, 5.5]],
                links: [[-1, 0, 0], null, null],
                transform: [-5.5, 5.5, -PI/2]
            },
            {
                vertices: [[0, 5.5], [4.25, 5.5], [4.25, 1.25]],
                links: [null, null, [-1, 0, 1]],
                transform: [5.5, 5.5, -3*PI/2]
            }
        ]

    ],

    // state 4
    [
        [
            {
                vertices: [[-4.25, 1.25], [4.25, 1.25], [4.25, -5.5], [-4.25, -5.5]],
                links: [[2, 0, 0], null, null, null],
                transform: [0, 0, 0]
            }
        ],
        [
            {
                vertices: [[-4.25, 1.25], [0, 5.5], [-4.25, 5.5]],
                links: [[-1, 0, 0], null, null],
                transform: [-5.5, -3, 3*PI/2]
            },
            {
                vertices: [[0, 5.5], [4.25, 5.5], [4.25, 1.25]],
                links: [null, null, [-1, 0, 1]],
                transform: [5.5,-3,PI/2]
            }
        ],
        [
            {
                vertices: [[-4.25, 1.25], [4.25, 1.25], [0, 5.5]],
                links: [[-2, 0, 0], [-1, 1, 2], [-1, 0, 2]],
                transform: [0, 2.5, -2*PI]
            }
        ]
    ]
]


/**
 * Convert the compact transformation representation [dx, dy, angle/mirror] to a 4x4 transformation matrix.
 * @param vec - The transformation vector [dx, dy, angle/mirror].
 * @returns A THREE.Matrix4 representing the transformation matrix.
 */
export const tf_vec_to_mat = (vec: [number, number, number]): THREE.Matrix4 => {
    const [dx, dy, angle_mirror] = vec;
    const angle = Math.abs(angle_mirror); // angle is always positive
    const m = angle_mirror < 0 ? -1 : 1; // mirror matrix (across y-axis)
    
    // (use matrix3 since threejs doesn't support 2x2 multiplication)
    // mirror matrix (across x-axis)
    // prettier-ignore
    const M = new THREE.Matrix4(
        1, 0, 0, 0,
        0, m, 0, 0,
        0, 0, m, 0,
        0, 0, 0, 1
    );

    // rotation matrix
    // prettier-ignore
    const R = new THREE.Matrix4(
        Math.cos(angle), -Math.sin(angle),  0, dx,
        Math.sin(angle),  Math.cos(angle),  0, dy,
        0,                0,                1, 0,
        0,                0,                0, 1
    );


    // combine rotation and mirror
    const tf = R.multiply(M);

    return tf;
}