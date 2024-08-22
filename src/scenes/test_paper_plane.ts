// Just testing making the structs and what the paper plane would look like at each step
import * as THREE from 'three';
// import { Vector2 as vec2 } from 'three';

const vec2 = (a:number, b:number) => new THREE.Vector2(a, b);

type Facet = {
    vertices: THREE.Vector2[],
    links: ([number, number] | null)[]
}

type Layer = Facet[];
type Thing = Layer[];

const states: Thing[] = [
    // state 0
    [
        [
            {
                vertices: [vec2(-4.25, 5.5), vec2(4.25, 5.5), vec2(4.25, -5.5), vec2(-4.25, -5.5)],
                links: [null, null, null, null]
            }
        ]
    ],

    // state 1
    [
        [
            {
                vertices: [vec2(-4.25, 1.25), vec2(0, 5.5), vec2(4.25, 5.5), vec2(4.25, -5.5), vec2(-4.25, -5.5)],
                links: [[1, 0], null, null, null, null]
            }
        ],
        [
            {
                // TODO: specify tf, 180 degrees over edge 0
                vertices: [vec2(-4.25, 1.25), vec2(0, 5.5), vec2(-4.25, 5.5)],
                links: [[-1, 0], null, null]
            }
        ]
    ],
    
    // state 3
    [
        [
            {
                vertices: [vec2(-4.25, 1.25), vec2(0, 5.5), vec2(4.25, 1.25), vec2(4.25, -5.5), vec2(-4.25, -5.5)],
                links: [[1, 0], [1, 1], null, null, null]
            }
        ],
        [
            {
                // TODO: specify tf, 180 degrees over edge 0
                vertices: [vec2(-4.25, 1.25), vec2(0, 5.5), vec2(-4.25, 5.5)],
                links: [[-1, 0], null, null]
            },
            {
                // TODO: specify tf, 180 degrees over edge 2
                vertices: [vec2(0, 5.5), vec2(4.25, 5.5), vec2(4.25, 1.25)],
                links: [null, null, [-1, 0]]
            }
        ]

    ]
]