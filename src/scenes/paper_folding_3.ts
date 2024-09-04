import * as THREE from 'three'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SceneFunctions } from '../main';
import { Vector2 as vec2, Vector3 as vec3 } from 'three';
import { clamp, randInt } from 'three/src/math/MathUtils.js';
import { OrbitalPointer } from '../controls';
import { setup_debug_geometry, getLineIntersection } from '../utils';


import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';


// type vec3 = THREE.Vector3
// type vec2 = THREE.Vector2
type vert = vec2
type edge = {
    a: vert
    b: vert
}

const PAPER_THICKNESS = 0.01
const SHOW_DEBUG_GEOMETRY = true

class Shape {
    // TODO: maybe have tf: THREE.Matrix4
    verts: Array<vert>
    edges: Array<edge>
    shape: THREE.Shape
    prism: THREE.Mesh
    outline: THREE.LineSegments
    outline_material: THREE.LineBasicMaterial
    group: THREE.Group

    constructor(verts: Array<[number, number]>, paper_color:number, outline_color:number) {
        this.verts = verts.map(v => new THREE.Vector2(v[0], v[1]))
        this.shape = new THREE.Shape(this.verts);
        this.edges = []
        const geometry = new THREE.ShapeGeometry(this.shape)
        const material = new THREE.MeshBasicMaterial({ color: paper_color, side: THREE.DoubleSide });
        this.prism = new THREE.Mesh(geometry, material);

        const edgesGeometry = new THREE.EdgesGeometry(geometry);
        this.outline_material = new THREE.LineBasicMaterial({ color: outline_color });
        this.outline = new THREE.LineSegments(edgesGeometry, this.outline_material);

        this.group = new THREE.Group()
        this.group.add(this.prism)
        this.group.add(this.outline)
    }
}

const shapes: Array<Shape> = []
const meshes: Array<THREE.Mesh> = [] // for convenience. need to ensure always in sync with shapes
const mesh_to_idx: Map<THREE.Mesh, number> = new Map<THREE.Mesh, number>()


const sync_shapes = () => {
    for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i]
        meshes[i] = shape.prism;
        // mesh.position.z = shape.group.position.z
    }
}
const sync_mesh_map = () => {
    for (let i = 0; i < meshes.length; i++) {
        mesh_to_idx.set(meshes[i], i)
    }
}



const make_axis_helper = ({thickness = 10, length = 5} = {}) => {
    // make a coordinate axis out of the line2. red is +x, green is +y, blue is +z
    const group = new THREE.Group()
    
    // x axis
    const xLineGeometry = new LineGeometry();
    const xLineMaterial = new LineMaterial({ linewidth: thickness, color: 0xff0000 });
    xLineMaterial.resolution.set(window.innerWidth, window.innerHeight);
    const xline = new Line2(xLineGeometry, xLineMaterial);
    xLineGeometry.setPositions([0, 0, 0, length, 0, 0]);
    group.add(xline)

    // y axis
    const yLineGeometry = new LineGeometry();
    const yLineMaterial = new LineMaterial({ linewidth: thickness, color: 0x00ff00 });
    yLineMaterial.resolution.set(window.innerWidth, window.innerHeight);
    const yline = new Line2(yLineGeometry, yLineMaterial);
    yLineGeometry.setPositions([0, 0, 0, 0, length, 0]);
    group.add(yline)

    // z axis
    const zLineGeometry = new LineGeometry();
    const zLineMaterial = new LineMaterial({ linewidth: thickness, color: 0x0000ff });
    zLineMaterial.resolution.set(window.innerWidth, window.innerHeight);
    const zline = new Line2(zLineGeometry, zLineMaterial);
    zLineGeometry.setPositions([0, 0, 0, 0, 0, length]);
    group.add(zline)

    return group
}


// type SceneProps = {
//     seed_shape: Array<[number, number]>
//     paper_color?: number
//     background_color?: number
//     outline_color?: number
// }

