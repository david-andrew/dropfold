import * as THREE from 'three';
import { SceneFunctions } from '../main';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const passthrough_vertex_shader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

type MaterialProps = {
    side?: THREE.Side;
};

type HarlequinCirclesProps = {
    foreground?: THREE.ColorRepresentation;
    background?: THREE.ColorRepresentation;
} & MaterialProps;
const harlequin_circles = ({
    foreground = 0xff0000,
    background = 0x000000,
    side
}: HarlequinCirclesProps = {}): THREE.ShaderMaterial => {
    return new THREE.ShaderMaterial({
        side,
        uniforms: {
            radius: { value: 0.5 }, // Circle radius
            spacing: { value: 5.0 }, // Distance between circles
            circleColor: { value: new THREE.Color(foreground) }, // Red circles
            backgroundColor: { value: new THREE.Color(background) } // Black background
        },
        vertexShader: passthrough_vertex_shader,
        fragmentShader: `
            varying vec2 vUv;

            uniform float radius;
            uniform float spacing;
            uniform vec3 circleColor;
            uniform vec3 backgroundColor;

            float drawCircle(vec2 uv, vec2 position, float radius) {
                float dist = distance(uv, position);
                return 1.0 - smoothstep(radius - 0.01, radius + 0.01, dist);
            }

            void main() {
                vec2 uv = vUv;// * spacing;
                vec2 gridPos = fract(uv);
                vec2 gridCenter = vec2(0.5, 0.5);

                float circle = drawCircle(gridPos, gridCenter, radius);

                vec3 color = mix(backgroundColor, circleColor, circle);
                gl_FragColor = vec4(color, 1.0);
                // gl_FragColor = vec4(gridPos.x, gridPos.y, 0.0, 1.0);
            }`
    });
};

const seigaiha_material = new THREE.ShaderMaterial({
    uniforms: {
        radius: { value: 0.5 }, // Circle radius
        spacing: { value: 5.0 }, // Distance between circles
        circleColor: { value: new THREE.Color(0xff0000) }, // Red circles
        backgroundColor: { value: new THREE.Color(0x000000) } // Black background
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        varying vec2 vUv;

        uniform float radius;
        uniform float spacing;
        uniform vec3 circleColor;
        uniform vec3 backgroundColor;

        float drawCircle(vec2 uv, vec2 position, float radius) {
            float dist = distance(uv, position);
            return 1.0 - smoothstep(radius - 0.01, radius + 0.01, dist);
        }

        void main() {
            vec2 uv = vUv;// * spacing;
            vec2 gridPos = fract(uv);
            vec2 gridCenter = vec2(0.5, 0.5);

            float circle = drawCircle(gridPos, gridCenter, radius);

            vec3 color = mix(backgroundColor, circleColor, circle);
            gl_FragColor = vec4(color, 1.0);
            // gl_FragColor = vec4(gridPos.x, gridPos.y, 0.0, 1.0);
        }
    `,
    side: THREE.DoubleSide
});

export const seigaiha_demo = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    // Create a scene
    const scene = new THREE.Scene();

    // Set up a camera with a perspective view
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // prettier-ignore
    const points = [[-8.5 / 2, 11 / 2], [8.5 / 2, 11 / 2], [8.5 / 2, -11 / 2], [-8.5 / 2, -11 / 2]];
    // prettier-ignore
    // const points = [[0, 10], [9.511, 3.09], [5.878, -8.09], [-5.878, -8.09], [-9.511, 3.09]]
    const shape = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x, y)));

    // Create geometry and set up front and back materials
    const geometry = new THREE.ShapeGeometry(shape);
    geometry.clearGroups();
    geometry.addGroup(0, geometry.attributes.position.count * 2, 0);
    geometry.addGroup(0, geometry.attributes.position.count * 2, 1);

    const front_material = harlequin_circles({ foreground: 0x000000, background: 0xff0000, side: THREE.FrontSide });
    const back_material = harlequin_circles({ side: THREE.BackSide });

    const mesh = new THREE.Mesh(geometry, [front_material, back_material]);

    // Add the cube to the scene
    scene.add(mesh);

    // Position the camera so that we can see the mesh
    camera.position.z = 15;

    const update_scene = () => {
        // Rotate the mesh for some simple animation
        // mesh.rotation.x += 0.01;
        // mesh.rotation.y += 0.01;

        // Render the scene from the perspective of the camera
        renderer.render(scene, camera);
    };

    return { update_scene, camera, resetter: () => {} };
};
