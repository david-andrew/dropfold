/**
 * Pattern materials for the paper faces. UVs are raw paper-space coordinates
 * (ShapeGeometry copies vertex xy into uv), so patterns stay aligned across
 * facets no matter how the paper is folded.
 */
import * as THREE from 'three';

export type PatternId = 'plain' | 'seigaiha' | 'harlequin' | 'checker' | 'dots';

export const PATTERNS: { id: PatternId; label: string }[] = [
    { id: 'plain', label: 'Plain' },
    { id: 'seigaiha', label: 'Seigaiha' },
    { id: 'harlequin', label: 'Harlequin' },
    { id: 'checker', label: 'Checker' },
    { id: 'dots', label: 'Dots' }
];

const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const shaderMaterial = (
    side: THREE.Side,
    color0: THREE.ColorRepresentation,
    color1: THREE.ColorRepresentation,
    fragmentBody: string,
    extraUniforms: Record<string, { value: unknown }> = {}
) =>
    new THREE.ShaderMaterial({
        side,
        uniforms: {
            color0: { value: new THREE.Color(color0) },
            color1: { value: new THREE.Color(color1) },
            ...extraUniforms
        },
        vertexShader,
        fragmentShader: `
            varying vec2 vUv;
            uniform vec3 color0;
            uniform vec3 color1;
            ${fragmentBody}
        `
    });

const harlequin = (side: THREE.Side, color0: THREE.ColorRepresentation, color1: THREE.ColorRepresentation) =>
    shaderMaterial(
        side,
        color0,
        color1,
        `
        void main() {
            vec2 uv = vUv * 1.0;
            vec2 gridPos = fract(uv);
            float dist = distance(gridPos, vec2(0.5, 0.5));
            float circle = 1.0 - smoothstep(0.34, 0.36, dist);
            gl_FragColor = vec4(mix(color1, color0, circle), 1.0);
        }`
    );

const checker = (side: THREE.Side, color0: THREE.ColorRepresentation, color1: THREE.ColorRepresentation) =>
    shaderMaterial(
        side,
        color0,
        color1,
        `
        void main() {
            vec2 cell = floor(vUv * 1.0);
            float k = mod(cell.x + cell.y, 2.0);
            gl_FragColor = vec4(mix(color0, color1, k), 1.0);
        }`
    );

const dots = (side: THREE.Side, color0: THREE.ColorRepresentation, color1: THREE.ColorRepresentation) =>
    shaderMaterial(
        side,
        color0,
        color1,
        `
        void main() {
            vec2 uv = vUv * 1.5;
            vec2 cell = floor(uv);
            vec2 gridPos = fract(uv);
            vec2 center = vec2(0.5) + 0.15 * vec2(sin(cell.x * 7.13 + cell.y * 3.7), cos(cell.x * 2.3 + cell.y * 5.1));
            float dist = distance(gridPos, center);
            float circle = 1.0 - smoothstep(0.13, 0.15, dist);
            gl_FragColor = vec4(mix(color0, color1, circle), 1.0);
        }`
    );

