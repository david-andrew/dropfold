import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


import { SceneFunctions } from '../main';


let camera, scene, renderer, startTime, object, localPlane, stats;
export const clipping_plane_demo = (renderer: THREE.WebGLRenderer): SceneFunctions => {
    init(renderer);

    const update_scene = () => {

        const currentTime = Date.now();
        const time = ( currentTime - startTime ) / 1000;
    
        object.position.y = 0.8;
        // object.rotation.x = time * 0.5;
        // object.rotation.y = time * 0.2;
        // object.scale.setScalar( Math.cos( time ) * 0.125 + 0.875 );
        // localPlane.constant = Math.sin( time ) * 0.5 + 0.8;
        localPlane.normal.x = Math.sin( time );
        localPlane.constant = Math.cos( time+4.1 ) > 0 ? 0.8 : 99999 //disable plane on some condition
        // localPlane.enabled = false//Math.cos( time/10 ) > 0;
        // localPlane.normal.y = Math.cos( 2*time );

    
        stats.begin();
        renderer.render( scene, camera );
        stats.end();
    
    }
    const resetter = () => {}

    return { update_scene, resetter, camera }
}



const init = (renderer: THREE.WebGLRenderer) => {

    camera = new THREE.PerspectiveCamera( 36, window.innerWidth / window.innerHeight, 0.25, 16 );

    camera.position.set( 0, 1.3, 3 );

    scene = new THREE.Scene();

    // Lights

    scene.add( new THREE.AmbientLight( 0xcccccc ) );

    const spotLight = new THREE.SpotLight( 0xffffff, 60 );
    spotLight.angle = Math.PI / 5;
    spotLight.penumbra = 0.2;
    spotLight.position.set( 2, 3, 3 );
    spotLight.castShadow = true;
    spotLight.shadow.camera.near = 3;
    spotLight.shadow.camera.far = 10;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    scene.add( spotLight );

    const dirLight = new THREE.DirectionalLight( 0x55505a, 3 );
    dirLight.position.set( 0, 3, 0 );
    dirLight.castShadow = true;
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 10;

    dirLight.shadow.camera.right = 1;
    dirLight.shadow.camera.left = - 1;
    dirLight.shadow.camera.top	= 1;
    dirLight.shadow.camera.bottom = - 1;

    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add( dirLight );

    // ***** Clipping planes: *****

    localPlane = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), 0.8 );
    const globalPlane = new THREE.Plane( new THREE.Vector3( - 1, 0, 0 ), 0.1 );
    // Geometry

    const material = new THREE.MeshPhongMaterial( {
        color: 0x80ee10,
        shininess: 100,
        side: THREE.DoubleSide,

        // ***** Clipping setup (material): *****
        clippingPlanes: [ localPlane ],
        clipShadows: true,

        alphaToCoverage: true,

    } );

    const geometry = new THREE.TorusKnotGeometry( 0.4, 0.08, 95, 20 );

    object = new THREE.Mesh( geometry, material );
    object.castShadow = true;
    scene.add( object );

    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry( 9, 9, 1, 1 ),
        new THREE.MeshPhongMaterial( { color: 0xa0adaf, shininess: 150 } )
    );

    ground.rotation.x = - Math.PI / 2; // rotates X/Y to X/Z
    ground.receiveShadow = true;
    scene.add( ground );

    // Renderer

    // renderer = new THREE.WebGLRenderer( { antialias: true } );
    // renderer.setPixelRatio( window.devicePixelRatio );
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.setAnimationLoop( animate );
    renderer.shadowMap.enabled = true;
    // document.body.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize );

    // ***** Clipping setup (renderer): *****
    const globalPlanes = [ globalPlane ]
    const Empty = [];//Object.freeze( [] );
    renderer.clippingPlanes = Empty; // GUI sets it to globalPlanes
    renderer.localClippingEnabled = true;

    // Stats

    stats = new Stats();
    document.body.appendChild( stats.dom );

    // Controls

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.target.set( 0, 1, 0 );
    controls.update();

    // GUI

    const gui = new GUI(),
        props = {
            alphaToCoverage: true,
        },
        folderLocal = gui.addFolder( 'Local Clipping' ),
        propsLocal = {

            get 'Enabled'() {

                return renderer.localClippingEnabled;

            },
            set 'Enabled'( v ) {

                renderer.localClippingEnabled = v;

            },

            get 'Shadows'() {

                return material.clipShadows;

            },
            set 'Shadows'( v ) {

                material.clipShadows = v;

            },

            get 'Plane'() {

                return localPlane.constant;

            },
            set 'Plane'( v ) {

                localPlane.constant = v;

            }

        },
        folderGlobal = gui.addFolder( 'Global Clipping' ),
        propsGlobal = {

            get 'Enabled'() {

                return renderer.clippingPlanes !== Empty;

            },
            set 'Enabled'( v ) {

                renderer.clippingPlanes = v ? globalPlanes : Empty;

            },

            get 'Plane'() {

                return globalPlane.constant;

            },
            set 'Plane'( v ) {

                globalPlane.constant = v;

            }

        };

    gui.add( props, 'alphaToCoverage' ).onChange( function ( value ) {

        ground.material.alphaToCoverage = value;
        ground.material.needsUpdate = true;

        material.alphaToCoverage = value;
        material.needsUpdate = true;

    } );
    folderLocal.add( propsLocal, 'Enabled' );
    folderLocal.add( propsLocal, 'Shadows' );
    folderLocal.add( propsLocal, 'Plane', 0.3, 1.25 );

    folderGlobal.add( propsGlobal, 'Enabled' );
    folderGlobal.add( propsGlobal, 'Plane', - 0.4, 3 );

    // Start

    startTime = Date.now();

}

const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

