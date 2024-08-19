import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SceneFunctions } from '../main';
import { Vector2 as vec2, Vector3 as vec3 } from 'three';
import { clamp } from 'three/src/math/MathUtils.js';

// type vec3 = THREE.Vector3
// type vec2 = THREE.Vector2
type vert = vec2
type edge = {
    a: vert
    b: vert
}

class Shape {
    // TODO: maybe have tf: THREE.Matrix4
    verts: Array<vert>
    edges: Array<edge>
    shape: THREE.Shape
    prism: THREE.Mesh
    outline: THREE.LineSegments
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
            depth: 0.01,  // How far to extrude the shape
            bevelEnabled: false  // Disable bevel for a sharp edge
        };

        const geometry = new THREE.ExtrudeGeometry(this.shape, extrudeSettings);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        this.prism = new THREE.Mesh(geometry, material);

        const edgesGeometry = new THREE.EdgesGeometry(geometry);
        const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 1 }); // Faint blue outline
        this.outline = new THREE.LineSegments(edgesGeometry, edgesMaterial);
        this.outline.visible = false;

        this.group = new THREE.Group()
        this.group.add(this.prism)
        this.group.add(this.outline)
    }

    toggleOutline() {
        this.outline.visible = !this.outline.visible;
    }
    setOutline(visible: boolean) {
        this.outline.visible = visible
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




//     // scene.add(prism);
//     return {prism, outline, toggleOutline}
// }

export const paper_folding_scene = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Paper setup
    const geometry = new THREE.BoxGeometry(8.5, 11, 0.01);
    geometry.translate(0, 0, -0.005); // Move the paper slightly back so it doesn't overlap with the shape
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const paper = new THREE.Mesh(geometry, material);
    scene.add(paper);

    for (let i = 0; i < 10; i++) {
        const shape = new Shape([[-1,1], [1,1], [1,-1]])
        shape.group.position.z = i
        shapes.push(shape)
    }
    shapes.forEach(shape => scene.add(shape.group))
    sync_shapes()
    sync_mesh_map()
    

    // Red sphere setup
    const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.visible = false; // Initially hide the sphere
    scene.add(sphere);


    // blue sphere setup
    const blueSphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const blueSphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const blueSphere = new THREE.Mesh(blueSphereGeometry, blueSphereMaterial);
    blueSphere.visible = false; // Initially hide the sphere
    scene.add(blueSphere);


    // Set up raycaster and mouse vector
    const raycaster = new THREE.Raycaster();
    const mouseman = new MouseManager()
    enum ClickMode { NONE, ORBIT, FOLD }
    let click_mode = ClickMode.NONE             // what the mouse is currently doing
    let intersect_point: vec3|null = null;      //the point where the ray intersects the closest mesh
    let intersect_mesh: THREE.Mesh|null = null; // the mesh that the ray intersects



    // set up click to orbit    
    camera.position.z = 15;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();




    // Mouse move event
    const checkIntersect = (event: MouseEvent) => {
        // Update the raycaster with the camera and mouse position
        raycaster.setFromCamera(mouseman.pos, camera);

        // Check for intersections with the paper mesh
        const intersects = raycaster.intersectObjects(meshes)

        const intersected = intersects.length > 0;
        if (intersected) {
            intersect_point = intersects[0].point
            intersect_mesh = intersects[0].object as THREE.Mesh
            sphere.position.copy(intersect_point);
        } else {
            intersect_point = null;
            intersect_mesh = null;
        }
        if (!mouseman.pressed) {
            sphere.visible = intersected;
            blueSphere.visible = intersected;
        }
    }
    const updateClickMode = (pressed:boolean) => {
        if (!pressed) {
            click_mode = ClickMode.NONE
            paper.material.color.set(0xffffff)
            return;
        }
        if (intersect_point !== null) {
            click_mode = ClickMode.FOLD
            paper.material.color.set(0x0000ff)
            return;
        }
        click_mode = ClickMode.ORBIT
        paper.material.color.set(0x00ff00)
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
        console.log('break')
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

    window.addEventListener('mousemove', checkIntersect);
    window.addEventListener('mouseup', checkIntersect);
    window.addEventListener('mousedown', checkIntersect);
    window.addEventListener('mouseup', _ => updateClickMode(false) );
    window.addEventListener('mousedown', _ => updateClickMode(true) );
    window.addEventListener('mouseup', update_outlines);
    window.addEventListener('mousedown', update_outlines);
    window.addEventListener('mousemove', update_outlines);
    // window.addEventListener('mouseup', update_closest_edge);
    // window.addEventListener('mousedown', update_closest_edge);
    window.addEventListener('mousemove', update_closest_edge);


    const update_scene = () => {
        //TODO: replace with click to orbit
        controls.enableRotate = !sphere.visible;

        controls.update();
        renderer.render(scene, camera);
    }

    return { update_scene, camera }
}