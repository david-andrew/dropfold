import * as THREE from 'three';
import { SceneFunctions } from '../main';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const passthrough_vertex_shader = `
    varying vec2 vUv;
    #include <clipping_planes_pars_vertex>
    void main() {
        #include <begin_vertex>
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        #include <project_vertex>
        #include <clipping_planes_vertex>
    }
`;

export type MaterialProps = {
    side?: THREE.Side;
    clippingPlanes?: THREE.Plane[];
};

// use partial evaluation to convert below material functions to factories
// e.g. `redblack_factory = (props?: MaterialProps = {}) => harlequin_circles({ foreground: 0xff0000, background: 0x000000, ...props })`
export type MaterialFactory = (props?: MaterialProps) => THREE.Material;

type HarlequinCirclesProps = {
    color0?: THREE.ColorRepresentation;
    color1?: THREE.ColorRepresentation;
} & MaterialProps;
export const harlequin_circles = ({
    color0 = 0xff0000,
    color1 = 0x000000,
    side,
    clippingPlanes
}: HarlequinCirclesProps = {}): THREE.ShaderMaterial => {
    return new THREE.ShaderMaterial({
        side,
        clippingPlanes,
        clipping: true,
        uniforms: {
            radius: { value: 0.5 }, // Circle radius
            density: { value: 1.0 }, // Circles per length
            circleColor: { value: new THREE.Color(color0) }, // Red circles
            backgroundColor: { value: new THREE.Color(color1) } // Black background
        },
        vertexShader: passthrough_vertex_shader,
        fragmentShader: `
            #include <clipping_planes_pars_fragment>
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
                #include <clipping_planes_fragment>
                vec2 uv = vUv * density;
                vec2 gridPos = fract(uv);
                vec2 gridCenter = vec2(0.5, 0.5);

                float circle = drawCircle(gridPos, gridCenter, radius);

                vec3 color = mix(backgroundColor, circleColor, circle);
                gl_FragColor = vec4(color, 1.0);
            }`
    });
};

