import { SceneFunctions } from '../main';
import { OrbitalPointer } from "../controls";
import * as THREE from 'three';


export const general_folding_scene = (seed_shape: Array<[number, number]>) => (renderer: THREE.WebGLRenderer): SceneFunctions => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    
    
    // debug create a cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0xf00055 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const pointer = new OrbitalPointer({ camera, scene, domElement: renderer.domElement, getInteractables: () => [cube] });
    
    const update_scene = () => {
        renderer.render(scene, camera);
    }
    const resetter = () => {}

    return {update_scene, camera, resetter};
}