import * as THREE from 'three';
// import {general_folding_scene} from './scenes/paper_folding';
// import { general_folding_scene } from './scenes/paper_folding_2';
import {general_folding_scene} from './scenes/paper_folding_3';
import {rotating_cube_scene} from './scenes/rotating_cube';
import { test_touch_controls_scene } from './scenes/touch_controls_testing';
import { clipping_plane_demo } from './scenes/clipping_plane_demo';
import { business_card } from './scenes/business_card';
import { build_thing_scene } from './scenes/build_thing';

// Find the div with id 'GameView'
const gameView = document.getElementById('GameView') as HTMLDivElement;

export type SceneFunctions = { 
    update_scene: () => void, 
    camera: THREE.PerspectiveCamera,
    resetter: () => void
}

const main = (scene_fn: (renderer) => SceneFunctions) => {
    const renderer = new THREE.WebGLRenderer();
    renderer.localClippingEnabled = true;
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


type SceneFactory = (renderer: THREE.WebGLRenderer) => SceneFunctions;

const scene_selector_main = () => {
    // listen for buttonpresses and reset everything if a button is pressed
    // if user presses 1 on keyboard, then run rotating_cube_scene, if 2, then run paper_folding_scene, etc.
    const scenes: SceneFactory[] = [
        rotating_cube_scene,
        build_thing_scene,   
        general_folding_scene([[-8.5/2, 11/2], [8.5/2, 11/2], [8.5/2, -11/2], [-8.5/2, -11/2]]),
        general_folding_scene([[0, 10], [9.511, 3.09], [5.878, -8.09], [-5.878, -8.09], [-9.511, 3.09]]),
        general_folding_scene([[10, 0], [5, 8.66], [-5, 8.66], [-10, 0], [-5, -8.66], [5, -8.66]]),
        general_folding_scene([[0, 3], [-8.66, -5], [4.22, -5]]),
        general_folding_scene([[0, 10], [10, 5], [5, -10], [0,-10], [-10, 0], [-5, 10]]),
        test_touch_controls_scene,
        clipping_plane_demo,
        business_card, 
    ]
    console.assert(scenes.length <= 10, "Too many scenes included. Extra scenes will not be accessible via keyboard shortcuts.");
    const scene_button_map: Map<string, SceneFactory> = new Map<string, SceneFactory>();
    scenes.forEach((scene, i) => {
        scene_button_map.set((i).toString(), scene);
    });

    // default call scene
    let resetter = main(scene_button_map.get('1'));

    // event listener for keypresses
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (scene_button_map.has(key)) {
            resetter();
            resetter = main(scene_button_map.get(key));
        }
    });
}

scene_selector_main();

// must be called last
// main();
