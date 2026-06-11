/**
 * Pattern materials for the paper faces. UVs are raw paper-space coordinates
 * (ShapeGeometry copies vertex xy into uv), so patterns stay aligned across
 * facets no matter how the paper is folded.
 */
import * as THREE from 'three';

export type PatternId =
    | 'plain'
    | 'seigaiha'
    | 'circles'
    | 'checker'
    | 'dots'
    | 'stripes'
    | 'stars'
    | 'argyle'
    | 'honeycomb'
    | 'glitter';

export const PATTERNS: { id: PatternId; label: string }[] = [
    { id: 'plain', label: 'Plain' },
    { id: 'seigaiha', label: 'Seigaiha' },
    { id: 'circles', label: 'Circles' },
    { id: 'checker', label: 'Checker' },
    { id: 'dots', label: 'Dots' },
    { id: 'stripes', label: 'Stripes' },
    { id: 'stars', label: 'Stars' },
    { id: 'argyle', label: 'Argyle' },
    { id: 'honeycomb', label: 'Honeycomb' },
    { id: 'glitter', label: 'Glitter' }
];

const vertexShader = `
    varying vec2 vUv;
    varying vec3 vWorldPos;
    varying vec3 vWorldNormal;
    varying vec3 vWorldTangent;
    varying vec3 vWorldBitangent;
    void main() {
        vUv = uv;
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        vWorldNormal = normalize(normalMatrix * normal);
        vWorldTangent = normalize(vec3(modelMatrix * vec4(1.0, 0.0, 0.0, 0.0)));
        vWorldBitangent = normalize(vec3(modelMatrix * vec4(0.0, 1.0, 0.0, 0.0)));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentPreamble = `
    varying vec2 vUv;
    varying vec3 vWorldPos;
    varying vec3 vWorldNormal;
    varying vec3 vWorldTangent;
    varying vec3 vWorldBitangent;
    uniform vec3 color0;
    uniform vec3 color1;

    float hash12(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
    }

    vec2 hash22(vec2 p) {
        return vec2(hash12(p), hash12(p + 19.19));
    }

    vec3 hash33(vec3 p) {
        p = vec3(
            dot(p, vec3(127.1, 311.7, 74.7)),
            dot(p, vec3(269.5, 183.3, 246.1)),
            dot(p, vec3(113.5, 271.9, 124.6))
        );
        return fract(sin(p) * 43758.5453123);
    }

    float noise21(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        float a = hash12(i);
        float b = hash12(i + vec2(1.0, 0.0));
        float c = hash12(i + vec2(0.0, 1.0));
        float d = hash12(i + vec2(1.0, 1.0));
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
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
            ${fragmentPreamble}
            ${fragmentBody}
        `
    });

const circles = (side: THREE.Side, color0: THREE.ColorRepresentation, color1: THREE.ColorRepresentation) =>
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

const stripes = (side: THREE.Side, color0: THREE.ColorRepresentation, color1: THREE.ColorRepresentation) =>
    shaderMaterial(
        side,
        color0,
        color1,
        `
        void main() {
            vec2 uv = vUv * 1.8;
            float c = cos(0.65);
            float s = sin(0.65);
            uv = mat2(c, -s, s, c) * uv;
            float wave = sin(uv.x * 6.28318530718);
            float aa = fwidth(wave);
            float k = smoothstep(-aa, aa, wave);
            gl_FragColor = vec4(mix(color0, color1, k), 1.0);
        }`
    );

const stars = (side: THREE.Side, color0: THREE.ColorRepresentation, color1: THREE.ColorRepresentation) =>
    shaderMaterial(
        side,
        color0,
        color1,
        `
        float diamondMask(vec2 p, vec2 h) {
            float q = abs(p.x) / h.x + abs(p.y) / h.y;
            return 1.0 - step(1.0, q);
        }

        float star8(vec2 p, float axisLen, float axisWidth, float diagLen, float diagWidth) {
            float c = 0.70710678;
            vec2 pr = mat2(c, -c, c, c) * p;
            float s = max(
                diamondMask(p, vec2(axisLen, axisWidth)),
                diamondMask(vec2(p.y, p.x), vec2(axisLen, axisWidth))
            );
            s = max(s, diamondMask(pr, vec2(diagLen, diagWidth)));
            s = max(s, diamondMask(vec2(pr.y, pr.x), vec2(diagLen, diagWidth)));
            return s;
        }

        void main() {
            // tiled compass-star motif with grout and faint diagonals, inspired
            // by encaustic star tiles
            vec2 uv = vUv * 0.85;
            vec2 g = fract(uv);
            vec2 p = g - 0.5;
            vec3 bg = color0;
            vec3 starCol = color1;
            vec3 lineCol = mix(color0, color1, 0.35);

            float edge = min(min(g.x, 1.0 - g.x), min(g.y, 1.0 - g.y));
            float grout = 1.0 - step(0.018, edge);
            float diagA = 1.0 - step(0.008, abs(g.x - g.y));
            float diagB = 1.0 - step(0.008, abs(g.x + g.y - 1.0));
            float diagonals = max(diagA, diagB) * (1.0 - 0.85 * grout);

            float centerStar = star8(p, 0.16, 0.05, 0.11, 0.06);
            float cornerStar = 0.0;
            cornerStar = max(cornerStar, star8(g, 0.26, 0.06, 0.18, 0.07));
            cornerStar = max(cornerStar, star8(g - vec2(1.0, 0.0), 0.26, 0.06, 0.18, 0.07));
            cornerStar = max(cornerStar, star8(g - vec2(0.0, 1.0), 0.26, 0.06, 0.18, 0.07));
            cornerStar = max(cornerStar, star8(g - vec2(1.0, 1.0), 0.26, 0.06, 0.18, 0.07));

            vec3 col = mix(bg, lineCol, 0.35 * diagonals);
            col = mix(col, starCol, max(centerStar, cornerStar));
            col = mix(col, mix(starCol, vec3(1.0), 0.18), grout);
            gl_FragColor = vec4(col, 1.0);
        }`
    );

const argyle = (side: THREE.Side, color0: THREE.ColorRepresentation, color1: THREE.ColorRepresentation) =>
    shaderMaterial(
        side,
        color0,
        color1,
        `
        void main() {
            // diamond lattice (rotated square checker) with sharp edges, plus
            // the thin crossing diagonals through the diamond centers that
            // give argyle its woven look
            vec2 uv = vUv * 1.4;
            vec2 p = vec2(uv.x + uv.y, uv.x - uv.y);
            vec2 cell = floor(p);
            float k = mod(cell.x + cell.y, 2.0);
            vec3 col = mix(color0, color1, k);

            // thin crossing diagonals through the diamond centers (not the
            // diamond boundaries)
            vec2 c = abs(fract(p) - 0.5);
            float lw = 0.035;
            float line = max(1.0 - step(lw, c.x), 1.0 - step(lw, c.y));
            vec3 lineCol = mix(mix(color0, color1, 0.5), vec3(1.0), 0.4);
            col = mix(col, lineCol, line);
            gl_FragColor = vec4(col, 1.0);
        }`
    );

const honeycomb = (side: THREE.Side, color0: THREE.ColorRepresentation, color1: THREE.ColorRepresentation) =>
    shaderMaterial(
        side,
        color0,
        color1,
        `
        float hexDist(vec2 p) {
            p = abs(p);
            return max(p.x, dot(p, vec2(0.5, 0.8660254)));
        }
        void main() {
            vec2 uv = vUv * 2.2;
            vec2 r = vec2(1.0, 1.7320508);
            vec2 h = r * 0.5;
            vec2 a = mod(uv, r) - h;
            vec2 b = mod(uv - h, r) - h;
            vec2 gv = dot(a, a) < dot(b, b) ? a : b;
            vec2 id = floor(uv - gv);
            float d = hexDist(gv);
            float comb = smoothstep(0.42, 0.47, d);
            vec3 cell = mix(color0, color1, 0.10 * hash12(id));
            gl_FragColor = vec4(mix(cell, color1, comb), 1.0);
        }`
    );

const glitter = (side: THREE.Side, color0: THREE.ColorRepresentation, color1: THREE.ColorRepresentation) =>
    shaderMaterial(
        side,
        color0,
        color1,
        `
        void main() {
            vec3 surfNormal = normalize(gl_FrontFacing ? vWorldNormal : -vWorldNormal);
            vec3 viewDir = normalize(cameraPosition - vWorldPos);
            vec3 lightDir = normalize(vec3(-0.45, 0.35, 0.82));

            // Faux paper relief: a low-frequency height field perturbs the
            // normal a little, so the glitter sheet reads as textured paper
            // rather than a flat color fill.
            vec2 bumpUv = vUv * 18.0;
            float h0 = 0.65 * noise21(bumpUv) + 0.35 * noise21(bumpUv * 2.1 + vec2(11.3, 7.9));
            float hx = 0.65 * noise21(bumpUv + vec2(0.05, 0.0)) + 0.35 * noise21((bumpUv + vec2(0.05, 0.0)) * 2.1 + vec2(11.3, 7.9));
            float hy = 0.65 * noise21(bumpUv + vec2(0.0, 0.05)) + 0.35 * noise21((bumpUv + vec2(0.0, 0.05)) * 2.1 + vec2(11.3, 7.9));
            vec3 tangent = normalize(vWorldTangent);
            vec3 bitangent = normalize(vWorldBitangent);
            vec3 paperNormal = normalize(surfNormal - 0.35 * ((hx - h0) * tangent + (hy - h0) * bitangent));

            float diffuse = 0.80 + 0.20 * max(dot(paperNormal, lightDir), 0.0);
            float grain = 0.55 * noise21(vUv * 42.0) + 0.45 * noise21(vUv * 95.0 + vec2(3.1, 8.2));
            vec3 base = color0 * diffuse;
            base = mix(base, base * 1.08, 0.16 * grain);

            // Randomly located glitter flakes: nearest jittered feature point
            // over neighboring cells (Worley-like), so the sparkles don't read
            // as a visible grid.
            vec2 uv = vUv * 22.0;
            vec2 cell = floor(uv);
            vec2 f = fract(uv);
            float nearest = 1e9;
            vec2 nearestCell = vec2(0.0);
            vec2 nearestPoint = vec2(0.0);
            float nearestSeed = 0.0;
            for (int j = -1; j <= 1; j++) {
                for (int i = -1; i <= 1; i++) {
                    vec2 g = vec2(float(i), float(j));
                    vec2 c = cell + g;
                    vec2 pt = g + hash22(c + 13.7);
                    float d = distance(f, pt);
                    if (d < nearest) {
                        nearest = d;
                        nearestCell = c;
                        nearestPoint = pt;
                        nearestSeed = hash12(c + 29.4);
                    }
                }
            }

            float flakeRadius = mix(0.07, 0.16, hash12(nearestCell + 17.2));
            float flake = 1.0 - smoothstep(flakeRadius, flakeRadius + 0.03, nearest);
            float halo = 1.0 - smoothstep(flakeRadius + 0.08, flakeRadius + 0.30, nearest);
            float sparse = step(0.24, nearestSeed);
            flake *= sparse;
            halo *= sparse;

            // A few larger flakes on a second scale keep some sparkle visible
            // from almost any camera angle.
            vec2 uv2 = vUv * 10.0 + vec2(5.3, 9.7);
            vec2 cell2 = floor(uv2);
            vec2 f2 = fract(uv2);
            float nearest2 = 1e9;
            vec2 nearestCell2 = vec2(0.0);
            for (int j = -1; j <= 1; j++) {
                for (int i = -1; i <= 1; i++) {
                    vec2 g = vec2(float(i), float(j));
                    vec2 c = cell2 + g;
                    vec2 pt = g + hash22(c + 41.9);
                    float d = distance(f2, pt);
                    if (d < nearest2) {
                        nearest2 = d;
                        nearestCell2 = c;
                    }
                }
            }
            float flake2 = (1.0 - smoothstep(0.10, 0.16, nearest2)) * step(0.45, hash12(nearestCell2 + 2.8));
            float halo2 = (1.0 - smoothstep(0.20, 0.42, nearest2)) * step(0.45, hash12(nearestCell2 + 2.8));

            vec3 rnd = hash33(vec3(nearestCell, 3.7));
            vec3 micro = normalize(paperNormal + 1.7 * (rnd * 2.0 - 1.0));
            vec3 refl = reflect(-lightDir, micro);
            float align = max(dot(refl, viewDir), 0.0);
            float sparkle = (flake + 0.7 * flake2) * pow(align, 24.0);
            float bloom = (halo + 0.85 * halo2) * pow(align, 7.0);

            vec3 sparkleColor = color1;
            // Build the widened sparkle footprint from brightness/alignment
            // first, then tint it afterward. This gives a color-independent
            // "bloom" shape without turning dark sparkle colors into bright
            // additive light.
            float coreMask = clamp(2.6 * sparkle, 0.0, 1.0);
            float haloMask = clamp(2.4 * bloom, 0.0, 1.0) * (1.0 - coreMask);
            float flashMask = clamp(coreMask + 0.75 * haloMask, 0.0, 1.0);
            vec3 flakeBase = mix(base, sparkleColor, 0.16 * flake + 0.08 * flake2);
            vec3 col = mix(flakeBase, sparkleColor, flashMask);
            gl_FragColor = vec4(min(col, vec3(1.0)), 1.0);
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
        case 'circles':
            return circles(side, color0, color1);
        case 'checker':
            return checker(side, color0, color1);
        case 'dots':
            return dots(side, color0, color1);
        case 'stripes':
            return stripes(side, color0, color1);
        case 'stars':
            return stars(side, color0, color1);
        case 'argyle':
            return argyle(side, color0, color1);
        case 'honeycomb':
            return honeycomb(side, color0, color1);
        case 'glitter':
            return glitter(side, color0, color1);
    }
    return new THREE.MeshBasicMaterial({ color: color0, side });
};
