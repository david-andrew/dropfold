import * as THREE from 'three';
import { SceneFunctions } from '../main';
import { states as paper_plane_states } from './test_paper_plane';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

// simple scene that takes the frames from test_paper_plane and makes the corresponding mesh out of them

type FacetProps = {
    vertices: Array<[number, number]>;
    z_offset?: number;
    color: number;
    edge_color: number;
}

const LAYER_THICKNESS = 0.01;

class Facet {
    mesh: THREE.Mesh;
    lines: THREE.LineSegments;

    constructor({vertices, z_offset=0.0, color, edge_color}: FacetProps) {
        // make the mesh
        const shape = new THREE.Shape(vertices.map(([x, y]) => new THREE.Vector2(x, y)));
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.z = z_offset
        
        // make the lines
        const lines = new THREE.EdgesGeometry(geometry);
        const linesMaterial = new THREE.LineBasicMaterial({ color: edge_color });
        this.lines = new THREE.LineSegments(lines, linesMaterial);
        this.lines.position.z = z_offset
    }

    add_to_scene(scene: THREE.Scene) {
        scene.add(this.mesh);
        scene.add(this.lines);
    }
}

type EdgeProps = {
    p0: [number, number],
    p1: [number, number],
    thickness: number,
    z_offset: number,
    color: number
    edge_color: number
}
class Edge {
    mesh: THREE.Mesh;
    lines: THREE.LineSegments;

    constructor({ p0, p1, thickness, z_offset, color, edge_color }: EdgeProps) {
        // directly build the geometry in 3D with a BufferGeometry
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            p0[0], p0[1], z_offset + thickness,
            p0[0], p0[1], z_offset,
            p1[0], p1[1], z_offset,
            p1[0], p1[1], z_offset + thickness,
        ]);
        geometry.setIndex([ 0, 1, 2, 2, 3, 0 ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
        this.mesh = new THREE.Mesh(geometry, material);

        // make the lines
        const lines = new THREE.EdgesGeometry(geometry);
        const linesMaterial = new THREE.LineBasicMaterial({ color: edge_color });
        this.lines = new THREE.LineSegments(lines, linesMaterial);
    }

    add_to_scene(scene: THREE.Scene) {
        scene.add(this.mesh);
        scene.add(this.lines);
    }
}

export const build_thing_scene = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // example of a plane layer
    const thing_t = paper_plane_states[3]

    
    // quick and dirty debug
    const group = new THREE.Group();
    const facets: Facet[] = [];
    thing_t.forEach((layer, i) => layer.forEach(facet_t => {
        const f = new Facet({vertices: facet_t.vertices, z_offset: i*LAYER_THICKNESS, color: 0x000000, edge_color: 0xffffff});
        facets.push(f);
        group.add(f.mesh);
        group.add(f.lines);

        // handle any edge links
        facet_t.links.forEach((link, j) => {
            if (link === null) return; 
            const [layer_offset, facet_index] = link;
            if (layer_offset < 0) return; // only handle positive direction links since there are 2 copies (one for positive, and one for negative)

            const edge = new Edge({
                p0: facet_t.vertices[j],
                p1: facet_t.vertices[(j + 1) % facet_t.vertices.length],
                thickness: layer_offset*LAYER_THICKNESS,
                z_offset: i*LAYER_THICKNESS,
                color: 0x000000,
                edge_color: 0xffffff
            });
            group.add(edge.mesh);
            group.add(edge.lines);
            console.log("added edge", edge)
        })
    }));
    scene.add(group);
    
    
    // controls
    const controls = new OrbitControls(camera, renderer.domElement) 
    
    const update_scene = () => {
        // controls.update();

        // Render the scene from the perspective of the camera
        renderer.render(scene, camera);
    }

    return { update_scene, camera, resetter: () => {} };
}