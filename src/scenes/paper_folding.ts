import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SceneFunctions } from '../main';
import { Vector2 as vec2, Vector3 as vec3 } from 'three';

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
    // geometry: THREE.ExtrudeGeometry
    prism: THREE.Mesh
    outline: THREE.LineSegments
    group: THREE.Group

    constructor(verts: Array<[number, number]>) {
        this.verts = verts.map(v => new THREE.Vector2(v[0], v[1]))
        const shape = new THREE.Shape();
        this.edges = []
        shape.moveTo(this.verts[0].x, this.verts[0].y);
        for (let i = 1; i < verts.length; i++) {
            shape.lineTo(this.verts[i].x, this.verts[i].y);
            this.edges.push({a: this.verts[i-1], b: this.verts[i]})
        }
        shape.lineTo(this.verts[0].x, this.verts[0].y); // Close the shape
        const extrudeSettings = {
            steps: 1,
            depth: 0.01,  // How far to extrude the shape
            bevelEnabled: false  // Disable bevel for a sharp edge
        };

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
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

    // Set up raycaster and mouse vector
    const raycaster = new THREE.Raycaster();
    const mouseman = new MouseManager()
    enum ClickMode { NONE, ORBIT, FOLD }
    let click_mode = ClickMode.NONE
    let intersect_point: vec3|null = null;
    let intersect_mesh: THREE.Mesh|null = null;



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
        if (click_mode !== ClickMode.FOLD) {
            const shape_idx = mesh_to_idx.get(intersect_mesh) ?? -1
            shapes.forEach((shape, i) => shape.setOutline(i === shape_idx))
        }
    }

    window.addEventListener('mousemove', checkIntersect);
    window.addEventListener('mouseup', checkIntersect);
    window.addEventListener('mousedown', checkIntersect);
    window.addEventListener('mouseup', _ => updateClickMode(false) );
    window.addEventListener('mousedown', _ => updateClickMode(true) );
    window.addEventListener('mouseup', update_outlines);
    window.addEventListener('mousedown', update_outlines);
    window.addEventListener('mousemove', update_outlines);


    const update_scene = () => {
        //TODO: replace with click to orbit
        controls.enableRotate = !sphere.visible;

        controls.update();
        renderer.render(scene, camera);
    }

    return { update_scene, camera }
}