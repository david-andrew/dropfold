import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//TODO: add a disable interact mode (i.e. can still orbit, but not drag)

/**
 * Arguments passed to the OrbitalPointer constructor
 * @param camera - The camera object to be used for raycasting
 * @param scene - The scene object to be used for raycasting
 * @param domElement - The DOM element to be used for event listeners
 * @param getInteractables - A function that returns an array of meshes to be raycasted against
 * @param onPress - (optional) A user callback function to be called when the pointer is pressed
 * @param onRelease - (optional) A user callback function to be called when the pointer is released
 * @param enablePan - (optional) A boolean to enable panning in orbit controls. Default is false
 * @param showPointer - (optional) A boolean to show a small sphere at the intersection point. Default is true
 * @param meshHopping - (optional) A boolean to allow the pointer to drag over multiple meshes, otherwise restricts to the first mesh hit. Default is false
 * @param multitouchDelay - (optional) A number in milliseconds within which a multi-touch may be detected. Shorter will feel more responsive, but may  Default is 20
 */
type OrbitalPointerProps = {
    camera: THREE.Camera;
    scene: THREE.Scene;
    domElement: HTMLElement;
    getInteractables: () => THREE.Mesh[]; //TBD if this should be more general e.g. THREE.Object3D[]
    onPress?: () => void;
    onRelease?: () => void;
    enablePan?: boolean;
    showPointer?: boolean;
    meshHopping?: boolean;
    multitouchDelayMs?: number;
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
    multitouchTimer: number | null = null;
    multitouchDelayMs: number;
    isInteracting = false;
    interactionSphere: THREE.Mesh;
    touchPoint: THREE.Vector3 | null = null;
    touchMesh: THREE.Mesh | null = null;
    getInteractables: () => THREE.Mesh[];
    onPress?: () => void;
    onRelease?: () => void;
    intersects: THREE.Intersection[] = []; // current intersections returned by raycaster

    constructor({
        camera,
        scene,
        domElement,
        getInteractables,
        onPress,
        onRelease,
        enablePan = false,
        showPointer = true,
        meshHopping = false,
        multitouchDelayMs = 20
    }: OrbitalPointerProps) {
        this.cameraRef = camera;
        this.controls = new OrbitControls(camera, domElement);
        this.controls.enablePan = enablePan;
        this.showPointer = showPointer;
        this.meshHopping = meshHopping;
        this.multitouchDelayMs = multitouchDelayMs;
        this.getInteractables = getInteractables;
        this.onPress = onPress;
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

    // setShowPointer = (showPointer: boolean) => {
    //     this.showPointer = showPointer;
    // };

    updatePointer = (event: MouseEvent | TouchEvent) => {
        if ('touches' in event) {
            // Convert touch coordinates to normalized device coordinates
            this.pointer.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
            this.pointer.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
        } else {
            // Convert mouse coordinates to normalized device coordinates
            this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }
    };

    onPointerDown = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        const isTouch = 'touches' in event;

        // detect if this is a multitouch event (i.e. default to orbit controls)
        if (isTouch && event.touches.length > 1 && this.multitouchTimer !== null) {
            // Cancel the delayed call if multitouch
            clearTimeout(this.multitouchTimer);
            this.multitouchTimer = null;
            return;
        }

        // Update the pointer position
        this.updatePointer(event);

        // Update the raycaster with the camera and pointer position
        this.raycaster.setFromCamera(this.pointer, this.cameraRef);

        // Calculate objects intersecting the picking ray
        this.intersects = this.raycaster.intersectObjects(this.getInteractables());

        // If no objects are intersected, not an interaction
        if (this.intersects.length === 0) return;

        // Start interacting if an object is intersected
        if (isTouch) {
            // delayed+cancelable call if touch event
            this.multitouchTimer = setTimeout(() => {
                this.startInteracting();
                this.multitouchTimer = null;
            }, this.multitouchDelayMs);
        } else {
            // immediate call if click
            this.startInteracting();
        }
    };

    startInteracting = () => {
        // Disable orbit controls if the cube is touched/clicked
        this.controls.enabled = false;
        this.isInteracting = true;
        this.touchPoint = this.intersects[0].point;
        this.touchMesh = this.intersects[0].object as THREE.Mesh;

        // Make the interaction sphere visible and position it at the interaction location
        this.interactionSphere.visible = true && this.showPointer;
        this.interactionSphere.position.copy(this.intersects[0].point);

        // Call the user-defined callback function if it exists
        this.onPress?.();
    };

    onPointerMove = (event: MouseEvent | TouchEvent) => {
        if (!this.isInteracting) return;

        // Update the pointer position
        this.updatePointer(event);

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
        } else {
            // TODO: want to move the touch point to the closest point on the edge of the mesh
            // ideally it would stay on the face that was touched last
            // alternatively could have callback to let the client code handle whatever it wants to do here
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
