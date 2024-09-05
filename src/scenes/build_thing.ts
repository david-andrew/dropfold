import * as THREE from 'three';
import { clamp } from 'three/src/math/MathUtils.js';

import { SceneFunctions } from '../main';
import { states as paper_plane_states, ThingTemplate } from './test_paper_plane';
import { OrbitalPointer } from '../controls';
import { setup_debug_geometry, getLineIntersection } from '../utils';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

export const build_thing_scene =
    (thing_t: ThingTemplate) =>
    (renderer: THREE.WebGLRenderer): SceneFunctions => {
        const scene = new BuildThingScene({ thing_t, renderer });
        return {
            update_scene: scene.update_scene,
            camera: scene.camera,
            resetter: scene.resetter
        };
    };

export const build_thing_from_seed =
    (verts: [number, number][]) =>
    (renderer: THREE.WebGLRenderer): SceneFunctions => {
        const thing_t: ThingTemplate = [[{ vertices: verts, links: verts.map((_) => null) }]];
        return build_thing_scene(thing_t)(renderer);
    };

export const paper_plane_scene = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    return build_thing_scene(paper_plane_states[2])(renderer);
};

type BuildThingSceneProps = {
    thing_t: ThingTemplate;
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

    // clipping planes
    prime_clip_planes: THREE.Plane[] = [];
    copy_clip_planes: THREE.Plane[] = [];

    // objects
    thing_t: ThingTemplate;
    facets: Facet[];
    edges: Edge[];
    mesh_to_facet_idx: Map<THREE.Mesh, number>;
    prime_group: THREE.Group;
    copy_group: THREE.Group;
    active_edge: Edge | null = null; // so we can draw the edge currently being folded

    // fold tracking parameters
    fold_facet_idx: number = -1; // The index of the initially touched facet at the start of a fold
    fold_edge_idx: number = -1; // The index of the edge that the fold starts from
    fold_sign: -1 | 1 | null = null; // Whether the fold is in the positive direction or negative direction
    from_point = new THREE.Vector3(); // The point on the facet that the fold starts from
    mid_point = new THREE.Vector3(); // The halfway point between the fold start and current pointer location
    to_point = new THREE.Vector3(); // The current pointer location (start point should move to this point to accomplish the fold)
    p0 = new THREE.Vector3(); // The start point of the fold line
    p1 = new THREE.Vector3(); // The end point of the fold line

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
        thing_t,
        renderer,
        layer_thickness = 0.01,
        background_color = 0, //0x222222,
        edge_color = 0xffffff, //0x000000,
        face_color = 0, //0xffffff,
        debug_geometry = false
    }: BuildThingSceneProps) {
        this.thing_t = thing_t;

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
        this.camera.position.z = 15;

        // setup for clipping planes
        this.renderer.localClippingEnabled = true;
        this.renderer.clippingPlanes = []; // all clipping planes will be local to the object
        this.prime_clip_planes.push(new THREE.Plane(new THREE.Vector3(0, 1, 0).normalize(), 0));
        this.copy_clip_planes.push(new THREE.Plane(new THREE.Vector3(0, 1, 0).normalize(), 0));
        this.disable_clipping_planes();

        // setup debug geometry
        const { hide_debug_geometry, show_debug_geometry } = setup_debug_geometry(this.scene, this.debug_geometry);
        this.hide_debug_geometry = hide_debug_geometry;
        this.show_debug_geometry = show_debug_geometry;

        // set dummy values for prime_group and copy_group
        this.rebuild_thing(this.thing_t);

        // // debug random offset and orientation
        // this.prime_group.rotation.x = Math.PI / 4;
        // this.prime_group.position.y = 1;

        // set up controls
        this.controls = new OrbitalPointer({
            camera: this.camera,
            scene: this.scene,
            domElement: this.renderer.domElement,
            getInteractables: () => this.facets.map((f) => f.mesh),
            onPress: this.on_press,
            onMove: this.on_move,
            // onRelease: this.on_release, //TODO: uncomment this when we have proper handling of apply_fold()
            faceBounded: false,
            showPlane: false
        });
    }

    construct_thing = (thing_t: ThingTemplate, clipping_planes: THREE.Plane[], is_prime: boolean): THREE.Group => {
        const group = new THREE.Group();
        const facets = [];
        const edges = [];
        thing_t.forEach((layer, i) =>
            layer.forEach((facet_t) => {
                const f = new Facet({
                    vertices: facet_t.vertices,
                    z_offset: i * this.layer_thickness,
                    color: this.face_color,
                    edge_color: this.edge_color,
                    clipping_planes
                });
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
                        thickness: layer_offset * this.layer_thickness,
                        z_offset: i * this.layer_thickness,
                        color: this.face_color,
                        edge_color: this.edge_color,
                        clipping_planes
                    });
                    edges.push(edge);
                    group.add(edge.mesh);
                    group.add(edge.lines);
                });
            })
        );

        // for the prime version, save its facets and edges to the class
        if (is_prime) {
            this.facets = facets;
            this.edges = edges;
            this.mesh_to_facet_idx = new Map<THREE.Mesh, number>();
            facets.forEach((f, i) => {
                this.mesh_to_facet_idx.set(f.mesh, i);
            });
        }

        return group;
    };

    rebuild_thing = (thing_t: ThingTemplate) => {
        // quick and dirty debug
        if (this.prime_group && this.copy_group) {
            this.scene.remove(this.prime_group);
            this.prime_group = new THREE.Group();
            this.scene.remove(this.copy_group);
            this.copy_group = new THREE.Group();
        }

        // construct the group and the copy
        this.prime_group = this.construct_thing(thing_t, this.prime_clip_planes, true);
        this.copy_group = this.construct_thing(thing_t, this.copy_clip_planes, false);

        // add the group and the copy to the scene
        this.scene.add(this.prime_group);
        this.scene.add(this.copy_group);
        this.copy_group.visible = false;
    };

    // only call on initial press
    determine_fold_sign = () => {
        // determine the fold direction based on the touch normal
        const facet = this.facets[this.fold_facet_idx];
        const world_transform = facet.mesh.matrixWorld;
        const facet_z = new THREE.Vector3(0, 0, 1).applyMatrix4(world_transform);
        const fold_normal_dot = facet_z.dot(this.controls.touchNormal);
        this.fold_sign = fold_normal_dot > 0 ? 1 : -1;
    };

    // only call on initial press
    determine_fold_from_point = () => {
        const facet = this.facets[this.fold_facet_idx];

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
        let bestEdgeIdx = 0;
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
                bestEdgeIdx = i - 1;
            }
        }

        //TODO: potentially travel along folds to lower layers
        // update bestEdgeIdx, fold-in-vs-out, fold_facet_idx,

        this.from_point.copy(bestPoint);
    };

    update_midpoint = () => {
        this.mid_point.copy(this.from_point).lerp(this.to_point, 0.5);
    };

    // transform the copy_group across the fold
    transform_copy_group = () => {
        // get the unit vector from the from_point to the to_point and compute the axis to fold over
        const fold_dir = this.to_point.clone().sub(this.from_point).normalize();
        const fold_axis = new THREE.Vector3().crossVectors(fold_dir, this.controls.touchNormal).normalize();

        // ensure the copy starts at the same position as the original
        this.copy_group.position.copy(this.prime_group.position);
        this.copy_group.rotation.copy(this.prime_group.rotation);

        // create a transform to rotate the copy_group around the fold axis by 180 degrees
        const transform = new THREE.Matrix4();
        transform.makeRotationAxis(fold_axis, Math.PI);
        this.copy_group.position.sub(this.mid_point);
        this.copy_group.applyMatrix4(transform);
        this.copy_group.position.add(this.mid_point);

        // TOOD: this should shift the number of layers of the fold. Currently, it just shifts by 2 layers
        this.copy_group.position.add(this.controls.touchNormal.clone().multiplyScalar(this.layer_thickness * 2));

        this.update_clipping_planes();
        this.update_active_edge();
    };

    // should only call during fold
    update_clipping_planes = () => {
        // update the positions of the clipping planes according to the fold
        const fold_dir = this.to_point.clone().sub(this.from_point).normalize();
        const constant = -this.mid_point.dot(fold_dir);
        this.prime_clip_planes[0].normal.copy(fold_dir);
        this.prime_clip_planes[0].constant = constant;
        this.copy_clip_planes[0].normal.copy(fold_dir);
        this.copy_clip_planes[0].constant = constant;
    };

    disable_clipping_planes = () => {
        //just set the constant to a large number to disable clipping
        this.prime_clip_planes[0].constant = 1000;
        this.copy_clip_planes[0].constant = 1000;
    };

    update_active_edge = () => {
        // update the active edge to show the fold line
        this.delete_active_edge();
        this.compute_fold_endpoints();

        // if the fold line is too short (or out of bounds), don't draw the active edge
        if (this.p0.clone().sub(this.p1).lengthSq() < 0.001) return;

        // transform the fold endpoints from world space to the facet's local space
        const facet_tf = this.facets[this.fold_facet_idx].mesh.matrixWorld;
        const inv_tf = facet_tf.clone().invert();
        const local_p0 = this.p0.clone().applyMatrix4(inv_tf);
        const local_p1 = this.p1.clone().applyMatrix4(inv_tf);

        this.active_edge = new Edge({
            p1: [local_p0.x, local_p0.y],
            p0: [local_p1.x, local_p1.y],
            thickness: this.fold_sign * this.layer_thickness * this.determine_fold_height(),
            z_offset: 0,
            color: this.face_color,
            edge_color: this.edge_color,
            clipping_planes: []
        });

        // transform the active edge back to world space
        this.active_edge.mesh.applyMatrix4(facet_tf);
        this.active_edge.lines.applyMatrix4(facet_tf);

        this.active_edge.add_to_scene(this.scene);
    };

    delete_active_edge = () => {
        if (this.active_edge) {
            this.scene.remove(this.active_edge.mesh);
            this.scene.remove(this.active_edge.lines);
            this.active_edge = null;
        }
    };

    // should only call during fold
    compute_fold_endpoints = () => {
        //compute p0 and p1 based on the from_point, mid_point, and to_point, and the mesh being folded

        // Transform the 2D shape points to 3D
        const facet = this.facets[this.fold_facet_idx];
        const shapeVertices = facet.vertices.map((v) => new THREE.Vector2(v.x, v.y));

        // convert the direction to 2D by projecting the line into the mesh's frame
        const inv_tf = facet.mesh.matrixWorld.clone().invert();
        const local_mid_point = this.mid_point.clone().applyMatrix4(inv_tf);
        const local_from_point = this.from_point.clone().applyMatrix4(inv_tf);
        const local_to_point = this.to_point.clone().applyMatrix4(inv_tf);

        const localDirection = local_from_point.clone().sub(local_to_point).normalize();
        const point2d = new THREE.Vector2(local_mid_point.x, local_mid_point.y);
        const perpdir = new THREE.Vector2(-localDirection.y, localDirection.x);
        const dividing_line_2d = [point2d, point2d.clone().add(perpdir)] as const;

        // determine which edges of the shape intersect the perpendicular line
        const intersections: THREE.Vector2[] = [];
        const intersect_idxs: number[] = [];
        for (let i = 1; i < shapeVertices.length + 1; i++) {
            const A = shapeVertices[i - 1];
            const B = shapeVertices[i % shapeVertices.length];
            const intersection = getLineIntersection([A, B], dividing_line_2d);
            if (intersection !== null) {
                intersections.push(intersection);
                intersect_idxs.push(i - 1);
            }
        }
        if (intersections.length < 2) {
            // dividingLine.visible = false;
            this.delete_active_edge();
            this.p0 = new THREE.Vector3();
            this.p1 = new THREE.Vector3();
            return;
        }
        if (intersections.length > 2) {
            console.error('More than 2 intersections found');
        }

        // convert intersections to world space
        const [local_p0, local_p1] = intersections;
        this.p0 = new THREE.Vector3(local_p0.x, local_p0.y, 0);
        this.p1 = new THREE.Vector3(local_p1.x, local_p1.y, 0);
        this.p0.applyMatrix4(facet.mesh.matrixWorld);
        this.p1.applyMatrix4(facet.mesh.matrixWorld);
    };

    determine_fold_height = (): number => {
        const facet = this.facets[this.fold_facet_idx];
        //TODO
        return 2;
    };

    on_press = () => {
        // DEBUG. remove when we have proper handling of apply_fold()
        this.on_release();

        // show the copy_group
        this.copy_group.visible = true;

        //determine the facet that is the root of the fold
        this.fold_facet_idx = this.mesh_to_facet_idx.get(this.controls.touchMesh);
        this.determine_fold_sign();
        this.determine_fold_from_point();

        // update geometry based on the current state of the fold
        this.on_move();
    };

    on_move = () => {
        this.to_point.copy(this.controls.touchPoint);
        this.update_midpoint();
        this.transform_copy_group();
    };

    on_release = () => {
        this.fold_facet_idx = -1;
        this.fold_edge_idx = -1;
        this.fold_sign = null;
        this.copy_group.visible = false;
        this.disable_clipping_planes();

        // remove the active edge
        this.delete_active_edge();
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

type FacetProps = {
    vertices: Array<[number, number]>;
    z_offset?: number;
    color: THREE.ColorRepresentation;
    edge_color: THREE.ColorRepresentation;
    clipping_planes: THREE.Plane[];
};

class Facet {
    vertices: THREE.Vector2[];
    mesh: THREE.Mesh;
    lines: Line2; // THREE.LineSegments;

    constructor({ vertices, z_offset = 0.0, color, edge_color, clipping_planes }: FacetProps) {
        // make the mesh
        this.vertices = vertices.map(([x, y]) => new THREE.Vector2(x, y));
        const shape = new THREE.Shape(this.vertices);
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, clippingPlanes: clipping_planes });
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
        const lineMaterial = new LineMaterial({ color: edge_color, linewidth: 2, clippingPlanes: clipping_planes });
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
    clipping_planes: THREE.Plane[];
};
class Edge {
    mesh: THREE.Mesh;
    lines: Line2; //THREE.LineSegments;

    constructor({ p0, p1, thickness, z_offset, color, edge_color, clipping_planes }: EdgeProps) {
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
        const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, clippingPlanes: clipping_planes });
        this.mesh = new THREE.Mesh(geometry, material);

        // // make the lines
        // const lines = new THREE.EdgesGeometry(geometry);
        // const linesMaterial = new THREE.LineBasicMaterial({ color: edge_color });
        // this.lines = new THREE.LineSegments(lines, linesMaterial);

        // make the lines with Line2
        const lineGeometry = new LineGeometry();
        lineGeometry.setPositions([...vertices, ...vertices.slice(0, 3)]);
        const lineMaterial = new LineMaterial({ color: edge_color, linewidth: 2, clippingPlanes: clipping_planes });
        lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
        this.lines = new Line2(lineGeometry, lineMaterial);
    }

    add_to_scene(scene: THREE.Scene) {
        scene.add(this.mesh);
        scene.add(this.lines);
    }
}
