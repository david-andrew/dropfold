import * as THREE from 'three';
// Find the div with id 'GameView'
const gameView = document.getElementById('GameView') as HTMLDivElement;

type SceneFunctions = { 
    update_scene: (renderer:THREE.WebGLRenderer) => void, 
    camera: THREE.PerspectiveCamera,
}

const main = () => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    gameView.appendChild(renderer.domElement);

    const { update_scene, camera } = paper_folding_scene(); //rotating_cube_scene();
    const on_resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

    const animate = () => {
        requestAnimationFrame(animate);
        update_scene(renderer);
    }
    animate();

    // Adjust the scene when the window is resized
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        on_resize();
    });
}

const paper_folding_scene = (): SceneFunctions => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const geometry = new THREE.BoxGeometry(8.5, 11, 0.01);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const paper = new THREE.Mesh(geometry, material);

    scene.add(paper);

    camera.position.z = 10;

    const update_scene = (renderer:THREE.WebGLRenderer) => {
        //TODO: replace with click to orbit
        // paper.rotation.x += 0.01;
        // paper.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    return { update_scene, camera }
}



const rotating_cube_scene = (): SceneFunctions => {
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

    const update_scene = (renderer:THREE.WebGLRenderer) => {
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
