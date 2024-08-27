import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Arguments passed to the OrbitalPointer constructor
 * @param camera - The camera object to be used for raycasting
 * @param scene - The scene object to be used for raycasting
 * @param domElement - The DOM element to be used for event listeners
 * @param getInteractables - A function that returns an array of meshes to be raycasted against
 * @param onRelease - (optional) A user callback function to be called when the pointer is released
 * @param enablePan - (optional) A boolean to enable panning in orbit controls. Default is false
 * @param showPointer - (optional) A boolean to show a small sphere at the intersection point. Default is true
 * @param meshHopping - (optional) A boolean to allow the pointer to drag over multiple meshes, otherwise restricts to the first mesh hit. Default is false
 */
type OrbitalPointerProps = {
    camera: THREE.Camera;
    scene: THREE.Scene;
    domElement: HTMLElement;
    getInteractables: () => THREE.Mesh[]; //TBD if this should be more general e.g. THREE.Object3D[]
    onRelease?: () => void;
    enablePan?: boolean;
    showPointer?: boolean;
    meshHopping?: boolean;
};

/**
 * A class for handling mouse and touch interactions to combine orbit controls with object interaction.
 * If the pointer clicks on the background, then orbit controls are enabled
 * If the pointer clicks on an object, then orbit controls are disabled and the touch point is tracked
 */
export class OrbitalPointer {
    cameraRef: THREE.Camera;
    controls: OrbitControls;
    pointer = new THREE.Vector2();
    showPointer: boolean;
    meshHopping: boolean;
    raycaster = new THREE.Raycaster();
    isInteracting = false;
    interactionSphere: THREE.Mesh;
    touchPoint: THREE.Vector3 | null = null;
    touchMesh: THREE.Mesh | null = null;
    getInteractables: () => THREE.Mesh[];
    onRelease?: () => void;
    intersects: THREE.Intersection[] = []; // current intersections returned by raycaster

    constructor({
        camera,
        scene,
        domElement,
        getInteractables,
        onRelease,
        enablePan = false,
        showPointer = true,
        meshHopping = false
    }: OrbitalPointerProps) {
        this.cameraRef = camera;
        this.controls = new OrbitControls(camera, domElement);
        this.controls.enablePan = enablePan;
        this.showPointer = showPointer;
        this.meshHopping = meshHopping;
        this.getInteractables = getInteractables;
        this.onRelease = onRelease;

        // Create a small sphere to represent the click/touch location
        const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
        this.interactionSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(this.interactionSphere);
        this.interactionSphere.visible = false;

        // Add event listeners for both touch and mouse interaction
        window.addEventListener('mousedown', this.onPointerDown, false);
        window.addEventListener('mousemove', this.onPointerMove, false);
        window.addEventListener('mouseup', this.onPointerUp, false);
        window.addEventListener('touchstart', this.onPointerDown, false);
        window.addEventListener('touchmove', this.onPointerMove, false);
        window.addEventListener('touchend', this.onPointerUp, false);
    }

    setShowPointer = (showPointer: boolean) => {
        this.showPointer = showPointer;
    };

    onPointerDown = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        if ('touches' in event) {
            // Convert touch coordinates to normalized device coordinates
            this.pointer.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
            this.pointer.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
        } else {
            // Convert mouse coordinates to normalized device coordinates
            this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        // Update the raycaster with the camera and pointer position
        this.raycaster.setFromCamera(this.pointer, this.cameraRef);

        // Calculate objects intersecting the picking ray
        this.intersects = this.raycaster.intersectObjects(this.getInteractables());

        if (this.intersects.length > 0) {
            // Disable orbit controls if the cube is touched/clicked
            this.controls.enabled = false;
            this.isInteracting = true;
            this.touchPoint = this.intersects[0].point;
            this.touchMesh = this.intersects[0].object as THREE.Mesh;

            // Log the interaction position to the console
            // console.log('Object interacted with at:', this.intersects[0].point);

            // Make the interaction sphere visible and position it at the interaction location
            this.interactionSphere.visible = true && this.showPointer;
            this.interactionSphere.position.copy(this.intersects[0].point);
        }
    };

    onPointerMove = (event: MouseEvent | TouchEvent) => {
        if (!this.isInteracting) return;

        if ('touches' in event) {
            // Convert touch coordinates to normalized device coordinates
            this.pointer.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
            this.pointer.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
        } else {
            // Convert mouse coordinates to normalized device coordinates
            this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        // Update the raycaster with the camera and pointer position
        this.raycaster.setFromCamera(this.pointer, this.cameraRef);

        // Calculate objects intersecting the picking ray
        this.intersects = this.raycaster.intersectObjects(this.meshHopping ? this.getInteractables() : [this.touchMesh]);

        if (this.intersects.length > 0) {
            // Update the touch point and mesh if the pointer moves over another mesh
            this.touchPoint = this.intersects[0].point;
            this.touchMesh = this.intersects[0].object as THREE.Mesh;

            // Update the sphere position as the pointer moves
            this.interactionSphere.position.copy(this.intersects[0].point);
        }
    };

    onPointerUp = () => {
        if (!this.isInteracting) return;

        // Re-enable orbit controls when the interaction ends
        this.controls.enabled = true;
        this.isInteracting = false;
        this.touchPoint = null;
        this.touchMesh = null;

        // Hide the sphere when the interaction ends
        this.interactionSphere.visible = false;

        // Call the user-defined callback function if it exists
        this.onRelease?.();
    };

    getIntersections = () => {
        return this.intersects;
    };

    update = () => {
        this.controls.update();
    };

    dispose = () => {
        this.controls.dispose();

        // // Clean up event listeners
        window.removeEventListener('mousedown', this.onPointerDown);
        window.removeEventListener('mousemove', this.onPointerMove);
        window.removeEventListener('mouseup', this.onPointerUp);
        window.removeEventListener('touchstart', this.onPointerDown);
        window.removeEventListener('touchmove', this.onPointerMove);
        window.removeEventListener('touchend', this.onPointerUp);

        // Clean up the interaction sphere
        this.interactionSphere.geometry.dispose();
        (this.interactionSphere.material as THREE.Material).dispose();
    };
}
