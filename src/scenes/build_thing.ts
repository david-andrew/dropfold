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
    prism: THREE.Mesh;
    edges: THREE.LineSegments;

    constructor({vertices, z_offset=0.0, color, edge_color}: FacetProps) {
        // make the mesh
        const shape = new THREE.Shape(vertices.map(([x, y]) => new THREE.Vector2(x, y)));
        const geometry = new THREE.ExtrudeGeometry(shape, { steps: 1, depth: LAYER_THICKNESS, bevelEnabled: false });
        const material = new THREE.MeshBasicMaterial({ color });
        this.prism = new THREE.Mesh(geometry, material);
        this.prism.position.z = z_offset
        
        // make the edges
        const edges = new THREE.EdgesGeometry(geometry);
        const edgesMaterial = new THREE.LineBasicMaterial({ color: edge_color });
        this.edges = new THREE.LineSegments(edges, edgesMaterial);
        this.edges.position.z = z_offset
    }

    add_to_scene(scene: THREE.Scene) {
        scene.add(this.prism);
        scene.add(this.edges);
    }
}

export const build_thing_scene = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // example of a plane layer
    const state = paper_plane_states[3]

    
    // quick and dirty debug
    const group = new THREE.Group();
    const facets: Facet[] = [];
    state.forEach((layer, i) => layer.forEach(template => {
        const f = new Facet({vertices: template.vertices, z_offset: i*LAYER_THICKNESS, color: 0x000000, edge_color: 0xffffff});
        facets.push(f);
        group.add(f.prism);
        group.add(f.edges);
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