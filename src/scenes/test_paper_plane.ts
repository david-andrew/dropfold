// Just testing making the structs and what the paper plane would look like at each step
import * as THREE from 'three';
// import { Vector2 as vec2 } from 'three';

const vec2 = (a:number, b:number) => new THREE.Vector2(a, b);

type Facet = {
    vertices: THREE.Vector2[],
    links: ([number, number] | null)[]  // [layer-offset, linked-facet-index]. edge index of target facet can be determined by looking at the facet's connections and finding the one that matches up to the source facet
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
                vertices: [vec2(-4.25, 1.25), vec2(0, 5.5), vec2(0, 1.25)],
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
                vertices: [vec2(-4.25, 1.25), vec2(0, 5.5), vec2(0, 1.25)],
                links: [[-1, 0], null, null]
            },
            {
                vertices: [vec2(0, 5.5), vec2(0, 1.25), vec2(4.25, 1.25)],
                links: [null, null, [-1, 0]]
            }
        ]

    ],

    // state 4
    [
        [
            {
                vertices: [vec2(-4.25, 1.25), vec2(4.25, 1.25), vec2(4.25, -5.5), vec2(-4.25, -5.5)],
                links: [[2, 0], null, null, null]
            }
        ],
        [
            {
                vertices: [vec2(-4.25, 1.25), vec2(0, 1.25), vec2(0, -4.25)],
                links: [null, null, [1, 0]]
            },
            {
                vertices: [vec2(0, -4.25), vec2(0, 1.25), vec2(4.25, 1.25)],
                links: [null, null, [1, 0]]
            }
        ],
        [
            {
                vertices: [vec2(-4.25, 1.25), vec2(4.25, 1.25), vec2(0, -4.25)],
                links: [null, null, null]
            }
        ]
    ]
]