import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SceneFunctions } from '../main';


type vec3 = THREE.Vector3
type vert = vec3
type edge = {
    a: vert
    b: vert
}

type Polygon = {
    verts: Array<vert>
    edges: Array<edge>
}


const test_shape = () => {
    // Step 1: Define the 2D Shape (polygon)
    const shape = new THREE.Shape();

    // Start from a point
    shape.moveTo(-1, -1);

    // Define the rest of the polygon
    shape.lineTo(1, -1);
    shape.lineTo(1, 1);
    shape.lineTo(-1, 1);
    shape.lineTo(-1, -1); // Close the shape

    // Step 2: Extrude the Shape into the third dimension
    const extrudeSettings = {
        steps: 1,
        depth: 0.01,  // How far to extrude the shape
        bevelEnabled: false  // Disable bevel for a sharp edge
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    // Step 3: Create a Mesh and add it to the scene
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const prism = new THREE.Mesh(geometry, material);


    // Step 3: Create the Outline
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 1 }); // Faint blue outline
    const outline = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    // scene.add(outline);

    // Step 4: Toggle the Outline On/Off
    let outlineVisible = true;
    function toggleOutline() {
        outlineVisible = !outlineVisible;
        outline.visible = outlineVisible;
    }

    // // Example of toggling the outline on and off
    // document.addEventListener('keydown', (event) => {
    //     if (event.key === 'o') {  // Press 'o' to toggle outline
    //         toggleOutline();
    //     }
    // });




    // scene.add(prism);
    return {prism, outline, toggleOutline}
}

export const paper_folding_scene = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Paper setup
    const geometry = new THREE.BoxGeometry(8.5, 11, 0.01);
    geometry.translate(0, 0, -0.005); // Move the paper slightly back so it doesn't overlap with the shape
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const paper = new THREE.Mesh(geometry, material);
    scene.add(paper);

    const {prism, outline, toggleOutline} = test_shape()
    scene.add(prism)
    scene.add(outline)

    // Red sphere setup
    const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.visible = false; // Initially hide the sphere
    scene.add(sphere);

    // Set up raycaster and mouse vector
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();



    // set up click to orbit    
    camera.position.z = 15;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();


    type MouseState = {
        x: number,
        y: number,
        pressed: boolean,
    }
    let mouseState = { x: 0, y: 0, pressed: false }
    // mouse pressed event
    const onMousePressed = (event: MouseEvent) => {
        mouseState.pressed = true;
    }

    const onMouseReleased = (event: MouseEvent) => {
        mouseState.pressed = false;
    }

    // Mouse move event
    const onMouseMove = (event: MouseEvent) => {
      // Calculate mouse position in normalized device coordinates (-1 to +1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update the raycaster with the camera and mouse position
      raycaster.setFromCamera(mouse, camera);

      // Check for intersections with the paper mesh
      const intersects = raycaster.intersectObject(paper);

      if (intersects.length > 0) {
          const intersect = intersects[0];
          sphere.position.copy(intersect.point);
          sphere.visible = true; // Show the sphere when over the paper
      } else {
          sphere.visible = false; // Hide the sphere when not over the paper
      }
    }

    // Add mouse event listener
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMousePressed);
    window.addEventListener('mouseup', onMouseReleased);





    const update_scene = () => {
        //TODO: replace with click to orbit
        controls.enableRotate = !sphere.visible;

        controls.update();
        renderer.render(scene, camera);
    }

    return { update_scene, camera }
}