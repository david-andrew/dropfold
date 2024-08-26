import * as THREE from 'three';
import { SceneFunctions } from '../main';
import { OrbitalPointer } from '../controls';

export const test_touch_controls_scene = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    // Create a scene
    const scene = new THREE.Scene();

    // Set up a camera with a perspective view and position so that we can see the cube
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a simple box geometry and a basic material and combine them into a mesh
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0xf00055 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add orbit controls to the camera
    const pointer = new OrbitalPointer({ camera, scene, domElement: renderer.domElement, getInteractables: () => [cube] });

    const update_scene = () => {
        pointer.update();
        renderer.render(scene, camera);
    };

    const resetter = () => {
        pointer.dispose();
        geometry.dispose();
        material.dispose();
    };

    return { update_scene, camera, resetter };
};
