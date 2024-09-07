import * as THREE from 'three';
import { SceneFunctions } from "../main";
import font from '../../fonts/Quadon-msdf.json'
import { createTextGeometry } from '../msdf/three-bmfont-text';
import { createMSDFShader } from '../msdf/three-bmfont-text';
import { OrbitalPointer } from '../controls';




// dumb little rotating cube with a texture
export const msdf_test = (renderer: THREE.WebGLRenderer): SceneFunctions => {   
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('../../fonts/Quadon-msdf.png');
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(geometry, material);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222);
    scene.add(cube);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const controls = new OrbitalPointer({ camera, scene, domElement: renderer.domElement, getInteractables: () => [], enablePan:true});


    const textgeometry = createTextGeometry({
        text: 'Hello, World!',
        font: font,
        align: 'left',
        flipY: texture.flipY
      })
    const textmaterial = new THREE.RawShaderMaterial(createMSDFShader({
        map: texture,
        color: 0x00ffff,
        side: THREE.DoubleSide,
        transparent: true,
        // negate: true,
        depthTest: false,
        depthWrite: false,
        opacity: 1,
      }))

    const text = new THREE.Mesh(textgeometry, textmaterial);
    text.scale.set(0.01, 0.01, 0.01);
    // text.position.x = -2;
    // text.position.y = 1;
    // text.position.z = 0;
    text.rotation.x = Math.PI;
    scene.add(text);


    const update_scene = () => {
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    };

    const resetter = () => {
        scene.remove(cube);
    };

    return { update_scene, camera, resetter };
}