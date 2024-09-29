import * as THREE from 'three';
import { clamp } from 'three/src/math/MathUtils.js';

import { SceneFunctions } from '../main';
import { states as paper_plane_states, tf_vec_to_mat, ThingTemplate } from './test_paper_plane';
// import { recover_transform } from './figure_out_transform';
import { OrbitalPointer } from '../controls';
import { setup_debug_geometry, hash_coord, getLineIntersection, getLineCircleIntersections, shrinkPolygon, pmod } from '../utils';
import { MaterialFactory, MaterialProps, harlequin_circles, seigaiha } from './shader_textures';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

export const build_thing_scene =
    (thing_t: ThingTemplate) =>
    (renderer: THREE.WebGLRenderer): SceneFunctions => {
        const material_factories: MaterialFactory[] = [
            (props: MaterialProps = {}) => seigaiha({ side: THREE.FrontSide, ...props }),
            (props: MaterialProps = {}) => seigaiha({ side: THREE.BackSide, color1: 0x000000, ...props })
            // (props: MaterialProps = {}) => harlequin_circles({ side: THREE.FrontSide, ...props}),
            // (props: MaterialProps = {}) => harlequin_circles({ side: THREE.BackSide, color0: 0x00ffff, ...props}),
            // (props: MaterialProps = {}) => new THREE.MeshBasicMaterial({ color: 0x2288ff, side: THREE.BackSide, ...props })
        ];
        const scene = new BuildThingScene({ thing_t, renderer, material_factories });
        return {
            update_scene: scene.update_scene,
            camera: scene.camera,
            resetter: scene.resetter
        };
    };

export const build_thing_from_seed =
    (verts: [number, number][]) =>
    (renderer: THREE.WebGLRenderer): SceneFunctions => {
        const thing_t: ThingTemplate = [[{ vertices: verts, links: verts.map((_) => null), transform: [0, 0, 0] }]];
        return build_thing_scene(thing_t)(renderer);
    };

export const paper_plane_scene = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    //DEBUG testing recover transform
    // const to_vec2 = (ps: number[][]) => ps.map((p) => new THREE.Vector2(p[0], p[1]));
    // const P0s = [[-4.25, 1.25], [0, 5.5], [-4.25, 5.5]]
    // // const P0s = [[-5.25, 1.25], [-1, 5.5], [-1, 1.25]]
    // const P1s = [[-4.25, 1.25], [ 0, 5.5], [ 0, 1.25]]
    // console.log('recover_transform', recover_transform(to_vec2(P0s), to_vec2(P1s)));
    // console.log('tfmat', tf_vec_to_mat([-5.5, 5.5, -Math.PI/2]))

    return build_thing_scene(paper_plane_states[2])(renderer);
};

type BuildThingSceneProps = {
    thing_t: ThingTemplate;
    renderer: THREE.WebGLRenderer;
    layer_thickness?: number;
    background_color?: THREE.ColorRepresentation;
    edge_color?: THREE.ColorRepresentation;
    face_color?: THREE.ColorRepresentation;
    material_factories?: MaterialFactory[];
    debug_geometry?: boolean;
    shrink_workspaces?: boolean;
};
class BuildThingScene {
    // initialization
    layer_thickness: number;
    background_color: THREE.ColorRepresentation;
    edge_color: THREE.ColorRepresentation;
    face_color: THREE.ColorRepresentation;
    material_factories: MaterialFactory[];
    debug_geometry: boolean;
    shrink_workspaces: boolean;

    // rendering/simulation
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitalPointer;

    // clipping planes
    prime_clip_planes: THREE.Plane[] = [];
    reverse_clip_planes: THREE.Plane[] = [];

    // template of the current thing
    thing_t: ThingTemplate;
    facet_idx_to_template_coords: Map<number, [number, number]>;
    template_coords_to_facet_idx: Map<string, number>; // string is the representation of the coordinates so we can use it as a key
    edge_idx_to_connected_facets: Map<number, [number, number]>; // edge index to indices of the two connected facets

