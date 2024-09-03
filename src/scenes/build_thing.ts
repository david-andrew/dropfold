import * as THREE from 'three';
import { clamp } from 'three/src/math/MathUtils.js';

import { SceneFunctions } from '../main';
import { states as paper_plane_states, ThingTemplate } from './test_paper_plane';
import { OrbitalPointer } from '../controls';
import { setup_debug_geometry } from '../utils';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

// simple scene that takes the frames from test_paper_plane and makes the corresponding mesh out of them

type FacetProps = {
    vertices: Array<[number, number]>;
    z_offset?: number;
    color: THREE.ColorRepresentation;
    edge_color: THREE.ColorRepresentation;
};

class Facet {
    vertices: THREE.Vector2[];
    mesh: THREE.Mesh;
    lines: Line2; // THREE.LineSegments;

    constructor({ vertices, z_offset = 0.0, color, edge_color }: FacetProps) {
        // make the mesh
        this.vertices = vertices.map(([x, y]) => new THREE.Vector2(x, y));
        const shape = new THREE.Shape(this.vertices);
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.z = z_offset;

        // // make the lines
        // const lines = new THREE.EdgesGeometry(geometry);
        // const linesMaterial = new THREE.LineBasicMaterial({ color: edge_color });
        // this.lines = new THREE.LineSegments(lines, linesMaterial);
        // this.lines.position.z = z_offset;

        // make the lines with Line2
        const lineGeometry = new LineGeometry();
        lineGeometry.setPositions([...this.vertices, this.vertices[0]].map((v) => [v.x, v.y, z_offset]).flat());
        const lineMaterial = new LineMaterial({ color: edge_color, linewidth: 2 });
        lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
        this.lines = new Line2(lineGeometry, lineMaterial);
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
    lines: Line2; //THREE.LineSegments;

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

        // // make the lines
        // const lines = new THREE.EdgesGeometry(geometry);
        // const linesMaterial = new THREE.LineBasicMaterial({ color: edge_color });
        // this.lines = new THREE.LineSegments(lines, linesMaterial);

        // make the lines with Line2
        const lineGeometry = new LineGeometry();
        lineGeometry.setPositions(vertices);
        const lineMaterial = new LineMaterial({ color: edge_color, linewidth: 2 });
        lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
        this.lines = new Line2(lineGeometry, lineMaterial);
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
    group: THREE.Group;
    group_copy: THREE.Group;

    // fold tracking parameters
    fold_facet_idx: number = -1; // The index of the initially touched facet at the start of a fold
    from_point = new THREE.Vector3(); // The point on the facet that the fold starts from
    mid_point = new THREE.Vector3(); // The halfway point between the fold start and current pointer location
    to_point = new THREE.Vector3(); // The current pointer location (start point should move to this point to accomplish the fold)
    p0 = new THREE.Vector3(); // The start point of the fold line
    p1 = new THREE.Vector3(); // The end point of the fold line
    // fold_normal = new THREE.Vector3(); // The normal of the fold plane

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
        // set dummy values for group and group_copy
        this.rebuild_thing(paper_plane_states[2]);

        this.controls = new OrbitalPointer({
            camera: this.camera,
            scene: this.scene,
            domElement: this.renderer.domElement,
            getInteractables: () => this.facets.map((f) => f.mesh),
            onPress: this.on_press,
            onMove: this.on_move,
            onRelease: this.on_release,
            faceBounded: false,
            showPlane: false
        });
    }