export const general_folding_scene = (seed_shape: Array<[number, number]>, paper_color:number=0xffffff, background_color:number=/*0x87ceeb*/0x222222, outline_color:number=0x000000) => (renderer: THREE.WebGLRenderer): SceneFunctions => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(background_color);//(0x333333)//(0x87ceeb); // sky blue background
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    // Create an AxesHelper
    // const axisHelper = make_axis_helper()
    // scene.add(axisHelper);



    //////// GENERATE PAPER IN SCENE ////////
    shapes.push(new Shape(seed_shape, paper_color, outline_color))
    // for (let i = 1; i < 10; i++) {
    //     const shape = new Shape([[-1,1], [1,1], [1,-1], [-1,-1]])
    //     shape.group.position.z = i
    //     shape.group.position.x = i
    //     shape.group.rotation.y = Math.PI * i / 10
    //     shape.group.rotation.x = Math.PI * i / 20
    //     shapes.push(shape)
    // }
    shapes.forEach(shape => scene.add(shape.group))
    sync_shapes()
    sync_mesh_map()
    

    // Vectors for keeping track of actions
    let from_point: vec3 = new THREE.Vector3();  // blue sphere
    let mid_point: vec3 = new THREE.Vector3();   // green sphere
    let to_point: vec3 = new THREE.Vector3();    // red sphere
    let p0: vec3 = new THREE.Vector3(); // start of dividing line
    let p1: vec3 = new THREE.Vector3(); // end of dividing line

    // debug geometry setup
    const { hide_debug_geometry, show_debug_geometry } = setup_debug_geometry(scene, SHOW_DEBUG_GEOMETRY)


    // shape preview setup
    let split0 = new Shape([[-1,1], [1,1], [1,-1], [-1,-1]], paper_color, outline_color)  // side 0
    let split1 = new Shape([[-1,1], [1,1], [1,-1], [-1,-1]], paper_color, outline_color)  // side 1
    let connector = new Shape([[-1,1], [1,1], [1,-1], [-1,-1]], paper_color, outline_color)  // the connecting edge
    const reset_split_shapes = () => {
        scene.add(split0.group)
        scene.add(split1.group)
        scene.add(connector.group)
        split0.group.visible = false
        split1.group.visible = false
        connector.group.visible = false
    }
    reset_split_shapes()
    const replace_split_shapes = (shape0: Shape, shape1: Shape, edge: Shape) => {
        split0.group.visible = false
        split1.group.visible = false
        connector.group.visible = false
        scene.remove(split0.group)
        scene.remove(split1.group)
        scene.remove(connector.group)
        split0 = shape0
        split1 = shape1
        connector = edge
        scene.add(split0.group)
        scene.add(split1.group)
        scene.add(connector.group)
    }

   


    let folding: boolean = false  // whether we are currently folding
    // set up orbital controls that can also click objects    
    const onPress = () => {
        update_closest_edge()
        folding = true

        // HACK to hide the outline of the selected mesh
        const interset_idx = mesh_to_idx.get(controls.touchMesh) ?? -1
        console.assert(interset_idx !== -1)
        shapes[interset_idx].outline.visible = false
    }
    const onRelease = () => {
        folding = false 
    }
    const controls = new OrbitalPointer({ 
        camera,
        scene,
        domElement: renderer.domElement,
        getInteractables: () => meshes,
        onPress,
        onRelease,
        showPointer: false
    });


    // Mouse move event
    const checkIntersect = (event: MouseEvent) => {
        if (controls.touchMesh !== null) controls.touchMesh.visible = true;

        if (controls.isInteracting) {
            to_point.copy(controls.touchPoint);
        }
    }
   

    const update_closest_edge = () => {
        if (folding || controls.touchMesh === null) return
        const shape_idx = mesh_to_idx.get(controls.touchMesh)
        const shape = shapes[shape_idx]

        const shapeVertices = shape.shape.getPoints(); // Get the original 2D points from the shape
        const worldVertices: Array<vec3> = [];
        
        // Transform the 2D shape points to 3D
        shapeVertices.forEach(vertex => {
            const vector3D = new THREE.Vector3(vertex.x, vertex.y, 0); // Convert 2D point to 3D by adding a z-value of 0
            vector3D.applyMatrix4(shape.prism.matrixWorld); // Apply the mesh's world transformation matrix to get the 3D position
            worldVertices.push(vector3D);
        });

        let bestPoint = worldVertices[0];
        const worldIntersect = controls.touchPoint //intersect_point.clone().applyMatrix4(shape.prism.matrixWorld)
        let bestDistance = bestPoint.distanceTo(worldIntersect);
        for (let i = 1; i < worldVertices.length + 1; i++) {
            const V = worldVertices[i % worldVertices.length].clone().sub(worldVertices[i-1])
            const W = worldIntersect.clone().sub(worldVertices[i-1])
            const t = clamp(W.dot(V) / V.dot(V), 0, 1)
            const closest = V.clone().multiplyScalar(t).add(worldVertices[i-1])
            const distance = closest.distanceTo(worldIntersect)
            if (distance < bestDistance) {
                bestDistance = distance
                bestPoint = closest
            }
        }
        from_point.copy(bestPoint)
    }
    const draw_dividing_line = () => {
        hide_debug_geometry()
        if (!controls.isInteracting || controls.touchPoint === null) return
        controls.touchMesh.visible = false // a bit hacky. hide the original mesh that is being folded

        // determine the point on the dividing plane:
        const worldMidpoint = to_point.clone().add(from_point).divideScalar(2)

        /// DEBUG draw the green sphere here
        mid_point.copy(worldMidpoint)

        // direction from drag point to edge
        // const worldDirection = from_point.clone().sub(to_point).normalize()
        
        //for each edge on the intersected mesh, determine the point of intersection (if any) with the dividing plane
        const shape_idx = mesh_to_idx.get(controls.touchMesh)
        const shape = shapes[shape_idx]
        const shapeVertices = shape.shape.getPoints(); // Get the original 2D points from the shape
        
        // convert the direction to 2D by projecting the line into the mesh's frame
        const inv_tf = controls.touchMesh.matrixWorld.clone().invert()
        const localMidpoint = worldMidpoint.clone().applyMatrix4(inv_tf)
        const localBluePos = from_point.clone().applyMatrix4(inv_tf)
        const localRedPos = to_point.clone().applyMatrix4(inv_tf)

        const localDirection = localBluePos.clone().sub(localRedPos).normalize()
        const point2d = new vec2(localMidpoint.x, localMidpoint.y)
        const perpdir = new vec2(-localDirection.y, localDirection.x)
        const dividing_line_2d = [point2d, point2d.clone().add(perpdir)] as const

        // determine which edges of the shape intersect the perpendicular line
        const intersections: Array<vec2> = []
        const intersect_idxs: Array<number> = []
        for (let i = 1; i < shapeVertices.length + 1; i++) {
            const A = shapeVertices[i - 1]
            const B = shapeVertices[i % shapeVertices.length]
            const intersection = getLineIntersection([A, B], dividing_line_2d)
            if (intersection !== null) {
                intersections.push(intersection)
                intersect_idxs.push(i-1)
            }
        }
        if (intersections.length < 2) {
            // dividingLine.visible = false;
            return
        }
        if (intersections.length > 2) {
            console.error("More than 2 intersections found")
        }
        
        // determine if camera is on +z or -z side. So that we can make the fold towards the camera
        const front_side = camera.position.dot(new vec3(0, 0, 1)) > 0

        // convert intersections to world space
        const local_p0 = new vec2(intersections[0].x, intersections[0].y)
        const local_p1 = new vec2(intersections[1].x, intersections[1].y)
        p0 = new vec3(local_p0.x, local_p0.y, front_side ? PAPER_THICKNESS/2 : -PAPER_THICKNESS/2)
        p1 = new vec3(local_p1.x, local_p1.y, front_side ? PAPER_THICKNESS/2 : -PAPER_THICKNESS/2)
        p0.applyMatrix4(controls.touchMesh.matrixWorld)
        p1.applyMatrix4(controls.touchMesh.matrixWorld)


        // Generate two shapes based on the intersections
        const [idx0, idx1] = intersect_idxs
        const shape1_verts = [local_p0, ...shapeVertices.slice(idx0+1, idx1+1), local_p1]
        const shape2_verts = [local_p1, ...shapeVertices.slice(idx1+1, shapeVertices.length), ...shapeVertices.slice(0, idx0+1), local_p0]
        const shape1 = new Shape(shape1_verts.map(v => [v.x, v.y]), paper_color, outline_color)
        const shape2 = new Shape(shape2_verts.map(v => [v.x, v.y]), paper_color, outline_color)
        const edge_shape = make_edge_shape(local_p0, local_p1, front_side ? 1 : -1, paper_color, outline_color);
        replace_split_shapes(shape1, shape2, edge_shape)
        shape1.group.applyMatrix4(controls.touchMesh.matrixWorld)
        shape2.group.applyMatrix4(controls.touchMesh.matrixWorld)
        shape1.group.visible = true
        shape2.group.visible = true



        // determine which shape contains the red sphere via a raycast
        const raycaster = new THREE.Raycaster()
        const screenRedPos = to_point.clone().project(camera)
        raycaster.setFromCamera(new vec2(screenRedPos.x, screenRedPos.y), camera)
        const intersects = raycaster.intersectObjects([shape1.prism, shape2.prism])
        const shape1_contains = intersects.length > 0 && intersects[0].object === shape1.prism
        const shape2_contains = intersects.length > 0 && intersects[0].object === shape2.prism

        const containing_shape = shape1_contains ? shape1 : shape2
        const non_containing_shape = shape1_contains ? shape2 : shape1

        // create a transform to reflect the non-containing shape across the dividing line
        const axis = new THREE.Vector3().subVectors(p0, p1).normalize();
        const angle = Math.PI; // 180 degrees in radians

        const quaternion = new THREE.Quaternion().setFromAxisAngle(axis, angle);
        const rotationMatrix = new THREE.Matrix4().makeRotationFromQuaternion(quaternion);
        const translationToOrigin = new THREE.Matrix4().makeTranslation(-p0.x, -p0.y, -p0.z);
        const translationBack = new THREE.Matrix4().makeTranslation(p0.x, p0.y, p0.z);
        
        const transformationMatrix = new THREE.Matrix4()
            .premultiply(translationToOrigin)
            .premultiply(rotationMatrix)
            .premultiply(translationBack);
        
        non_containing_shape.group.applyMatrix4(transformationMatrix)
        

        //debug
        show_debug_geometry(from_point, mid_point, to_point, p0, p1)
    }


    const apply_fold = () => {
        // delete the current intersected mesh
        const shape_idx = mesh_to_idx.get(controls.touchMesh)
        const intersect_group = shapes[shape_idx].group
        intersect_group.visible = false
        // // scene.remove(intersect_group)
        // intersect_mesh = null

        // this all is traash apparently
        // const shape0 = new Shape(split0.verts.map(v => [v.x, v.y]))
        // const shape1 = new Shape(split1.verts.map(v => [v.x, v.y]))
        // shape0.group.applyMatrix4(split0.group.matrixWorld)
        // shape1.group.applyMatrix4(split1.group.matrixWorld)
        // scene.add(shape0.group)
        // scene.add(shape1.group)
        // shapes.push(shape0)
        // shapes.push(shape1)
        // sync_shapes()
        // // replace_split_shapes(new Shape([[-1,1], [1,1], [1,-1], [-1,-1]]), new Shape([[-1,1], [1,1], [1,-1], [-1,-1]]))
        // split0.group.visible = false
        // split1.group.visible = false

        // console.log("applying fold", shape_idx)
    }


   




    window.addEventListener('mousemove', checkIntersect);
    window.addEventListener('mouseup', checkIntersect);
    window.addEventListener('mousedown', checkIntersect);
    window.addEventListener('touchstart', checkIntersect);
    window.addEventListener('touchmove', checkIntersect);
    window.addEventListener('touchend', checkIntersect);
    window.addEventListener('mouseup', update_closest_edge);
    window.addEventListener('mousemove', update_closest_edge);
    window.addEventListener('mousedown', update_closest_edge);
    window.addEventListener('touchend', update_closest_edge);
    window.addEventListener('touchmove', update_closest_edge);
    window.addEventListener('touchstart', update_closest_edge);
    window.addEventListener('mousedown', draw_dividing_line);
    window.addEventListener('mouseup', draw_dividing_line);
    window.addEventListener('mousemove', draw_dividing_line);
    window.addEventListener('touchstart', draw_dividing_line);
    window.addEventListener('touchend', draw_dividing_line);
    window.addEventListener('touchmove', draw_dividing_line);


    const update_scene = () => {
        controls.update();
        renderer.render(scene, camera);
    }

    const resetter = () => {
        //reset everything so that we can call the scene again from scratch
        window.removeEventListener('mousemove', checkIntersect);
        window.removeEventListener('mouseup', checkIntersect);
        window.removeEventListener('mousedown', checkIntersect);
        window.removeEventListener('touchstart', checkIntersect);
        window.removeEventListener('touchmove', checkIntersect);
        window.removeEventListener('touchend', checkIntersect);
        window.removeEventListener('mouseup', update_closest_edge);
        window.removeEventListener('mousemove', update_closest_edge);
        window.removeEventListener('touchend', update_closest_edge);
        window.removeEventListener('touchmove', update_closest_edge);
        window.removeEventListener('mousedown', draw_dividing_line);
        window.removeEventListener('mouseup', draw_dividing_line);
        window.removeEventListener('mousemove', draw_dividing_line);
        window.removeEventListener('touchstart', draw_dividing_line);
        window.removeEventListener('touchend', draw_dividing_line);
        window.removeEventListener('touchmove', draw_dividing_line);

        // remove all objects from the scene
        while(scene.children.length > 0){ 
            scene.remove(scene.children[0]); 
        }

        // empty out the shapes/mesh arrays
        shapes.length = 0
        meshes.length = 0
        mesh_to_idx.clear()
    }



    return { update_scene, camera, resetter }
}


