import * as THREE from 'three';
// import { general_folding_scene } from './paper_folding_3';
// import {build_thing_from_seed} from './build_thing'
import { SceneFunctions } from '../main';
import { states as paper_plane_states, tf_vec_to_mat, ThingTemplate } from './test_paper_plane';
import { OrbitalPointer } from '../controls';
import { MaterialFactory, MaterialProps, harlequin_circles, seigaiha, texture_shader_material } from './shader_textures';
import { BuildThingScene } from './build_thing';
import { createMSDFShader } from '../msdf/three-bmfont-text';


export const build_thing_scene =
    (thing_t: ThingTemplate) =>
    (renderer: THREE.WebGLRenderer): SceneFunctions => {
        const material_factories: MaterialFactory[] = [
            (props: MaterialProps = {}) => texture_shader_material({texture_path: '../../textures/layer0.png', side: THREE.FrontSide, width:3.5, height:2, ...props}),
            // (props: MaterialProps = {}) => texture_shader_material({texture_path: '../../textures/layer1.png', side: THREE.FrontSide, width:3.5, height:2, ...props}),
            // (props: MaterialProps = {}) => msdf_material({side: THREE.FrontSide, color: 0xff0000, ...props}),
            // (props: MaterialProps = {}) => seigaiha({ side: THREE.FrontSide, ...props }),
            (props: MaterialProps = {}) => seigaiha({ side: THREE.BackSide, color1: 0x000000, ...props })
            // (props: MaterialProps = {}) => harlequin_circles({ side: THREE.FrontSide, ...props}),
            // (props: MaterialProps = {}) => harlequin_circles({ side: THREE.BackSide, color0: 0x00ffff, ...props}),
            // (props: MaterialProps = {}) => new THREE.MeshBasicMaterial({ color: 0x2288ff, side: THREE.BackSide, ...props })
        ];
        const scene = new BuildThingScene({ thing_t, renderer, material_factories });
        return {
            update_scene: scene.update_scene,
            camera: scene.camera,
            resetter: scene.resetter
        };
    };

export const build_thing_from_seed =
    (verts: [number, number][]) =>
    (renderer: THREE.WebGLRenderer): SceneFunctions => {
        const thing_t: ThingTemplate = [[{ vertices: verts, links: verts.map((_) => null), transform: [0, 0, 0] }]];
        return build_thing_scene(thing_t)(renderer);
    };





export const business_card = build_thing_from_seed(
    [
        [-1.75, 1],
        [1.75, 1],
        [1.75, -1],
        [-1.75, -1], 
    ],
    // 0x000000,
    // 0x000000,
    // 0xffffff,
)