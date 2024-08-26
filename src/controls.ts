import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// TODO: some approach for getting the results of the raycast back from this
type OrbitalPointerProps = {
    camera: THREE.Camera;
    scene: THREE.Scene;
    domElement: HTMLElement;
    getInteractables: (isInteracting:boolean) => THREE.Mesh[]; //TBD if this should be more general e.g. THREE.Object3D[]
    onRelease?: () => void;
    enablePan?: boolean;
    showPointer?: boolean;
};

export class OrbitalPointer {
    cameraRef: THREE.Camera;
    controls: OrbitControls;
    pointer = new THREE.Vector2();
    showPointer: boolean;
    raycaster = new THREE.Raycaster();
    isInteracting = false;
    interactionSphere: THREE.Mesh;
    getInteractables: (isInteracting:boolean) => THREE.Mesh[];
    onRelease?: () => void;
    intersects: THREE.Intersection[] = [];   // current intersections returned by raycaster

    constructor({ camera, scene, domElement, getInteractables, onRelease, enablePan = false, showPointer = true }: OrbitalPointerProps) {
        this.cameraRef = camera;
        this.controls = new OrbitControls(camera, domElement);
        this.controls.enablePan = enablePan;
        this.showPointer = showPointer;
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
        this.intersects = this.raycaster.intersectObjects(this.getInteractables(this.isInteracting));

        if (this.intersects.length > 0) {
            // Disable orbit controls if the cube is touched/clicked
            this.controls.enabled = false;
            this.isInteracting = true;

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
        this.intersects = this.raycaster.intersectObjects(this.getInteractables(this.isInteracting));

        if (this.intersects.length > 0) {
            // Update the sphere position as the pointer moves
            this.interactionSphere.position.copy(this.intersects[0].point);
        }
    };

    onPointerUp = () => {
        if (this.isInteracting) {
            // Re-enable orbit controls when the interaction ends
            this.controls.enabled = true;

            // Hide the sphere when the interaction ends
            this.interactionSphere.visible = false;
            this.isInteracting = false;

            this.onRelease?.();
        }
    };

    getIntersections = () => {
        return this.intersects;
    }

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
