import * as THREE from 'three';
import { Vector3 as vec3 } from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

export const cross2d = (a: THREE.Vector2, b: THREE.Vector2) => a.x * b.y - a.y * b.x;

type Line = readonly [THREE.Vector2, THREE.Vector2];
export const getLineIntersection = (segment: Line, line: Line): THREE.Vector2 | null => {
    const [A, B] = segment;
    const [C, D] = line;

    // Calculate the direction vectors
    const AB = new THREE.Vector2().subVectors(B, A);
    const CD = new THREE.Vector2().subVectors(D, C);

    // Calculate the denominator
    const denominator = AB.x * CD.y - AB.y * CD.x;

    // Lines are parallel if denominator is 0
    if (denominator === 0) {
        return null; // No intersection
    }

    // Calculate t and s
    const AC = new THREE.Vector2().subVectors(C, A);
    const t = (AC.x * CD.y - AC.y * CD.x) / denominator;
    // const s = (AC.x * AB.y - AC.y * AB.x) / denominator; //don't use since CD is infinite in length

    // Check if the intersection lies within the line segment
    if (t >= 0 && t <= 1) {
        // Calculate the intersection point
        const intersection = A.clone().add(AB.multiplyScalar(t));
        return intersection;
    }

    return null; // No intersection within the segment
};

export const setup_debug_geometry = (scene: THREE.Scene, debug: boolean) => {
    if (!debug) {
        return { hide_debug_geometry: () => {}, show_debug_geometry: () => {} };
    }

    // Red sphere setup
    const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const redSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    redSphere.visible = false; // Initially hide the sphere
    scene.add(redSphere);

    // blue sphere setup
    const blueSphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const blueSphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const blueSphere = new THREE.Mesh(blueSphereGeometry, blueSphereMaterial);
    blueSphere.visible = false; // Initially hide the sphere
    scene.add(blueSphere);

    // green sphere setup
    const greenSphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const greenSphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const greenSphere = new THREE.Mesh(greenSphereGeometry, greenSphereMaterial);
    greenSphere.visible = false; // Initially hide the sphere
    scene.add(greenSphere);

    // dividing line setup
    const lineGeometry = new LineGeometry();
    lineGeometry.setPositions([-10, -10, 0, 10, 10, 0]);
    const lineMaterial = new LineMaterial({ color: 0xff00ff, linewidth: 10, dashed: false });
    lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
    const dividingLine = new Line2(lineGeometry, lineMaterial);
    dividingLine.visible = false;
    scene.add(dividingLine);

    const hide_debug_geometry = () => {
        // set the visibility of the debug geometry
        redSphere.visible = false;
        blueSphere.visible = false;
        greenSphere.visible = false;
        dividingLine.visible = false;
    };
    const show_debug_geometry = (from_point: vec3, mid_point: vec3, to_point: vec3, p0: vec3, p1: vec3) => {
        // set the visibility of the debug geometry
        redSphere.visible = true;
        blueSphere.visible = true;
        greenSphere.visible = true;
        dividingLine.visible = true;

        redSphere.position.copy(to_point);
        blueSphere.position.copy(from_point);
        greenSphere.position.copy(mid_point);
        dividingLine.geometry.setPositions([p0.x, p0.y, p0.z, p1.x, p1.y, p1.z]);
    };

    return { hide_debug_geometry, show_debug_geometry };
};