    rebuild_thing = (thing_t: ThingTemplate) => {
        // quick and dirty debug
        if (this.group && this.group_copy) {
            this.scene.remove(this.group);
            this.group = new THREE.Group();
            this.scene.remove(this.group_copy);
            this.group_copy = new THREE.Group();
        }
        this.group = new THREE.Group();
        this.facets = [];
        this.edges = [];
        this.mesh_to_facet_idx = new Map<THREE.Mesh, number>();
        thing_t.forEach((layer, i) =>
            layer.forEach((facet_t) => {
                const f = new Facet({
                    vertices: facet_t.vertices,
                    z_offset: i * this.layer_thickness,
                    color: this.face_color,
                    edge_color: this.edge_color
                });
                this.mesh_to_facet_idx.set(f.mesh, this.facets.length);
                this.facets.push(f);
                this.group.add(f.mesh);
                this.group.add(f.lines);

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
                    this.group.add(edge.mesh);
                    this.group.add(edge.lines);
                });
            })
        );
        // add the group and a copy to the scene
        this.scene.add(this.group);
        this.group_copy = this.group.clone();
        this.scene.add(this.group_copy);
        this.group_copy.visible = false;
        // this.group_copy.position.z = -5; // just for debug
    };

    // only call on initial press
    update_closest_edge = (facet_idx: number) => {
        const facet = this.facets[facet_idx];

        // Transform the 2D shape points to 3D
        const worldVertices: THREE.Vector3[] = [];
        facet.vertices.forEach((vertex) => {
            const vector3D = new THREE.Vector3(vertex.x, vertex.y, 0); // Convert 2D point to 3D by adding a z-value of 0
            vector3D.applyMatrix4(facet.mesh.matrixWorld); // Apply the mesh's world transformation matrix to get the 3D position
            worldVertices.push(vector3D);
        });

        // Find the closest point on the shape to the touch point
        let bestPoint = worldVertices[0];
        const worldIntersect = this.controls.touchPoint; //intersect_point.clone().applyMatrix4(shape.prism.matrixWorld)
        let bestDistance = bestPoint.distanceTo(worldIntersect);
        for (let i = 1; i < worldVertices.length + 1; i++) {
            const V = worldVertices[i % worldVertices.length].clone().sub(worldVertices[i - 1]);
            const W = worldIntersect.clone().sub(worldVertices[i - 1]);
            const t = clamp(W.dot(V) / V.dot(V), 0, 1);
            const closest = V.clone()
                .multiplyScalar(t)
                .add(worldVertices[i - 1]);
            const distance = closest.distanceTo(worldIntersect);
            if (distance < bestDistance) {
                bestDistance = distance;
                bestPoint = closest;
            }
        }
        this.from_point.copy(bestPoint);
    };

    update_midpoint = () => {
        this.mid_point.copy(this.from_point).lerp(this.to_point, 0.5);
    };

    // transform the group_copy across the fold
    tranform_group_copy = () => {
        // get the unit vector from the from_point to the to_point and compute the axis to fold over
        const fold_dir = this.to_point.clone().sub(this.from_point).normalize();
        const fold_axis = new THREE.Vector3().crossVectors(fold_dir, this.controls.touchNormal).normalize();

        // ensure the copy starts at the same position as the original
        this.group_copy.position.copy(this.group.position);
        this.group_copy.rotation.copy(this.group.rotation);

        // create a transform to rotate the group_copy around the fold axis by 180 degrees
        const transform = new THREE.Matrix4();
        transform.makeRotationAxis(fold_axis, Math.PI);
        this.group_copy.position.sub(this.mid_point);
        this.group_copy.applyMatrix4(transform);
        this.group_copy.position.add(this.mid_point);
    };

    on_press = () => {
        this.fold_facet_idx = this.mesh_to_facet_idx.get(this.controls.touchMesh);
        this.update_closest_edge(this.fold_facet_idx);
        this.to_point.copy(this.controls.touchPoint);
        this.update_midpoint();
        // this.fold_normal.copy(this.controls.touchNormal);

        // show the group_copy
        this.group_copy.visible = true;
        this.tranform_group_copy();
    };

    on_move = () => {
        this.to_point.copy(this.controls.touchPoint);
        this.update_midpoint();
        this.tranform_group_copy();
    };

    on_release = () => {
        this.fold_facet_idx = -1;
        this.group_copy.visible = false;
    };

    update_scene = () => {
        // debug update debug geometry
        if (this.controls.isInteracting) {
            this.show_debug_geometry(this.from_point, this.mid_point, this.to_point, this.p0, this.p1);
        } else {
            this.hide_debug_geometry();
        }

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
