import * as THREE from 'three';
import { paper_folding_scene } from './scenes/paper_folding';

// Find the div with id 'GameView'
const gameView = document.getElementById('GameView') as HTMLDivElement;

export type SceneFunctions = { 
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






// must be called last
main();