type SeigaihaProps = {
    color0?: THREE.ColorRepresentation;
    color1?: THREE.ColorRepresentation;
} & MaterialProps;
export const seigaiha = ({ color0 = 0x87ceeb, color1 = 0xffffff, side, clippingPlanes }: SeigaihaProps = {}) => {
    return new THREE.ShaderMaterial({
        uniforms: {
            density: { value: 0.5 },
            outer_radius: { value: 0.45 },
            vertical_spacing: { value: 0.5 },
            vertical_stagger: { value: 0.25 },
            horizontal_spacing: { value: 0.75 },
            color0: { value: new THREE.Color(color0) },
            color1: { value: new THREE.Color(color1) }
        },
        side,
        clippingPlanes,
        clipping: true,
        vertexShader: passthrough_vertex_shader,
        fragmentShader: `
            #include <clipping_planes_pars_fragment>
            // Fragment Shader
            varying vec2 vUv;

            uniform float density;
            uniform float outer_radius;
            uniform float vertical_spacing;
            uniform float vertical_stagger;
            uniform float horizontal_spacing;
            uniform vec3 color0;
            uniform vec3 color1;

            float drawArc(vec2 uv, vec2 center, float radius) {
                float epsilon = 0.0025; // Small value for smoothstep

                vec2 left_avoid = vec2(center.x - horizontal_spacing * 0.5, center.y - vertical_stagger);
                vec2 right_avoid = vec2(center.x + horizontal_spacing * 0.5, center.y - vertical_stagger);
                float dist = distance(uv, center);
                float left_dist = distance(uv, left_avoid);
                float right_dist = distance(uv, right_avoid);

                // draw the arc anywhere within radius, so long as it is not within left or right avoid circles (which have radius outer_radius)
                float arc = smoothstep(radius - epsilon, radius + epsilon, dist);
                float masks = smoothstep(outer_radius - epsilon, outer_radius + epsilon, left_dist) * smoothstep(outer_radius - epsilon, outer_radius + epsilon, right_dist);
                return arc * masks;
            }

            void main() {
                #include <clipping_planes_fragment>

                // generate the 4 arc colors ranging from color0 to color1
                vec3 c0 = color0;
                vec3 c1 = mix(color0, color1, 0.3333);
                vec3 c2 = mix(color0, color1, 0.6666);
                vec3 c3 = color1;


                // radiuses for each arc
                float r0 = outer_radius;
                float r1 = r0 * 0.70;
                float r2 = r0 * 0.45;
                float r3 = r0 * 0.225;
                float r4 = r0 * 0.0;

            
                // Create a grid where each cell is the size of the spacing
                vec2 scale = vec2(horizontal_spacing, vertical_spacing);
                vec2 uv = vUv * density / scale; // Scale the UV coordinates
                vec2 gridOffset = fract(uv);    // Position within the grid cell
                gridOffset *= scale; // Scale back to original size


                // just draw an arc in each cell
                vec2 center = vec2(horizontal_spacing * 0.5, 0.0);
                float arc0 = drawArc(gridOffset, center, r1) - drawArc(gridOffset, center, r0-0.04);
                float arc1 = drawArc(gridOffset, center, r2) - drawArc(gridOffset, center, r1-0.02);
                float arc2 = drawArc(gridOffset, center, r3) - drawArc(gridOffset, center, r2-0.02);
                float arc3 = drawArc(gridOffset, center, r4) - drawArc(gridOffset, center, r3-0.02);

                vec2 upper_right_center = vec2(horizontal_spacing, -vertical_stagger);
                float urarc0 = (drawArc(gridOffset, upper_right_center, r1) - drawArc(gridOffset, upper_right_center, r0-0.04)) * (1.0-step(gridOffset.x, horizontal_spacing/2.0));
                float urarc1 = (drawArc(gridOffset, upper_right_center, r2) - drawArc(gridOffset, upper_right_center, r1-0.02)) * (1.0-step(gridOffset.x, horizontal_spacing/2.0));
                float urarc2 = (drawArc(gridOffset, upper_right_center, r3) - drawArc(gridOffset, upper_right_center, r2-0.02)) * (1.0-step(gridOffset.x, horizontal_spacing/2.0));
                float urarc3 = (drawArc(gridOffset, upper_right_center, r4) - drawArc(gridOffset, upper_right_center, r3-0.02)) * (1.0-step(gridOffset.x, horizontal_spacing/2.0));

                vec2 lower_right_center = vec2(horizontal_spacing, vertical_stagger);
                float lrarc0 = (drawArc(gridOffset, lower_right_center, r1) - drawArc(gridOffset, lower_right_center, r0-0.04)) * (1.0-step(gridOffset.x, horizontal_spacing/2.0));
                float lrarc1 = (drawArc(gridOffset, lower_right_center, r2) - drawArc(gridOffset, lower_right_center, r1-0.02)) * (1.0-step(gridOffset.x, horizontal_spacing/2.0));
                float lrarc2 = (drawArc(gridOffset, lower_right_center, r3) - drawArc(gridOffset, lower_right_center, r2-0.02)) * (1.0-step(gridOffset.x, horizontal_spacing/2.0));
                float lrarc3 = (drawArc(gridOffset, lower_right_center, r4) - drawArc(gridOffset, lower_right_center, r3-0.02)) * (1.0-step(gridOffset.x, horizontal_spacing/2.0));

                vec2 upper_left_center = vec2(0, -vertical_stagger);
                float ularc0 = (drawArc(gridOffset, upper_left_center, r1) - drawArc(gridOffset, upper_left_center, r0-0.04)) * step(gridOffset.x, horizontal_spacing/2.0);
                float ularc1 = (drawArc(gridOffset, upper_left_center, r2) - drawArc(gridOffset, upper_left_center, r1-0.02)) * step(gridOffset.x, horizontal_spacing/2.0);
                float ularc2 = (drawArc(gridOffset, upper_left_center, r3) - drawArc(gridOffset, upper_left_center, r2-0.02)) * step(gridOffset.x, horizontal_spacing/2.0);
                float ularc3 = (drawArc(gridOffset, upper_left_center, r4) - drawArc(gridOffset, upper_left_center, r3-0.02)) * step(gridOffset.x, horizontal_spacing/2.0);

                vec2 lower_left_center = vec2(0, vertical_stagger);
                float llarc0 = (drawArc(gridOffset, lower_left_center, r1) - drawArc(gridOffset, lower_left_center, r0-0.04)) * step(gridOffset.x, horizontal_spacing/2.0);
                float llarc1 = (drawArc(gridOffset, lower_left_center, r2) - drawArc(gridOffset, lower_left_center, r1-0.02)) * step(gridOffset.x, horizontal_spacing/2.0);
                float llarc2 = (drawArc(gridOffset, lower_left_center, r3) - drawArc(gridOffset, lower_left_center, r2-0.02)) * step(gridOffset.x, horizontal_spacing/2.0);
                float llarc3 = (drawArc(gridOffset, lower_left_center, r4) - drawArc(gridOffset, lower_left_center, r3-0.02)) * step(gridOffset.x, horizontal_spacing/2.0);

                gl_FragColor =
                    + vec4(mix(vec3(0,0,0), c0, arc0), 1.0)
                    + vec4(mix(vec3(0,0,0), c1, arc1), 1.0)
                    + vec4(mix(vec3(0,0,0), c2, arc2), 1.0)
                    + vec4(mix(vec3(0,0,0), c3, arc3), 1.0)
                    + vec4(mix(vec3(0,0,0), c0, urarc0), 1.0)
                    + vec4(mix(vec3(0,0,0), c1, urarc1), 1.0)
                    + vec4(mix(vec3(0,0,0), c2, urarc2), 1.0)
                    + vec4(mix(vec3(0,0,0), c3, urarc3), 1.0)
                    + vec4(mix(vec3(0,0,0), c0, lrarc0), 1.0)
                    + vec4(mix(vec3(0,0,0), c1, lrarc1), 1.0)
                    + vec4(mix(vec3(0,0,0), c2, lrarc2), 1.0)
                    + vec4(mix(vec3(0,0,0), c3, lrarc3), 1.0)
                    + vec4(mix(vec3(0,0,0), c0, ularc0), 1.0)
                    + vec4(mix(vec3(0,0,0), c1, ularc1), 1.0)
                    + vec4(mix(vec3(0,0,0), c2, ularc2), 1.0)
                    + vec4(mix(vec3(0,0,0), c3, ularc3), 1.0)
                    + vec4(mix(vec3(0,0,0), c0, llarc0), 1.0)
                    + vec4(mix(vec3(0,0,0), c1, llarc1), 1.0)
                    + vec4(mix(vec3(0,0,0), c2, llarc2), 1.0)
                    + vec4(mix(vec3(0,0,0), c3, llarc3), 1.0)
                    ;
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
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.005;

        // Render the scene from the perspective of the camera
        renderer.render(scene, camera);
    };

    return { update_scene, camera, resetter: () => {} };
};


type TextureShaderMaterialProps = {texture_path: string, width: number, height: number} & MaterialProps;
export const texture_shader_material = ({texture_path, side, clippingPlanes, width, height}: TextureShaderMaterialProps) => {
    // super simple shader that just uses the texture directly
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(texture_path);
    return new THREE.ShaderMaterial({
        side,
        clippingPlanes,
        clipping: true,
        uniforms: {
            uTexture: { value: texture },
            uWidth: { value: width },
            uHeight: { value: height }
        },
        vertexShader: `
            varying vec2 vUv;
            #include <clipping_planes_pars_vertex>
            void main() {
                #include <begin_vertex>
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                #include <project_vertex>
                #include <clipping_planes_vertex>
            }
        `,
        fragmentShader: `
            #include <clipping_planes_pars_fragment>
            uniform sampler2D uTexture;
            uniform float uWidth;
            uniform float uHeight;
            varying vec2 vUv;

            vec2 new_uv;

            void main() {
                #include <clipping_planes_fragment>
                new_uv = vec2((vUv.x+uWidth/2.0)/uWidth, (vUv.y+uHeight/2.0)/uHeight);
                gl_FragColor = texture(uTexture, new_uv);
            }`
    });
};



type MSDFMaterialProps = {texture_path: string, width: number, height: number, color?:THREE.ColorRepresentation} & MaterialProps;
export const msdf_material = ({ texture_path, width, height, color=0xffffff, side, clippingPlanes }: MSDFMaterialProps) => {
    const texture = new THREE.TextureLoader().load(texture_path);
    return new THREE.ShaderMaterial({
        side,
        clippingPlanes,
        clipping: true,
        uniforms: {
            uTexture: { value: texture },
            uWidth: { value: width },
            uHeight: { value: height },
            uColor: { value: new THREE.Color(color) }
        },
        vertexShader: `
        varying vec2 vUv;
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <begin_vertex>
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            #include <project_vertex>
            #include <clipping_planes_vertex>
            }
            `,
        fragmentShader: `
            #include <clipping_planes_pars_fragment>
            uniform sampler2D uTexture;
            uniform float uWidth;
            uniform float uHeight;
            uniform vec3 uColor;
            varying vec2 vUv;


            float median(float r, float g, float b) {
                return max(min(r, g), min(max(r, g), b));
            }

            void main() {
                #include <clipping_planes_fragment>
                vec2 new_uv = vec2((vUv.x+uWidth/2.0)/uWidth, (vUv.y+uHeight/2.0)/uHeight);

                vec3 samp = texture(uTexture, new_uv).rgb;
                float sigDist = median(samp.r, samp.g, samp.b) - 0.5;
                float alpha = clamp(sigDist / fwidth(sigDist) + 0.5, 0.0, 1.0);
                gl_FragColor = vec4(uColor*alpha, alpha);
            }`
    });
}




type MSDFContactCardMaterialProps = {
    layer0_path: string,
    layer1_path: string,
    icons_path: string,
    width: number,
    height: number,
    color?:THREE.ColorRepresentation
} & MaterialProps;
export const msdf_contact_card_material = ({ layer0_path, layer1_path, icons_path, width, height, color=0xffffff, side, clippingPlanes }: MSDFContactCardMaterialProps) => {
    const layer0 = new THREE.TextureLoader().load(layer0_path);
    const layer1 = new THREE.TextureLoader().load(layer1_path);
    const icons = new THREE.TextureLoader().load(icons_path);
    return new THREE.ShaderMaterial({
        side,
        clippingPlanes,
        clipping: true,
        uniforms: {
            uLayer0: { value: layer0 },
            uLayer1: { value: layer1 },
            uIcons: { value: icons },
            uWidth: { value: width },
            uHeight: { value: height },
            uColor: { value: new THREE.Color(color) }
        },
        vertexShader: `
        varying vec2 vUv;
        #include <clipping_planes_pars_vertex>
        void main() {
            #include <begin_vertex>
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            #include <project_vertex>
            #include <clipping_planes_vertex>
        }
        `,
        fragmentShader: `
            #include <clipping_planes_pars_fragment>
            uniform sampler2D uLayer0;
            uniform sampler2D uLayer1;
            uniform sampler2D uIcons;
            uniform float uWidth;
            uniform float uHeight;
            uniform vec3 uColor;
            varying vec2 vUv;


            float median(float r, float g, float b) {
                return max(min(r, g), min(max(r, g), b));
            }

            void main() {
                #include <clipping_planes_fragment>
                vec2 new_uv = vec2((vUv.x+uWidth/2.0)/uWidth, (vUv.y+uHeight/2.0)/uHeight);

                vec3 samp0 = texture(uLayer0, new_uv).rgb;
                float sigDist0 = median(samp0.r, samp0.g, samp0.b) - 0.5;
                float alpha0 = clamp(sigDist0 / fwidth(sigDist0) + 0.5, 0.0, 1.0);
                vec3 samp1 = texture(uLayer1, new_uv).rgb;
                float sigDist1 = median(samp1.r, samp1.g, samp1.b) - 0.5;
                float alpha1 = clamp(sigDist1 / fwidth(sigDist1) + 0.5, 0.0, 1.0);
                vec3 samp2 = texture(uIcons, new_uv).rgb;
                float sigDist2 = median(samp2.r, samp2.g, samp2.b) - 0.5;
                float alpha2 = clamp(sigDist2 / fwidth(sigDist2) + 0.5, 0.0, 1.0);

                float alpha = max(max(alpha0, alpha1), alpha2);
                gl_FragColor = vec4(uColor*alpha, alpha);
            }`
    });
}