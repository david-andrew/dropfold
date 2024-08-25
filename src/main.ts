import * as THREE from 'three';
// import { paper_folding_scene } from './scenes/paper_folding';
import {general_folding_scene} from './scenes/paper_folding';
import {rotating_cube_scene} from './scenes/rotating_cube';
import { test_touch_controls_scene } from './scenes/touch_controls_testing';

// Find the div with id 'GameView'
const gameView = document.getElementById('GameView') as HTMLDivElement;

export type SceneFunctions = { 
    update_scene: () => void, 
    camera: THREE.PerspectiveCamera,
    resetter: () => void
}

const main = (scene_fn: (renderer) => SceneFunctions) => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    gameView.appendChild(renderer.domElement);

    const { update_scene, camera, resetter } = scene_fn(renderer); //rotating_cube_scene();
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

    const reset = () => {
        // remove the renderer from the DOM
        gameView.removeChild(renderer.domElement);
        // remove all event listeners
        window.removeEventListener('resize', on_resize);
        document.removeEventListener('keydown', resetter);

        resetter();

    }
    return reset;
}



const scene_selector_main = () => {
    // listen for buttonpresses and reset everything if a button is pressed
    // if user presses 1 on keyboard, then run rotating_cube_scene, if 2, then run paper_folding_scene, etc.
    const scene_button_map = {
        '0': rotating_cube_scene,
        '1': general_folding_scene([[-8.5/2, 11/2], [8.5/2, 11/2], [8.5/2, -11/2], [-8.5/2, -11/2]]),
        '2': general_folding_scene([[0, 10], [9.511, 3.09], [5.878, -8.09], [-5.878, -8.09], [-9.511, 3.09]]),
        '3': general_folding_scene([[10, 0], [5, 8.66], [-5, 8.66], [-10, 0], [-5, -8.66], [5, -8.66]]),
        '4': general_folding_scene([[0, 3], [-8.66, -5], [4.22, -5]]),
        '5': general_folding_scene([[0, 10], [10, 5], [5, -10], [0,-10], [-10, 0], [-5, 10]]),
        '6': test_touch_controls_scene,
        


    }

    // default call scene
    let resetter = main(scene_button_map['6']);

    // event listener for keypresses
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key in scene_button_map) {
            resetter();
            resetter = main(scene_button_map[key]);
        }
    });
}

scene_selector_main();

// must be called last
// main();
