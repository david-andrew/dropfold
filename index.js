import * as THREE from "./three.module.min.js";
const main = () => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const { update_scene, on_resize } = rotating_cube_scene();
    const animate = () => {
        requestAnimationFrame(animate);
        update_scene(renderer);
    };
    animate();
    // Adjust the scene when the window is resized
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        on_resize();
    });
};
const rotating_cube_scene = () => {
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
    const update_scene = (renderer) => {
        // Rotate the cube for some simple animation
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        // Render the scene from the perspective of the camera
        renderer.render(scene, camera);
    };
    const on_resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    };
    return { update_scene, on_resize };
};
// must be called last
main();
