import * as THREE from 'three';
import { SceneFunctions } from '../main';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export const test_touch_controls_scene = (renderer:THREE.WebGLRenderer): SceneFunctions => {
    // Create a scene
    const scene = new THREE.Scene();

    // Set up a camera with a perspective view and position so that we can see the cube
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Add orbit controls to the camera
    const controls = new OrbitControls(camera, renderer.domElement);

    // Create a simple box geometry and a basic material and combine them into a mesh
    const geometry = new THREE.BoxGeometry(2,2,2);
    const material = new THREE.MeshBasicMaterial({ color: 0xf00055 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);


    // Raycaster for detecting touch
    const raycaster = new THREE.Raycaster();
    const touch = new THREE.Vector2();

    // Create a small sphere to represent the touch location
    const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let touchSphere: THREE.Mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(touchSphere);
    touchSphere.visible = false;


    const onTouchStart = (event) => {
        // Convert touch coordinates to normalized device coordinates
        touch.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        touch.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;

        // Update the raycaster with the camera and touch position
        raycaster.setFromCamera(touch, camera);

        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObject(cube);

        if (intersects.length > 0) {
            // Disable orbit controls if the cube is touched
            controls.enabled = false;

            // Log the touch position to the console
            console.log('Cube touched at:', intersects[0].point);

            // Make the touch sphere visible and position at the touch location
            touchSphere.visible = true;
            touchSphere.position.copy(intersects[0].point);
        }
    }

    const onTouchMove = (event) => {
        // Convert touch coordinates to normalized device coordinates
        touch.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        touch.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;

        // Update the raycaster with the camera and touch position
        raycaster.setFromCamera(touch, camera);

        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObject(cube);

        if (intersects.length > 0) {
            // Update the sphere position as the touch moves
            touchSphere.position.copy(intersects[0].point);
        }
    }

    const onTouchEnd = () => {
        // Re-enable orbit controls when touch ends
        controls.enabled = true;

        touchSphere.visible = false;
    }

    // Add event listeners for touch interaction
    window.addEventListener('touchstart', onTouchStart, false);
    window.addEventListener('touchmove', onTouchMove, false);
    window.addEventListener('touchend', onTouchEnd, false);


    const update_scene = () => {
        controls.update();
        renderer.render(scene, camera);
    }

    return { update_scene, camera, resetter: () => {} };
}