    // objects
    prime_mesh_to_facet_idx: Map<THREE.Mesh, number>; // used to link based on which object the orbital pointer touches
    // prime object doesn't move
    prime_facets: Facet[];
    prime_edges: Edge[];
    prime_group: THREE.Group;
    // copy object moves across fold axis
    copy_facets: Facet[];
    copy_edges: Edge[];
    copy_group: THREE.Group;
    // copy 2 is static, and shows any part of prime that is hidden by clipping planes
    copy2_facets: Facet[];
    copy2_edges: Edge[];
    copy2_group: THREE.Group;
    active_edge: Edge | null = null; // so we can draw the edge currently being folded

    // fold tracking parameters
    fold_initial_facet_idx: number = -1; // The index of the initially touched facet at the start of a fold
    fold_initial_edge_idx: number = -1; // The index of the edge that the fold starts from
    fold_sign: -1 | 1 | null = null; // Whether the fold is in the positive direction or negative direction
    active_facets: Set<number> = null; // The set of indices of the facets that are allowed to participate in the fold
    workspace_point_obstacles: THREE.Vector2[] = []; // The vertices of the facets that are obstacles to the fold
    facet_edge_obstacles: [THREE.Vector2, THREE.Vector2][] = []; // The edges of the facets that are obstacles to the fold
    overhang_edge_obstacles: [THREE.Vector2, THREE.Vector2][] = []; // overhanging edges that are obstacles to the fold

