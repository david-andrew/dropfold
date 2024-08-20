import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SceneFunctions } from '../main';
import { Vector2 as vec2, Vector3 as vec3 } from 'three';
import { clamp } from 'three/src/math/MathUtils.js';
import { cross2d } from '../utils';


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

class Shape {
    // TODO: maybe have tf: THREE.Matrix4
    verts: Array<vert>
    edges: Array<edge>
    shape: THREE.Shape
    prism: THREE.Mesh
    outline: THREE.LineSegments
    outline_material: THREE.LineBasicMaterial
    group: THREE.Group

    constructor(verts: Array<[number, number]>) {
        this.verts = verts.map(v => new THREE.Vector2(v[0], v[1]))
        this.shape = new THREE.Shape();
        this.edges = []
        this.shape.moveTo(this.verts[0].x, this.verts[0].y);
        for (let i = 1; i < verts.length; i++) {
            this.shape.lineTo(this.verts[i].x, this.verts[i].y);
            this.edges.push({a: this.verts[i-1], b: this.verts[i]})
        }
        this.shape.lineTo(this.verts[0].x, this.verts[0].y); // Close the shape
        const extrudeSettings = {
            steps: 1,
            depth: PAPER_THICKNESS, //0.01,  // How far to extrude the shape
            bevelEnabled: false  // Disable bevel for a sharp edge
        };

        const geometry = new THREE.ExtrudeGeometry(this.shape, extrudeSettings);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        this.prism = new THREE.Mesh(geometry, material);

        const edgesGeometry = new THREE.EdgesGeometry(geometry);
        this.outline_material = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 1 }); // Faint blue outline
        this.outline = new THREE.LineSegments(edgesGeometry, this.outline_material);
        // this.outline.visible = false;

        this.group = new THREE.Group()
        this.group.add(this.prism)
        this.group.add(this.outline)
    }


    setOutline(visible: boolean) {
        this.outline_material.color.set(visible ? 0xff0000 : 0x000000)
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


class MouseManager {
    pos: vec2
    pressed: boolean
    constructor() {
        this.pos = new THREE.Vector2()
        this.pressed = false
        window.addEventListener('mousemove', this.onMouseMove)
        window.addEventListener('mousedown', this.onMousePressed)
        window.addEventListener('mouseup', this.onMouseReleased)
    }
    onMousePressed: (event: MouseEvent) => void = (event: MouseEvent) => {
        this.pressed = true
    }
    onMouseReleased: (event: MouseEvent) => void = (event: MouseEvent) => {
        this.pressed = false
    }
    onMouseMove: (event: MouseEvent) => void = (event: MouseEvent) => {
        this.pos.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.pos.y = -(event.clientY / window.innerHeight) * 2 + 1;
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


export const paper_folding_scene = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // sky blue background
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create an AxesHelper
    // const axisHelper = make_axis_helper()
    // scene.add(axisHelper);

    // Paper setup
    // const geometry = new THREE.BoxGeometry(8.5, 11, 0.01);
    // geometry.translate(0, 0, -0.005); // Move the paper slightly back so it doesn't overlap with the shape
    // const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    // const paper = new THREE.Mesh(geometry, material);
    // scene.add(paper);


    //////// GENERATE PAPER IN SCENE ////////
    shapes.push(new Shape([[-8.5/2, 11/2], [8.5/2, 11/2], [8.5/2, -11/2], [-8.5/2, -11/2]]))
    shapes[0].group.position.z = -0.1
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
    

    // Red sphere setup
    const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const redSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    redSphere.visible = false; // Initially hide the sphere
    // scene.add(redSphere);


    // blue sphere setup
    const blueSphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const blueSphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const blueSphere = new THREE.Mesh(blueSphereGeometry, blueSphereMaterial);
    blueSphere.visible = false; // Initially hide the sphere
    // scene.add(blueSphere);



    // green sphere setup
    const greenSphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const greenSphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const greenSphere = new THREE.Mesh(greenSphereGeometry, greenSphereMaterial);
    greenSphere.visible = false; // Initially hide the sphere
    // scene.add(greenSphere);


    // dividing line setup
    const lineGeometry = new LineGeometry();
    lineGeometry.setPositions([-10, -10, 0, 10, 10, 0]);
    const lineMaterial = new LineMaterial({ color: 0xff00ff, linewidth: 10, dashed: false });
    lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
    const dividingLine = new Line2(lineGeometry, lineMaterial);
    dividingLine.visible = false;
    // scene.add(dividingLine);


    // shape preview setup
    let split0 = new Shape([[-1,1], [1,1], [1,-1], [-1,-1]])
    let split1 = new Shape([[-1,1], [1,1], [1,-1], [-1,-1]])
    scene.add(split0.group)
    scene.add(split1.group)
    split0.group.visible = false
    split1.group.visible = false
    const replace_split_shapes = (shape0: Shape, shape1: Shape) => {
        split0.group.visible = false
        split1.group.visible = false
        scene.remove(split0.group)
        scene.remove(split1.group)
        split0 = shape0
        split1 = shape1
        scene.add(split0.group)
        scene.add(split1.group)
    }

   


    // Set up raycaster and mouse vector
    const raycaster = new THREE.Raycaster();
    const mouseman = new MouseManager()
    enum ClickMode { NONE, ORBIT, FOLD }
    let click_mode = ClickMode.NONE             // what the mouse is currently doing
    let intersect_point: vec3|null = null;      //the point where the ray intersects the closest mesh
    let intersect_mesh: THREE.Mesh|null = null; // the mesh that the ray intersects
    let would_sphere_be_visible = false;        // whether the sphere would be visible if the mouse was not pressed

    // set up click to orbit    
    camera.position.z = 15;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();


    // Mouse move event
    const checkIntersect = (event: MouseEvent) => {
        if (intersect_mesh !== null) intersect_mesh.visible = true;
        // if (click_mode === ClickMode.FOLD) return

        // Update the raycaster with the camera and mouse position
        raycaster.setFromCamera(mouseman.pos, camera);

        // Check for intersections with the paper mesh
        const intersects = raycaster.intersectObjects(click_mode === ClickMode.FOLD ? [intersect_mesh] : meshes)

        const intersected = intersects.length > 0;
        if (intersected) {
            intersect_point = intersects[0].point
            intersect_mesh = intersects[0].object as THREE.Mesh
            redSphere.position.copy(intersect_point);
        } else {
            if (click_mode !== ClickMode.FOLD) {
                intersect_point = null;
                intersect_mesh = null;
            }
        }
        if (!mouseman.pressed) {
            // sphere.visible = intersected;
            would_sphere_be_visible = intersected;
            blueSphere.visible = intersected;
        }
    }
    const updateClickMode = (pressed:boolean) => {
        if (!pressed) {
            click_mode = ClickMode.NONE
            // paper.material.color.set(0xffffff)
            redSphere.visible = false;
            dividingLine.visible = false;
            return;
        }
        if (intersect_point !== null) {
            click_mode = ClickMode.FOLD
            // paper.material.color.set(0x0000ff)
            redSphere.visible = true;
            draw_dividing_line()
            return;
        }
        click_mode = ClickMode.ORBIT
        redSphere.visible = false;
        dividingLine.visible = false;
        // paper.material.color.set(0x00ff00)
    }
    const update_outlines = () => {
        if (click_mode === ClickMode.FOLD) return
        const shape_idx = mesh_to_idx.get(intersect_mesh) ?? -1
        shapes.forEach((shape, i) => shape.setOutline(i === shape_idx))
        
    }
    const update_closest_edge = () => {
        if (click_mode === ClickMode.FOLD || intersect_mesh === null || intersect_point === null) return
        const shape_idx = mesh_to_idx.get(intersect_mesh)
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
        const worldIntersect = intersect_point //intersect_point.clone().applyMatrix4(shape.prism.matrixWorld)
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
        blueSphere.position.copy(bestPoint)
    }
    const draw_dividing_line = () => {
        greenSphere.visible = false;
        if (intersect_point === null || intersect_mesh === null || !blueSphere.visible || !redSphere.visible) return
        dividingLine.visible = true;
        intersect_mesh.visible = false; //TODO where do we set this visible again
        // determine the point on the dividing plane:
        const worldMidpoint = redSphere.position.clone().add(blueSphere.position).divideScalar(2)

        /// DEBUG draw the green sphere here
        greenSphere.position.copy(worldMidpoint)
        greenSphere.visible = true;

        // direction from drag point to edge
        const worldDirection = blueSphere.position.clone().sub(redSphere.position).normalize()
        
        //for each edge on the intersected mesh, determine the point of intersection (if any) with the dividing plane
        const shape_idx = mesh_to_idx.get(intersect_mesh)
        const shape = shapes[shape_idx]
        const shapeVertices = shape.shape.getPoints(); // Get the original 2D points from the shape
        
        // convert the direction to 2D by projecting the line into the mesh's frame
        const inv_tf = intersect_mesh.matrixWorld.clone().invert()
        const localMidpoint = worldMidpoint.clone().applyMatrix4(inv_tf)
        const localBluePos = blueSphere.position.clone().applyMatrix4(inv_tf)
        const localRedPos = redSphere.position.clone().applyMatrix4(inv_tf)

        const localDirection = localBluePos.clone().sub(localRedPos).normalize()
        const point2d = new vec2(localMidpoint.x, localMidpoint.y)
        const perpdir = new vec2(-localDirection.y, localDirection.x)
        const dividing_line_2d = {C: point2d, D: point2d.clone().add(perpdir)}

        // determine which edges of the shape intersect the perpendicular line
        const intersections: Array<vec2> = []
        const intersect_idxs: Array<number> = []
        for (let i = 1; i < shapeVertices.length + 1; i++) {
            const A = shapeVertices[i - 1]
            const B = shapeVertices[i % shapeVertices.length]
            const intersection = getLineIntersection({A, B}, dividing_line_2d)
            if (intersection !== null) {
                intersections.push(intersection)
                intersect_idxs.push(i-1)
            }
        }
        if (intersections.length < 2) {
            dividingLine.visible = false;
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
        const p0 = new vec3(local_p0.x, local_p0.y, front_side ? PAPER_THICKNESS : 0)
        const p1 = new vec3(local_p1.x, local_p1.y, front_side ? PAPER_THICKNESS : 0)
        p0.applyMatrix4(intersect_mesh.matrixWorld)
        p1.applyMatrix4(intersect_mesh.matrixWorld)


        // Generate two shapes based on the intersections
        const [idx0, idx1] = intersect_idxs
        const shape1_verts = [local_p0, ...shapeVertices.slice(idx0+1, idx1+1), local_p1]
        const shape2_verts = [local_p1, ...shapeVertices.slice(idx1+1, shapeVertices.length), ...shapeVertices.slice(0, idx0+1), local_p0]        
        const shape1 = new Shape(shape1_verts.map(v => [v.x, v.y]))
        const shape2 = new Shape(shape2_verts.map(v => [v.x, v.y]))
        replace_split_shapes(shape1, shape2)
        shape1.group.applyMatrix4(intersect_mesh.matrixWorld)
        shape2.group.applyMatrix4(intersect_mesh.matrixWorld)
        shape1.group.visible = true
        shape2.group.visible = true



        // determine which shape contains the red sphere via a raycast
        const raycaster = new THREE.Raycaster()
        const screenRedPos = redSphere.position.clone().project(camera)
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
        // dividingLine.geometry.setPositions([point.x, point.y, point.z, point.x + direction.x, point.y + direction.y, point.z + direction.z])
        dividingLine.geometry.setPositions([p0.x, p0.y, p0.z, p1.x, p1.y, p1.z])
        dividingLine.visible = true;
        // const direction2d = new vec2(direction.x, direction.y)

    }

    window.addEventListener('mouseup', _ => updateClickMode(false) );
    window.addEventListener('mousedown', _ => updateClickMode(true) );
    window.addEventListener('mousemove', checkIntersect);
    window.addEventListener('mouseup', checkIntersect);
    window.addEventListener('mousedown', checkIntersect);
    window.addEventListener('mouseup', update_outlines);
    window.addEventListener('mousedown', update_outlines);
    window.addEventListener('mousemove', update_outlines);
    window.addEventListener('mouseup', update_closest_edge);
    window.addEventListener('mousemove', update_closest_edge);
    window.addEventListener('mousedown', draw_dividing_line);
    window.addEventListener('mouseup', draw_dividing_line);
    window.addEventListener('mousemove', draw_dividing_line);


    const update_scene = () => {
        //TODO: replace with click to orbit
        controls.enableRotate = !would_sphere_be_visible;

        controls.update();
        renderer.render(scene, camera);
    }

    return { update_scene, camera }
}




const getLineIntersection = (segment: {A: vec2, B: vec2}, line: {C: vec2, D: vec2}) => {
    const {A, B} = segment
    const {C, D} = line

    // Calculate the direction vectors
    const AB = new THREE.Vector2().subVectors(B, A);
    const CD = new THREE.Vector2().subVectors(D, C);

    // Calculate the denominator
    const denominator = AB.x * CD.y - AB.y * CD.x;

    // Lines are parallel if denominator is 0
    if (denominator === 0) {
        return null; // No intersection
    }

    // Calculate t and s
    const AC = new THREE.Vector2().subVectors(C, A);
    const t = (AC.x * CD.y - AC.y * CD.x) / denominator;
    // const s = (AC.x * AB.y - AC.y * AB.x) / denominator; //don't use since CD is infinite in length

    // Check if the intersection lies within the line segment
    if (t >= 0 && t <= 1) {
        // Calculate the intersection point
        const intersection = A.clone().add(AB.multiplyScalar(t));
        return intersection;
    }

    return null; // No intersection within the segment
}