// Just testing making the structs and what the paper plane would look like at each step
import * as THREE from 'three';
// import { Vector2 as vec2 } from 'three';


type FacetTemplate = {
    vertices: [number, number][],//THREE.Vector2[],
    links: ([number, number, number] | null)[]  // [layer-offset, linked-facet-index, linked-edge-index]
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
                links: [null, null, null, null]
            }
        ]
    ],

    // state 1
    [
        [
            {
                vertices: [[-4.25, 1.25], [0, 5.5], [4.25, 5.5], [4.25, -5.5], [-4.25, -5.5]],
                links: [[1, 0, 0], null, null, null, null]
            }
        ],
        [
            {
                vertices: [[-4.25, 1.25], [0, 5.5], [0, 1.25]],
                links: [[-1, 0, 0], null, null]
            }
        ]
    ],
    
    // state 3
    [
        [
            {
                vertices: [[-4.25, 1.25], [0, 5.5], [4.25, 1.25], [4.25, -5.5], [-4.25, -5.5]],
                links: [[1, 0, 0], [1, 1, 2], null, null, null]
            }
        ],
        [
            {
                vertices: [[-4.25, 1.25], [0, 5.5], [0, 1.25]],
                links: [[-1, 0, 0], null, null]
            },
            {
                vertices: [[0, 5.5], [0, 1.25], [4.25, 1.25]],
                links: [null, null, [-1, 0, 1]]
            }
        ]

    ],

    // state 4
    [
        [
            {
                vertices: [[-4.25, 1.25], [4.25, 1.25], [4.25, -5.5], [-4.25, -5.5]],
                links: [[2, 0, 0], null, null, null]
            }
        ],
        [
            {
                vertices: [[-4.25, 1.25], [0, 1.25], [0, -3]],
                links: [null, null, [1, 0, 2]]
            },
            {
                vertices: [[0, -3], [0, 1.25], [4.25, 1.25]],
                links: [null, null, [1, 0, 1]]
            }
        ],
        [
            {
                vertices: [[-4.25, 1.25], [4.25, 1.25], [0, -3]],
                links: [[-2, 0, 0], [-1, 1, 2], [-1, 0, 2]]
            }
        ]
    ]
]