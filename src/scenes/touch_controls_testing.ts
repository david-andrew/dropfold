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

    // Raycaster for detecting touch/click
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    // Create a small sphere to represent the click/touch location
    const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let interactionSphere: THREE.Mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(interactionSphere);
    interactionSphere.visible = false;

    let isInteracting = false;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        if ('touches' in event) {
            // Convert touch coordinates to normalized device coordinates
            pointer.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
        } else {
            // Convert mouse coordinates to normalized device coordinates
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        // Update the raycaster with the camera and pointer position
        raycaster.setFromCamera(pointer, camera);

        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObject(cube);

        if (intersects.length > 0) {
            // Disable orbit controls if the cube is touched/clicked
            controls.enabled = false;
            isInteracting = true;

            // Log the interaction position to the console
            console.log('Object interacted with at:', intersects[0].point);

            // Make the interaction sphere visible and position it at the interaction location
            interactionSphere.visible = true;
            interactionSphere.position.copy(intersects[0].point);
        }
    }

    const onPointerMove = (event: MouseEvent | TouchEvent) => {
        if (!isInteracting) return;

        if ('touches' in event) {
            // Convert touch coordinates to normalized device coordinates
            pointer.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
        } else {
            // Convert mouse coordinates to normalized device coordinates
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        // Update the raycaster with the camera and pointer position
        raycaster.setFromCamera(pointer, camera);

        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObject(cube);

        if (intersects.length > 0) {
            // Update the sphere position as the pointer moves
            interactionSphere.position.copy(intersects[0].point);
        }
    }

    const onPointerUp = () => {
        if (isInteracting) {
            // Re-enable orbit controls when the interaction ends
            controls.enabled = true;

            // Hide the sphere when the interaction ends
            interactionSphere.visible = false;
            isInteracting = false;
        }
    }

    // Add event listeners for both touch and mouse interaction
    window.addEventListener('mousedown', onPointerDown, false);
    window.addEventListener('mousemove', onPointerMove, false);
    window.addEventListener('mouseup', onPointerUp, false);

    window.addEventListener('touchstart', onPointerDown, false);
    window.addEventListener('touchmove', onPointerMove, false);
    window.addEventListener('touchend', onPointerUp, false);

    const update_scene = () => {
        controls.update();
        renderer.render(scene, camera);
    }

    const resetter = () => {
        window.removeEventListener('mousedown', onPointerDown);
        window.removeEventListener('mousemove', onPointerMove);
        window.removeEventListener('mouseup', onPointerUp);

        window.removeEventListener('touchstart', onPointerDown);
        window.removeEventListener('touchmove', onPointerMove);
        window.removeEventListener('touchend', onPointerUp);

        geometry.dispose();
        material.dispose();
        sphereGeometry.dispose();
        sphereMaterial.dispose();
    }

    return { update_scene, camera, resetter};
}