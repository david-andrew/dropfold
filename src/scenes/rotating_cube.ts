import * as THREE from 'three';
import { SceneFunctions } from '../main';

export const rotating_cube_scene = (renderer:THREE.WebGLRenderer): SceneFunctions => {
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