    // fold tracking geometry
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
        material_factories,
        debug_geometry = false,
        shrink_workspaces = false
    }: BuildThingSceneProps) {
        this.thing_t = thing_t;

        // set initialization parameters
        this.layer_thickness = layer_thickness;
        this.background_color = background_color;
        this.edge_color = edge_color;
        this.face_color = face_color;
        this.debug_geometry = debug_geometry;
        this.shrink_workspaces = shrink_workspaces;

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
        this.reverse_clip_planes.push(new THREE.Plane(new THREE.Vector3(0, -1, 0).normalize(), 0));
        this.disable_clipping_planes();

        // setup the material factories
        if (material_factories !== undefined && material_factories.length > 0) {
            this.material_factories = material_factories;
        } else {
            this.material_factories = [
                (props: MaterialProps = {}) =>
                    new THREE.MeshBasicMaterial({ color: this.face_color, side: THREE.FrontSide, ...props }),
                (props: MaterialProps = {}) =>
                    new THREE.MeshBasicMaterial({ color: this.face_color, side: THREE.BackSide, ...props })
            ];
        }

        // setup debug geometry
        const { hide_debug_geometry, show_debug_geometry } = setup_debug_geometry(this.scene, this.debug_geometry);
        this.hide_debug_geometry = hide_debug_geometry;
        this.show_debug_geometry = show_debug_geometry;

        // set dummy values for prime_group and copy_group
        this.rebuild_thing(this.thing_t);

        // // debug random offset and orientation
        // this.prime_group.rotation.z = Math.PI / 4;
        // this.prime_group.position.y = 1;
        // this.copy_group.rotation.z = Math.PI / 4;
        // this.copy_group.position.y = 1;
        // this.copy2_group.rotation.z = Math.PI / 4;
        // this.copy2_group.position.y = 1;

        // set up controls
        this.controls = new OrbitalPointer({
            camera: this.camera,
            scene: this.scene,
            domElement: this.renderer.domElement,
            getInteractables: () => this.prime_facets.map((f) => f.mesh),
            onPress: this.on_press,
            onMove: this.on_move,
            // onRelease: this.on_release, //TODO: uncomment this when we have proper handling of apply_fold()
            faceBounded: false,
            showPlane: false
        });
    }

    construct_thing = (
        thing_t: ThingTemplate,
        clipping_planes: THREE.Plane[],
        which: 'prime' | 'copy' | 'copy2'
    ): THREE.Group => {
        const group = new THREE.Group();
        const facets: Facet[] = [];
        const edges: Edge[] = [];
        const facet_coords: [number, number][] = [];
        const edge_coords: [number, number, number, number][] = [];
        thing_t.forEach((layer, i) =>
            layer.forEach((facet_t, j) => {
                const planar_tf = tf_vec_to_mat(facet_t.transform);
                const f = new Facet({
                    vertices: facet_t.vertices,
                    planar_tf,
                    z_offset: i * this.layer_thickness,
                    material_factories: this.material_factories,
                    edge_color: this.edge_color,
                    clipping_planes
                });
                facets.push(f);
                facet_coords.push([i, j]);
                group.add(f.mesh);
                group.add(f.lines);

                // handle any edge links
                facet_t.links.forEach((link, k) => {
                    if (link === null) return;
                    const [layer_offset, facet_index, edge_index] = link;
                    if (layer_offset < 0) return; // only handle positive direction links since there are 2 copies (one for positive, and one for negative)

                    // determine the correct 2D coordinates for the edge
                    const p0_2d = f.vertices2[k];
                    const p1_2d = f.vertices2[(k + 1) % f.vertices2.length];
                    const p0_3d = new THREE.Vector3(p0_2d.x, p0_2d.y, 0).applyMatrix4(f.mesh.matrixWorld);
                    const p1_3d = new THREE.Vector3(p1_2d.x, p1_2d.y, 0).applyMatrix4(f.mesh.matrixWorld);
                    const edge = new Edge({
                        p0: [p0_3d.x, p0_3d.y],
                        p1: [p1_3d.x, p1_3d.y],
                        thickness: layer_offset * this.layer_thickness,
                        z_offset: i * this.layer_thickness,
                        color: this.face_color,
                        edge_color: this.edge_color,
                        clipping_planes
                    });
                    edges.push(edge);
                    edge_coords.push([i, j, i + layer_offset, facet_index]);
                    group.add(edge.mesh);
                    group.add(edge.lines);
                });
            })
        );

        //TODO: break this out into separate function
        // for the prime version, save its facets and edges to the class
        if (which === 'prime') {
            this.prime_facets = facets;
            this.prime_edges = edges;

            // set up the mapping from facet to coordinates in the template
            this.prime_mesh_to_facet_idx = new Map<THREE.Mesh, number>();
            this.facet_idx_to_template_coords = new Map<number, [number, number]>();
            this.template_coords_to_facet_idx = new Map<string, number>();
            facets.forEach((f, i) => {
                this.prime_mesh_to_facet_idx.set(f.mesh, i);
                this.facet_idx_to_template_coords.set(i, facet_coords[i]);
                this.template_coords_to_facet_idx.set(hash_coord(facet_coords[i]), i);
            });

            // set up the mapping from edge indices to the connected facets
            this.edge_idx_to_connected_facets = new Map<number, [number, number]>();
            edges.forEach((e, i) => {
                const [layer0_idx, facet0_idx, layer1_idx, facet1_idx] = edge_coords[i];
                const linear_facet0_idx = this.template_coords_to_facet_idx.get(hash_coord([layer0_idx, facet0_idx]));
                const linear_facet1_idx = this.template_coords_to_facet_idx.get(hash_coord([layer1_idx, facet1_idx]));
                this.edge_idx_to_connected_facets.set(i, [linear_facet0_idx, linear_facet1_idx]);
            });
        } else if (which === 'copy') {
            this.copy_facets = facets;
            this.copy_edges = edges;
        } else if (which === 'copy2') {
            this.copy2_facets = facets;
            this.copy2_edges = edges;
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
        this.prime_group = this.construct_thing(thing_t, this.prime_clip_planes, 'prime');
        this.copy_group = this.construct_thing(thing_t, this.prime_clip_planes, 'copy');
        this.copy2_group = this.construct_thing(thing_t, this.reverse_clip_planes, 'copy2');

        // add the group and the copy to the scene
        this.scene.add(this.prime_group);
        this.scene.add(this.copy_group);
        this.scene.add(this.copy2_group);
        this.copy_group.visible = false;
        this.copy2_group.visible = false;
    };

    // only call on initial press
    determine_fold_sign = () => {
        // determine the fold direction based on the touch normal
        const facet = this.prime_facets[this.fold_initial_facet_idx];
        const world_transform = facet.mesh.matrixWorld;
        const facet_z = new THREE.Vector3(0, 0, 1).applyMatrix4(world_transform);
        const fold_normal_dot = facet_z.dot(this.controls.touchNormal);
        this.fold_sign = fold_normal_dot > 0 ? 1 : -1;
    };

    // only call on initial press
    determine_fold_from_point = () => {
        const facet = this.prime_facets[this.fold_initial_facet_idx];

        // Transform the 2D shape points to 3D
        const worldVertices: THREE.Vector3[] = [];
        facet.vertices2.forEach((vertex) => {
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

        // save the fold start point and edge index
        this.from_point.copy(bestPoint);
        this.fold_initial_edge_idx = bestEdgeIdx;
    };

    determine_active_facets = () => {
        this.active_facets = new Set<number>();

        // //DEBUG: use every facet as active
        // this.active_facets.add(0);
        // this.active_facets.add(1);
        // this.active_facets.add(2);
        // this.active_facets.add(3);
        // return;

        //DEBUG: for now, the only active facet is the one initially touched
        this.active_facets.add(this.fold_initial_facet_idx);
        console.log('active facets', this.active_facets);
        return;

        /**
        Algorithm:
        - start at the initial facet/edge
        - if initial edge has no link, then done
        - from initial edge, follow link. Any adjacent links on connection side should be explored
            -> note that follow direction should be based on fold sign and offset sign
        - repeat until no more adjacent links from followed links
        
        note that all of the this.facet_idx/etc. are based on the contiguous facet array, whereas the other indices correspond to the template structure
        */

        // TODO: this needs a better conception of which edges are obstacles, and which are picked up and included in the fold...
        //       as is, we either grab too many layers (going through obstacles) or not enough (filtering out valid traversals)

        /* OLD VERSION using layers. probably keep DFS, but reimplement with active_facet set rather than layer index
        const frontier: [number, number, number][] = []; // [layer_idx, facet_idx, edge_idx]
        const visited_id = new Set<string>(); // to avoid cycles

        // after the initial facet/edge were determined, walk down the chain of linked facets to find the lowest one
        const [init_layer_idx, init_facet_idx] = this.facet_idx_to_template_coords.get(this.fold_initial_facet_idx);
        this.active_layers_near_idx = init_layer_idx;
        this.active_layers_far_idx = init_layer_idx;

        // seed the frontier with the initial edge and its adjacent edges
        const links = this.thing_t[init_layer_idx][init_facet_idx].links;
        if (links[this.fold_initial_edge_idx] !== null) {
            frontier.push([init_layer_idx, init_facet_idx, this.fold_initial_edge_idx]);
        }

        // // only include adjacent edges from the initial link if they are going the same way as the fold
        // const left_edge_idx = pmod(this.fold_initial_edge_idx - 1, links.length);
        // if (links[left_edge_idx] !== null) { // && links[left_edge_idx][0] * this.fold_sign > 0) {
        //     frontier.push([init_layer_idx, init_facet_idx, left_edge_idx]);
        // }
        // const right_edge_idx = pmod(this.fold_initial_edge_idx + 1, links.length);
        // if (links[right_edge_idx] !== null) { // && links[right_edge_idx][0] * this.fold_sign > 0) {
        //     frontier.push([init_layer_idx, init_facet_idx, right_edge_idx]);
        // }

        while (frontier.length > 0) {
            const [layer_idx, facet_idx, edge_idx] = frontier.pop()!;


            ///////////////// Validation checks ///////////////////////
            // check if we've already visited this facet
            const id = `${layer_idx}-${facet_idx}-${edge_idx}`;
            if (visited_id.has(id)) {
                console.error(`Malformed thing template. Cycle detected at layer ${layer_idx}, facet ${facet_idx}, edge ${edge_idx}`);
                continue;
            }
            visited_id.add(id);

            // check if the layer index is valid
            if (layer_idx < 0 || layer_idx >= this.thing_t.length) {
                console.error(`Malformed thing template. Invalid layer index: ${layer_idx}`);
                continue;
            }
            
            // check that there is a non-null link at the provided coordinates
            if (this.thing_t[layer_idx][facet_idx].links[edge_idx] === null) {
                console.error(`Malformed thing template. No link found for layer ${layer_idx}, facet ${facet_idx}, edge ${edge_idx}`);
                continue;
            }
            ///////////////////////////////////////////////////////////

            // get the next set of coordinates from the current set
            const [next_layer_offset, next_facet_idx, next_edge_idx] = this.thing_t[layer_idx][facet_idx].links[edge_idx];
            const next_layer_idx = layer_idx + next_layer_offset;
            const next_links = this.thing_t[next_layer_idx][next_facet_idx].links;

            // verify that the next connection links back properly 
            console.assert(next_links[next_edge_idx][0] === -next_layer_offset, 'Invalid link direction');
            console.assert(next_links[next_edge_idx][1] === facet_idx, 'Invalid connected facet index');
            console.assert(next_links[next_edge_idx][2] === edge_idx, 'Invalid connected edge index');
            
            // if the next layer is outside of the current bounds, expand the bounds
            if (next_layer_offset * this.fold_sign > 0) {
                // update the near index
                if (this.fold_sign*(next_layer_idx) > this.fold_sign*(this.active_layers_near_idx)) {
                    this.active_layers_near_idx = next_layer_idx;
                }   
            } else {
                // update the far index
                if (this.fold_sign*(next_layer_idx) < this.fold_sign*(this.active_layers_far_idx)) {
                    this.active_layers_far_idx = next_layer_idx;
                }
            }

            // // add adjacent edges to the frontier (if they exist)
            // const left_edge_idx = pmod(next_edge_idx - 1, next_links.length);
            // if (next_links[left_edge_idx] !== null) {
            //     frontier.push([next_layer_idx, next_facet_idx, left_edge_idx]);
            // }
            // const right_edge_idx = pmod(next_edge_idx + 1, next_links.length);
            // if (next_links[right_edge_idx] !== null) {
            //     frontier.push([next_layer_idx, next_facet_idx, right_edge_idx]);
            // }
        }

        // set the near index to the closest layer to the camera
        // this approach skips traversal, and only looks at connection on the touched edge, and all layers towards the camera
        // this is a mediocre approach to handling which layers are included, but it works well enough
        if (this.fold_sign === 1) {
            this.active_layers_near_idx = this.thing_t.length - 1;
        } else {
            this.active_layers_near_idx = 0;
        }

        console.log('active_layers_near_idx', this.active_layers_near_idx);
        console.log('active_layers_far_idx', this.active_layers_far_idx);
        */
    };

    determine_obstacles = () => {
        this.workspace_point_obstacles = [];
        this.facet_edge_obstacles = [];
        this.overhang_edge_obstacles = [];
    };

    /** */
    hide_inactive_facets = (facets: Facet[], edges: Edge[], invert: boolean = false) => {
        facets.forEach((f, idx) => {
            let visible = this.active_facets.has(idx);
            visible = invert ? !visible : visible;
            f.mesh.visible = visible;
            f.lines.visible = visible;
        });
        edges.forEach((e, idx) => {
            const [facet0_idx, facet1_idx] = this.edge_idx_to_connected_facets.get(idx);
            let visible = this.active_facets.has(facet0_idx) && this.active_facets.has(facet1_idx);
            visible = invert ? !visible : visible;
            e.mesh.visible = visible;
            e.lines.visible = visible;
        });
    };

    update_midpoint = () => {
        // update the midpoint based on the from_point and to_point
        this.mid_point.copy(this.from_point).lerp(this.to_point, 0.5);
    };

    fit_to_workspace_obstacles = () => {
        // TODO: update this so it uses all the facets in the active layers, not just the initial one

        // iterate over all vertices of the facet to check if the to_point is within any of their workspaces
        const inv_tf = this.prime_group.matrixWorld.clone().invert();
        let temp: THREE.Vector3;
        temp = this.from_point.clone().applyMatrix4(inv_tf);
        const original_local_from_point = new THREE.Vector2(temp.x, temp.y);
        temp = this.to_point.clone().applyMatrix4(inv_tf);
        const local_to_point = new THREE.Vector2(temp.x, temp.y);

        const original_vertices: THREE.Vector2[] = [];
        for (let facet_idx of this.active_facets) {
            const f = this.prime_facets[facet_idx];
            for (let vertex of f.vertices3) {
                const v = new THREE.Vector2(vertex.x, vertex.y);
                original_vertices.push(v);
            }
        }

        let vertices: THREE.Vector2[];
        let local_from_point: THREE.Vector2;
        if (this.shrink_workspaces) {
            // shrink the vertices of the facet a smidge
            [vertices, [local_from_point]] = shrinkPolygon(original_vertices, 0.95, [original_local_from_point]);

            // insert an extra point into vertices to prevent the singularity around the from_point
            // still not perfect, but works well enough for now. Intersections between the workspaces of the two vertices on the active edge and this workspace is too sharp
            // To fix, consider using sdf with smooth combination of the workspaces (and maybe removing/adjusting this extra point)
            vertices.push(local_from_point.clone().lerp(original_local_from_point, 2));
        } else {
            vertices = original_vertices;
            local_from_point = original_local_from_point;
        }
        // best point shifted directly along the drag direction
        let best_shift = Infinity;
        let best_point: THREE.Vector2 | null = null;

        // backup if no best point is found. closest point in any valid workspace
        let okay_distance = Infinity;
        let okay_point: THREE.Vector2 | null = null;

        // find the best point and okay point
        for (let vertex of vertices) {
            const workspace_radius = vertex.distanceTo(local_from_point);
            const distance_from_vertex = local_to_point.distanceTo(vertex);
            if (distance_from_vertex < workspace_radius) {
                //the point is already within a workspace, no need to adjust
                return;
            }
            // update the best okay point as the closest point in the workspace from the to_point
            if (distance_from_vertex - workspace_radius < okay_distance) {
                okay_distance = distance_from_vertex - workspace_radius;
                okay_point = local_to_point.clone().sub(vertex).normalize().multiplyScalar(workspace_radius).add(vertex);
            }

            const intersections = getLineCircleIntersections(local_from_point, local_to_point, vertex, workspace_radius);
            if (intersections.length === 0) {
                continue;
            }
            for (let intersection of intersections) {
                const shift = intersection.distanceTo(local_to_point);
                if (shift < best_shift) {
                    best_shift = shift;
                    best_point = intersection;
                }
            }
        }

        // no intersections found
        if (best_point === null) {
            best_point = okay_point;
        }

        temp = new THREE.Vector3(best_point.x, best_point.y, 0);
        this.to_point.copy(temp.applyMatrix4(this.prime_group.matrixWorld));
        this.mid_point.copy(this.from_point).lerp(this.to_point, 0.5);
    };

    fit_to_edge_obstacles = () => {
        //TODO
    };

    // fit_to_over_under_edge_obstacles = () => {}
    // fit_to_etc_obstacles = () => {}

    // transform the copy_group across the fold
    transform_copy_group = () => {
        // if the distance between the from and too points is too small, don't fold
        if (this.from_point.clone().sub(this.to_point).lengthSq() < 0.001) {
            return;
        }

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
        this.copy_group.position.add(
            this.controls.touchNormal.clone().multiplyScalar(this.layer_thickness * this.determine_fold_height())
        );

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
        this.reverse_clip_planes[0].normal.copy(fold_dir);
        this.reverse_clip_planes[0].normal.negate();
        this.reverse_clip_planes[0].constant = -constant;
    };

    disable_clipping_planes = () => {
        //just set the constant to a large number to disable clipping
        this.prime_clip_planes[0].constant = 1000;
        this.reverse_clip_planes[0].constant = -1000;
    };

    update_active_edge = () => {
        //TODO: this needs to handle potentially complex edges with multiple segments based on all facets in the active layers

        // update the active edge to show the fold line
        this.delete_active_edge();
        this.compute_fold_endpoints();

        // if the fold line is too short (or out of bounds), don't draw the active edge
        if (this.p0.clone().sub(this.p1).lengthSq() < 0.001) return;

        // transform the fold endpoints from world space to the facet's local space
        const facet_tf = this.prime_facets[this.fold_initial_facet_idx].mesh.matrixWorld;
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
        //TODO: this needs to handle potentially complex edges with multiple segments based on all facets in the active layers

        //compute p0 and p1 based on the from_point, mid_point, and to_point, and the mesh being folded

        // Transform the 2D shape points to 3D
        const facet = this.prime_facets[this.fold_initial_facet_idx];
        const shapeVertices = facet.vertices2.map((v) => new THREE.Vector2(v.x, v.y));

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
        const [i, j] = this.facet_idx_to_template_coords.get(this.fold_initial_facet_idx);
        if (this.fold_sign === null) {
            console.error('fold sign not determined');
            return 0;
        } else if (this.fold_sign === 1) {
            return this.thing_t.length - i;
        } else {
            return i + 1;
        }
        // //TODO: get the layer index of the facet, and then count how many layers to the end (or start if negative fold)
        // return 2;
    };

    on_press = () => {
        // DEBUG. remove when we have proper handling of apply_fold()
        this.on_release();

        // show the copy_group
        this.copy_group.visible = true;
        this.copy2_group.visible = true;

        //determine the facet that is the root of the fold
        this.fold_initial_facet_idx = this.prime_mesh_to_facet_idx.get(this.controls.touchMesh);
        this.determine_fold_sign();
        this.determine_fold_from_point();
        this.determine_active_facets();
        this.determine_obstacles();
        this.hide_inactive_facets(this.copy_facets, this.copy_edges);
        this.hide_inactive_facets(this.copy2_facets, this.copy2_edges, true);

        // update geometry based on the current state of the fold
        this.on_move();
    };

    on_move = () => {
        this.to_point.copy(this.controls.touchPoint);
        this.update_midpoint();
        this.fit_to_workspace_obstacles();
        this.fit_to_edge_obstacles();
        this.transform_copy_group();
    };

    on_release = () => {
        this.fold_initial_facet_idx = -1;
        this.fold_initial_edge_idx = -1;
        this.active_facets = null;
        this.workspace_point_obstacles = null;
        this.facet_edge_obstacles = null;
        this.overhang_edge_obstacles = null;
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
        this.controls.dispose();
    };
}

type FacetProps = {
    vertices: Array<[number, number]>;
    planar_tf: THREE.Matrix4;
    z_offset: number;
    // color: THREE.ColorRepresentation;
    material_factories: MaterialFactory[];
    edge_color: THREE.ColorRepresentation;
    clipping_planes: THREE.Plane[];
};

class Facet {
    vertices2: THREE.Vector2[];
    vertices3: THREE.Vector3[];
    mesh: THREE.Mesh;
    lines: Line2; // THREE.LineSegments;

    constructor({ vertices, planar_tf, z_offset, material_factories, edge_color, clipping_planes }: FacetProps) {
        // make the mesh
        this.vertices2 = vertices.map(([x, y]) => new THREE.Vector2(x, y));
        const shape = new THREE.Shape(this.vertices2);
        const geometry = new THREE.ShapeGeometry(shape);
        // adjust the geometry groups having multi-sided shader materials
        geometry.clearGroups();
        geometry.addGroup(0, geometry.attributes.position.count * 2, 0);
        geometry.addGroup(0, geometry.attributes.position.count * 2, 1);
        const materials = material_factories.map((factory) => factory({ clippingPlanes: clipping_planes }));

        // create the mesh, and transform according to the planar transform and z_offset
        this.mesh = new THREE.Mesh(geometry, materials.length > 1 ? materials : materials[0]);
        this.mesh.applyMatrix4(planar_tf);
        this.mesh.position.z = z_offset;

        // apply the planar transform to the vertices (in 2D) for the edge vertices
        this.vertices3 = this.vertices2.map((v) => new THREE.Vector3(v.x, v.y, 0));
        this.vertices3.forEach((v) => v.applyMatrix4(planar_tf));
        this.vertices3.forEach((v) => (v.z = z_offset)); // set z to z_offset

        // // make the lines
        // const lines = new THREE.EdgesGeometry(geometry);
        // const linesMaterial = new THREE.LineBasicMaterial({ color: edge_color });
        // this.lines = new THREE.LineSegments(lines, linesMaterial);
        // this.lines.position.z = z_offset;

        // make the lines with Line2
        const lineGeometry = new LineGeometry();
        lineGeometry.setPositions([...this.vertices3, this.vertices3[0]].map((v) => [v.x, v.y, v.z]).flat()); //([...this.vertices, this.vertices[0]].map((v) => [v.x, v.y, z_offset]).flat());
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