const make_edge_shape = (p0: vec2, p1: vec2, zshiftsign: -1|1, paper_color: number, outline_color: number): Shape => {
    //construct the perpendicular direction to p0->p1
    const direction = new vec2().subVectors(p1, p0).normalize()
    const perpdir = new vec2(-direction.y, direction.x)
    const v0 = p0.clone().addScaledVector(perpdir, PAPER_THICKNESS/2)
    const v1 = p0.clone().addScaledVector(perpdir, -PAPER_THICKNESS/2)
    const v2 = p1.clone().addScaledVector(perpdir, -PAPER_THICKNESS/2)
    const v3 = p1.clone().addScaledVector(perpdir, PAPER_THICKNESS/2)
    const shape = new Shape([[v0.x, v0.y], [v1.x, v1.y], [v2.x, v2.y], [v3.x, v3.y]], paper_color, outline_color)

    //rotate the shape along p0->p1 by 90 degrees
    const axis = new THREE.Vector3(direction.x, direction.y, 0)
    const angle = Math.PI/2
    const quaternion = new THREE.Quaternion().setFromAxisAngle(axis, angle);
    const rotationMatrix = new THREE.Matrix4().makeRotationFromQuaternion(quaternion);
        const translationToOrigin = new THREE.Matrix4().makeTranslation(-p0.x, -p0.y, 0);
    const translationBack = new THREE.Matrix4().makeTranslation(p0.x, p0.y, 0);
    
    const transformationMatrix = new THREE.Matrix4()
        .premultiply(translationToOrigin)
        .premultiply(rotationMatrix)
        .premultiply(translationBack);
    
    shape.group.applyMatrix4(transformationMatrix)
    shape.group.position.z += PAPER_THICKNESS/2*zshiftsign



    return shape
}
