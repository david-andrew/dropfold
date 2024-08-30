import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { SceneFunctions } from '../main';

export const clipping_plane_demo = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    // Create a scene
    const scene = new THREE.Scene();

    // Set up a camera with a perspective view
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Add orbit controls to the camera
    const controls = new OrbitControls(camera, renderer.domElement);

    // Create a globally fixed clipping plane
    const globalClippingPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Clipping plane along the Y-axis in world space

    // Shader material to handle the clipping plane and solid color for the clipped area
    const material = new THREE.ShaderMaterial({
        uniforms: {
            clippingPlanes: { value: [globalClippingPlane] },
            color: { value: new THREE.Color(0x00ff00) }, // Green for the clipping plane surface
            cubeColor: { value: new THREE.Color(0xf00055) } // Red for the original cube faces
        },
        vertexShader: `
            varying vec3 vNormal;
            varying vec3 vPosition;
            void main() {
                vNormal = normal;
                vPosition = (modelMatrix * vec4(position, 1.0)).xyz; // Transform position to world space
                gl_Position = projectionMatrix * viewMatrix * vec4(vPosition, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 color;
            uniform vec3 cubeColor;
            varying vec3 vNormal;
            varying vec3 vPosition;
            uniform vec4 clippingPlanes[1];

            void main() {
                float planeDist = dot(clippingPlanes[0].xyz, vPosition) + clippingPlanes[0].w;
                if (planeDist > 0.0) {
                    discard;  // Discard the fragments above the clipping plane
                } else {
                    gl_FragColor = vec4(color, 1.0);  // Color the clipped surface
                }
            }
        `,
        side: THREE.DoubleSide,
        clipping: true,
        clippingPlanes: [globalClippingPlane],
    });

    // Create a simple box geometry and apply the shader material
    const geometry = new THREE.BoxGeometry();
    const cube = new THREE.Mesh(geometry, material);

    // Add the cube to the scene
    scene.add(cube);

    // Position the camera so that we can see the cube
    camera.position.z = 5;

    // Enable the clipping planes in the renderer
    renderer.clippingPlanes = [globalClippingPlane];
    renderer.localClippingEnabled = true;

    const update_scene = () => {
        // Rotate the cube for some simple animation
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        // Render the scene from the perspective of the camera
        renderer.render(scene, camera);
    }

    return { update_scene, camera, resetter: () => {} };
}