const seigaiha = (side: THREE.Side, color0: THREE.ColorRepresentation, color1: THREE.ColorRepresentation) =>
    new THREE.ShaderMaterial({
        side,
        uniforms: {
            density: { value: 0.5 },
            outer_radius: { value: 0.45 },
            vertical_spacing: { value: 0.5 },
            vertical_stagger: { value: 0.25 },
            horizontal_spacing: { value: 0.75 },
            color0: { value: new THREE.Color(color0) },
            color1: { value: new THREE.Color(color1) }
        },
        vertexShader,
        fragmentShader: `
            varying vec2 vUv;

            uniform float density;
            uniform float outer_radius;
            uniform float vertical_spacing;
            uniform float vertical_stagger;
            uniform float horizontal_spacing;
            uniform vec3 color0;
            uniform vec3 color1;

            float drawArc(vec2 uv, vec2 center, float radius) {
                float epsilon = 0.0025;

                vec2 left_avoid = vec2(center.x - horizontal_spacing * 0.5, center.y - vertical_stagger);
                vec2 right_avoid = vec2(center.x + horizontal_spacing * 0.5, center.y - vertical_stagger);
                float dist = distance(uv, center);
                float left_dist = distance(uv, left_avoid);
                float right_dist = distance(uv, right_avoid);

                float arc = smoothstep(radius - epsilon, radius + epsilon, dist);
                float masks = smoothstep(outer_radius - epsilon, outer_radius + epsilon, left_dist) * smoothstep(outer_radius - epsilon, outer_radius + epsilon, right_dist);
                return arc * masks;
            }

            void main() {
                vec3 c0 = color0;
                vec3 c1 = mix(color0, color1, 0.3333);
                vec3 c2 = mix(color0, color1, 0.6666);
                vec3 c3 = color1;

                float r0 = outer_radius;
                float r1 = r0 * 0.70;
                float r2 = r0 * 0.45;
                float r3 = r0 * 0.225;
                float r4 = r0 * 0.0;

                vec2 scale = vec2(horizontal_spacing, vertical_spacing);
                vec2 uv = vUv * density / scale;
                vec2 gridOffset = fract(uv);
                gridOffset *= scale;

                vec2 center = vec2(horizontal_spacing * 0.5, 0.0);
                float arc0 = drawArc(gridOffset, center, r1) - drawArc(gridOffset, center, r0-0.04);
                float arc1 = drawArc(gridOffset, center, r2) - drawArc(gridOffset, center, r1-0.02);
                float arc2 = drawArc(gridOffset, center, r3) - drawArc(gridOffset, center, r2-0.02);
                float arc3 = drawArc(gridOffset, center, r4) - drawArc(gridOffset, center, r3-0.02);

                float right = 1.0 - step(gridOffset.x, horizontal_spacing / 2.0);
                float left = step(gridOffset.x, horizontal_spacing / 2.0);

                vec2 urc = vec2(horizontal_spacing, -vertical_stagger);
                float urarc0 = (drawArc(gridOffset, urc, r1) - drawArc(gridOffset, urc, r0-0.04)) * right;
                float urarc1 = (drawArc(gridOffset, urc, r2) - drawArc(gridOffset, urc, r1-0.02)) * right;
                float urarc2 = (drawArc(gridOffset, urc, r3) - drawArc(gridOffset, urc, r2-0.02)) * right;
                float urarc3 = (drawArc(gridOffset, urc, r4) - drawArc(gridOffset, urc, r3-0.02)) * right;

                vec2 lrc = vec2(horizontal_spacing, vertical_stagger);
                float lrarc0 = (drawArc(gridOffset, lrc, r1) - drawArc(gridOffset, lrc, r0-0.04)) * right;
                float lrarc1 = (drawArc(gridOffset, lrc, r2) - drawArc(gridOffset, lrc, r1-0.02)) * right;
                float lrarc2 = (drawArc(gridOffset, lrc, r3) - drawArc(gridOffset, lrc, r2-0.02)) * right;
                float lrarc3 = (drawArc(gridOffset, lrc, r4) - drawArc(gridOffset, lrc, r3-0.02)) * right;

                vec2 ulc = vec2(0, -vertical_stagger);
                float ularc0 = (drawArc(gridOffset, ulc, r1) - drawArc(gridOffset, ulc, r0-0.04)) * left;
                float ularc1 = (drawArc(gridOffset, ulc, r2) - drawArc(gridOffset, ulc, r1-0.02)) * left;
                float ularc2 = (drawArc(gridOffset, ulc, r3) - drawArc(gridOffset, ulc, r2-0.02)) * left;
                float ularc3 = (drawArc(gridOffset, ulc, r4) - drawArc(gridOffset, ulc, r3-0.02)) * left;

                vec2 llc = vec2(0, vertical_stagger);
                float llarc0 = (drawArc(gridOffset, llc, r1) - drawArc(gridOffset, llc, r0-0.04)) * left;
                float llarc1 = (drawArc(gridOffset, llc, r2) - drawArc(gridOffset, llc, r1-0.02)) * left;
                float llarc2 = (drawArc(gridOffset, llc, r3) - drawArc(gridOffset, llc, r2-0.02)) * left;
                float llarc3 = (drawArc(gridOffset, llc, r4) - drawArc(gridOffset, llc, r3-0.02)) * left;

                vec3 col =
                      c0 * (arc0 + urarc0 + lrarc0 + ularc0 + llarc0)
                    + c1 * (arc1 + urarc1 + lrarc1 + ularc1 + llarc1)
                    + c2 * (arc2 + urarc2 + lrarc2 + ularc2 + llarc2)
                    + c3 * (arc3 + urarc3 + lrarc3 + ularc3 + llarc3);
                gl_FragColor = vec4(col, 1.0);
            }`
    });

export const makePatternMaterial = (
    pattern: PatternId,
    color0: THREE.ColorRepresentation,
    color1: THREE.ColorRepresentation,
    side: THREE.Side
): THREE.Material => {
    switch (pattern) {
        case 'plain':
            return new THREE.MeshBasicMaterial({ color: color0, side });
        case 'seigaiha':
            return seigaiha(side, color0, color1);
        case 'harlequin':
            return harlequin(side, color0, color1);
        case 'checker':
            return checker(side, color0, color1);
        case 'dots':
            return dots(side, color0, color1);
    }
};
