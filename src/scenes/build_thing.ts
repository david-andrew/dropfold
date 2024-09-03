import * as THREE from 'three';
import { SceneFunctions } from '../main';
import { states as paper_plane_states, ThingTemplate } from './test_paper_plane';
import { OrbitalPointer } from '../controls';
import { setup_debug_geometry } from '../utils';

// simple scene that takes the frames from test_paper_plane and makes the corresponding mesh out of them

type FacetProps = {
    vertices: Array<[number, number]>;
    z_offset?: number;
    color: THREE.ColorRepresentation;
    edge_color: THREE.ColorRepresentation;
};

class Facet {
    mesh: THREE.Mesh;
    lines: THREE.LineSegments;

    constructor({ vertices, z_offset = 0.0, color, edge_color }: FacetProps) {
        // make the mesh
        const shape = new THREE.Shape(vertices.map(([x, y]) => new THREE.Vector2(x, y)));
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.z = z_offset;

        // make the lines
        const lines = new THREE.EdgesGeometry(geometry);
        const linesMaterial = new THREE.LineBasicMaterial({ color: edge_color });
        this.lines = new THREE.LineSegments(lines, linesMaterial);
        this.lines.position.z = z_offset;
    }

    add_to_scene(scene: THREE.Scene) {
        scene.add(this.mesh);
        scene.add(this.lines);
    }
}

type EdgeProps = {
    p0: [number, number];
    p1: [number, number];
    thickness: number;
    z_offset: number;
    color: THREE.ColorRepresentation;
    edge_color: THREE.ColorRepresentation;
};
class Edge {
    mesh: THREE.Mesh;
    lines: THREE.LineSegments;

    constructor({ p0, p1, thickness, z_offset, color, edge_color }: EdgeProps) {
        // directly build the geometry in 3D with a BufferGeometry
        const geometry = new THREE.BufferGeometry();
        // prettier-ignore
        const vertices = new Float32Array([
            p0[0], p0[1], z_offset + thickness,
            p0[0], p0[1], z_offset,
            p1[0], p1[1], z_offset,
            p1[0], p1[1], z_offset + thickness
        ]);
        geometry.setIndex([0, 1, 2, 2, 3, 0]);
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

type BuildThingSceneProps = {
    renderer: THREE.WebGLRenderer;
    layer_thickness?: number;
    background_color?: THREE.ColorRepresentation;
    edge_color?: THREE.ColorRepresentation;
    face_color?: THREE.ColorRepresentation;
    debug_geometry?: boolean;
};
class BuildThingScene {
    // initialization
    layer_thickness: number;
    background_color: THREE.ColorRepresentation;
    edge_color: THREE.ColorRepresentation;
    face_color: THREE.ColorRepresentation;
    debug_geometry: boolean;

    // rendering/simulation
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitalPointer;

    // objects
    facets: Facet[];
    edges: Edge[];
    mesh_to_facet_idx: Map<THREE.Mesh, number>;

    // included methods
    hide_debug_geometry: () => void;
    show_debug_geometry: (
        from_point: THREE.Vector3,
        mid_point: THREE.Vector3,
        to_point: THREE.Vector3,
        p0: THREE.Vector3,
        p1: THREE.Vector3
    ) => void;

    constructor({
        renderer,
        layer_thickness = 0.01,
        background_color = 0x222222,
        edge_color = 0x000000,
        face_color = 0xffffff,
        debug_geometry = true
    }: BuildThingSceneProps) {
        // set initialization parameters
        this.layer_thickness = layer_thickness;
        this.background_color = background_color;
        this.edge_color = edge_color;
        this.face_color = face_color;
        this.debug_geometry = debug_geometry;

        // setup the scene
        this.renderer = renderer;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.background_color);
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 10;

        // setup debug geometry
        const { hide_debug_geometry, show_debug_geometry } = setup_debug_geometry(this.scene, this.debug_geometry);
        this.hide_debug_geometry = hide_debug_geometry;
        this.show_debug_geometry = show_debug_geometry;
        // debug test
        this.show_debug_geometry(
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(1, 1, 0),
            new THREE.Vector3(2, 2, 0),
            new THREE.Vector3(2, 0, 0),
            new THREE.Vector3(0, 2, 0)
        );

        // DEBUG set up meshes based on paper_plane_states (todo move this process into a method)
        // example of a plane layer
        this.rebuild_thing(paper_plane_states[3]);

        this.controls = new OrbitalPointer({
            camera: this.camera,
            scene: this.scene,
            domElement: this.renderer.domElement,
            getInteractables: () => this.facets.map((f) => f.mesh),
            // onPress: update_closest_edge,
            meshHopping: true
        });
    }

    rebuild_thing = (thing_t: ThingTemplate) => {
        // quick and dirty debug
        const group = new THREE.Group();
        this.facets = [];
        this.edges = [];
        thing_t.forEach((layer, i) =>
            layer.forEach((facet_t) => {
                const f = new Facet({
                    vertices: facet_t.vertices,
                    z_offset: i * this.layer_thickness,
                    color: this.face_color,
                    edge_color: this.edge_color
                });
                this.facets.push(f);
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
                        thickness: layer_offset * this.layer_thickness,
                        z_offset: i * this.layer_thickness,
                        color: this.face_color,
                        edge_color: this.edge_color
                    });
                    this.edges.push(edge);
                    group.add(edge.mesh);
                    group.add(edge.lines);
                });
            })
        );
        this.scene.add(group);
    };

    update_scene = () => {
        // Render the scene from the perspective of the camera
        this.renderer.render(this.scene, this.camera);
    };

    resetter = () => {
        // todo
    };
}

export const build_thing_scene = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    const scene = new BuildThingScene({ renderer });
    return {
        update_scene: scene.update_scene,
        camera: scene.camera,
        resetter: scene.resetter
    };
};
