import { SceneFunctions } from '../main';
import { OrbitalPointer } from "../controls";
import * as THREE from 'three';


export const general_folding_scene = (seed_shape: Array<[number, number]>) => (renderer: THREE.WebGLRenderer): SceneFunctions => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const shape = new THREE.Shape(seed_shape.map(([x, y]) => new THREE.Vector2(x/5, y/5)));
    const geometry = new THREE.ExtrudeGeometry(shape, { steps: 1, depth: 1, bevelEnabled: false });
    const material = new THREE.MeshBasicMaterial({ color: 0xf00055 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    console.log(geometry);
    
    // // debug create a cube
    // const geometry = new THREE.BoxGeometry(2, 2, 2);
    // const material = new THREE.MeshBasicMaterial({ color: 0xf00055 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // add a second cube
    const geometry2 = new THREE.BoxGeometry(1, 1, 1);
    const material2 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const cube2 = new THREE.Mesh(geometry2, material2);
    scene.add(cube2);
    cube2.position.x = 2;

    const pointer = new OrbitalPointer({ camera, scene, domElement: renderer.domElement, getInteractables: () => [mesh, cube2] });
    
    const update_scene = () => {
        pointer.update();
        renderer.render(scene, camera);
    }
    const resetter = () => {}

    return {update_scene, camera, resetter};
}