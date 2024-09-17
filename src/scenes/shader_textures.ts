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
            density: { value: 1.0 }, // Circles per length
            circleColor: { value: new THREE.Color(foreground) }, // Red circles
            backgroundColor: { value: new THREE.Color(background) } // Black background
        },
        vertexShader: passthrough_vertex_shader,
        fragmentShader: `
            varying vec2 vUv;

            uniform float radius;
            uniform float density;
            uniform vec3 circleColor;
            uniform vec3 backgroundColor;

            float drawCircle(vec2 uv, vec2 position, float radius) {
                float dist = distance(uv, position);
                return 1.0 - smoothstep(radius - 0.01, radius + 0.01, dist);
            }

            void main() {
                vec2 uv = vUv * density;
                vec2 gridPos = fract(uv);
                vec2 gridCenter = vec2(0.5, 0.5);

                float circle = drawCircle(gridPos, gridCenter, radius);

                vec3 color = mix(backgroundColor, circleColor, circle);
                gl_FragColor = vec4(color, 1.0);
                // gl_FragColor = vec4(gridPos.x, gridPos.y, 0.0, 1.0);
            }`
    });
};

type SeigaihaProps = {
    foreground?: THREE.ColorRepresentation;
    background?: THREE.ColorRepresentation;
} & MaterialProps;
const seigaiha = ({ foreground = 0x0000ff, background = 0xffffff, side }: SeigaihaProps = {}) => {
    return new THREE.ShaderMaterial({
        uniforms: {
            // radius: { value: 0.5 },
            inner_radius: { value: 0.45 },
            outer_radius: { value: 0.5 },
            vertical_spacing: { value: 0.5 },
            vertical_stagger: { value: 0.25 },
            horizontal_spacing: { value: 0.8 },
            color0: { value: new THREE.Color(foreground) },
            color1: { value: new THREE.Color(background) }
        },
        side,
        vertexShader: passthrough_vertex_shader,
        fragmentShader: `
            // Fragment Shader
            varying vec2 vUv;

            uniform float inner_radius;
            uniform float outer_radius;
            uniform float vertical_spacing;
            uniform float vertical_stagger;
            uniform float horizontal_spacing;
            uniform vec3 color0;
            uniform vec3 color1;

            float drawArc(vec2 uv, vec2 center, float radius) {
                vec2 left_avoid = vec2(center.x - horizontal_spacing * 0.5, center.y - vertical_stagger);
                vec2 right_avoid = vec2(center.x + horizontal_spacing * 0.5, center.y - vertical_stagger);
                float dist = distance(uv, center);
                float left_dist = distance(uv, left_avoid);
                float right_dist = distance(uv, right_avoid);

                // draw the arc anywhere within radius, so long as it is not within left or right avoid circles (which have radius outer_radius)
                float arc = smoothstep(radius - 0.005, radius + 0.005, dist);
                float masks = step(outer_radius, left_dist) * step(outer_radius, right_dist);
                return arc * masks;
            }

            void main() {
                // generate the 4 arc colors ranging from color0 to color1
                vec3 c0 = color0;
                vec3 c1 = mix(color0, color1, 0.3333);
                vec3 c2 = mix(color0, color1, 0.6666);
                vec3 c3 = color1;


                // radiuses for each arc
                float r0 = outer_radius;
                float r1 = r0 * 0.75;
                float r2 = r0 * 0.50;
                float r3 = r0 * 0.25;
                float r4 = r0 * 0.0;

            
                // Create a grid where each cell is the size of the spacing
                vec2 scale = vec2(horizontal_spacing, vertical_spacing);
                vec2 uv = vUv / scale; // Scale the UV coordinates
                vec2 gridOffset = fract(uv);    // Position within the grid cell
                gridOffset *= scale; // Scale back to original size


                // just draw an arc in each cell
                vec2 center = vec2(horizontal_spacing * 0.5, 0.0);
                float arc0 = drawArc(gridOffset, center, r1) - drawArc(gridOffset, center, r0-0.01);
                float arc1 = drawArc(gridOffset, center, r2) - drawArc(gridOffset, center, r1-0.01);
                float arc2 = drawArc(gridOffset, center, r3) - drawArc(gridOffset, center, r2-0.01);
                float arc3 = drawArc(gridOffset, center, r4) - drawArc(gridOffset, center, r3-0.01);

                gl_FragColor =
                    + vec4(mix(vec3(0,0,0), c0, arc0), 1.0)
                    + vec4(mix(vec3(0,0,0), c1, arc1), 1.0)
                    + vec4(mix(vec3(0,0,0), c2, arc2), 1.0)
                    + vec4(mix(vec3(0,0,0), c3, arc3), 1.0);
                ;



                // gl_FragColor = vec4(gridOffset.x, gridOffset.y, 0.0, 1.0);

                // // Shift alternate rows by half a cell
                // if (mod(gridPos.y, 2.0) > 0.5) {
                //     gridOffset.x += 0.5;
                // }

                // // Adjust so the pattern repeats horizontally
                // gridOffset = fract(gridOffset);

                // // Draw the arc
                // float arc = drawArc(gridOffset, vec2(0.5, 0.5), radius);

                // // Mix the wave color and background color
                // vec3 color = mix(color1, color0, arc);

                // gl_FragColor = vec4(color, 1.0);
            }`
    });
};

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

    const front_material = harlequin_circles({ side: THREE.BackSide });
    // const back_material = harlequin_circles({ foreground: 0x000000, background: 0xff0000, side: THREE.BackSide });
    const back_material = seigaiha({ side: THREE.FrontSide });

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
