import * as THREE from 'three';

export const cross2d = (a: THREE.Vector2, b: THREE.Vector2) => a.x * b.y - a.y * b.x;