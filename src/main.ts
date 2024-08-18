import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Find the div with id 'GameView'
const gameView = document.getElementById('GameView') as HTMLDivElement;

type SceneFunctions = { 
    update_scene: () => void, 
    camera: THREE.PerspectiveCamera,
}

const main = () => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    gameView.appendChild(renderer.domElement);

    const { update_scene, camera } = paper_folding_scene(renderer); //rotating_cube_scene();
    const on_resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

    const animate = () => {
        requestAnimationFrame(animate);
        update_scene();
    }
    animate();

    // Adjust the scene when the window is resized
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        on_resize();
    });
}

const paper_folding_scene = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Paper setup
    const geometry = new THREE.BoxGeometry(8.5, 11, 0.01);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const paper = new THREE.Mesh(geometry, material);
    scene.add(paper);

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
        controls.enabled = !sphere.visible;
        controls.update();
        renderer.render(scene, camera);
    }

    return { update_scene, camera }
}



const rotating_cube_scene = (renderer:THREE.WebGLRenderer): SceneFunctions => {
    // Create a scene
    const scene = new THREE.Scene();

    // Set up a camera with a perspective view
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create a simple box geometry and a basic material and combine them into a mesh
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xf00055 });
    const cube = new THREE.Mesh(geometry, material);

    // Add the cube to the scene
    scene.add(cube);

    // Position the camera so that we can see the cube
    camera.position.z = 5;

    const update_scene = () => {
        // Rotate the cube for some simple animation
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Render the scene from the perspective of the camera
        renderer.render(scene, camera);
    }

    return { update_scene, camera }
}


// must be called last
main();
