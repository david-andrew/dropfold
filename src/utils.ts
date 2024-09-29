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

export const getLineCircleIntersections = (
    P1: THREE.Vector2,
    P2: THREE.Vector2,
    C: THREE.Vector2,
    r: number
): THREE.Vector2[] => {
    // Direction vector of the line
    const d = new THREE.Vector2().subVectors(P2, P1); // d = P2 - P1

    // Vector from circle center to first point of the line
    const f = new THREE.Vector2().subVectors(P1, C); // f = P1 - C

    // Quadratic coefficients
    const a = d.dot(d); // a = d • d
    const b = 2 * f.dot(d); // b = 2 * f • d
    const c = f.dot(f) - r * r; // c = f • f - r^2

    // Solving the discriminant
    const discriminant = b * b - 4 * a * c;

    // No intersection if discriminant is negative
    if (discriminant < 0) {
        return []; // No intersection
    }

    // If discriminant is zero or positive, there are one or two intersections
    const sqrtDiscriminant = Math.sqrt(discriminant);

    // Two possible values for t
    const t1 = (-b - sqrtDiscriminant) / (2 * a);
    const t2 = (-b + sqrtDiscriminant) / (2 * a);

    const intersections = [];

    // If t1 is between 0 and 1, it means the intersection point is on the line segment
    if (t1 >= 0 && t1 <= 1) {
        const intersection1 = new THREE.Vector2().addVectors(P1, d.clone().multiplyScalar(t1));
        intersections.push(intersection1);
    }

    // If t2 is between 0 and 1, it means the intersection point is on the line segment
    if (t2 >= 0 && t2 <= 1) {
        const intersection2 = new THREE.Vector2().addVectors(P1, d.clone().multiplyScalar(t2));
        intersections.push(intersection2);
    }

    return intersections; // Returns an array with 0, 1, or 2 intersection points
};

/**
 * Shrinks the vertices of a convex polygon by a given scale factor.
 * @param vertices - Array of THREE.Vector2 representing the vertices of the polygon
 * @param scaleFactor - The factor by which to shrink the polygon. A value between 0 and 1 shrinks the polygon, while > 1 would expand it.
 * @returns A new array of THREE.Vector2 with the transformed vertices.
 */
function shrinkPolygon(vertices: THREE.Vector2[], scaleFactor: number): THREE.Vector2[];
function shrinkPolygon(
    vertices: THREE.Vector2[],
    scaleFactor: number,
    extra_points: THREE.Vector2[]
): [THREE.Vector2[], THREE.Vector2[]];
function shrinkPolygon(
    vertices: THREE.Vector2[],
    scaleFactor: number,
    extra_points: THREE.Vector2[] = []
): THREE.Vector2[] | [THREE.Vector2[], THREE.Vector2[]] {
    // Calculate the centroid of the polygon
    let centroid = new THREE.Vector2(0, 0);
    let area = 0;
    for (let i = 0; i < vertices.length; i++) {
        const next_i = (i + 1) % vertices.length;
        const cross = cross2d(vertices[i], vertices[next_i]);
        area += cross;
        centroid.add(vertices[i].clone().add(vertices[next_i]).multiplyScalar(cross));
    }
    area /= 2;
    centroid.divideScalar(6 * area);

    // Create a new array for the transformed vertices
    const newVertices = vertices.map((vertex) => {
        // Vector from centroid to the vertex
        const direction = new THREE.Vector2().subVectors(vertex, centroid);
        // Scale this vector by the scale factor
        direction.multiplyScalar(scaleFactor);
        // Create the new vertex by moving along this scaled vector
        return new THREE.Vector2().addVectors(centroid, direction);
    });

    // Add the extra points
    const newExtraPoints = extra_points.map((point) => {
        // Vector from centroid to the vertex
        const direction = new THREE.Vector2().subVectors(point, centroid);
        // Scale this vector by the scale factor
        direction.multiplyScalar(scaleFactor);
        // Create the new vertex by moving along this scaled vector
        return new THREE.Vector2().addVectors(centroid, direction);
    });

    if (extra_points.length === 0) {
        return newVertices;
    }
    return [newVertices, newExtraPoints];
}
export { shrinkPolygon };

type Coord = [number, number];
export const hash_coord = (coord: Coord) => `${coord[0]}_${coord[1]}`;

/**
 * Positive modulo operation.
 * @param a a number
 * @param b a number
 * @returns `a % b`, ensuring the result is non-negative (python-style modulo)
 */
export const pmod = (a: number, b: number) => ((a % b) + b) % b;

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

/**
 * Recovers the 3x3 homogeneous transformation matrix using least squares
 * to estimate rotation, translation, and possibly mirroring between two sets of points.
 *
 * @param P0s - Array of initial points (at least 3) in THREE.Vector2
 * @param P1s - Array of transformed points corresponding to P0s in THREE.Vector2
 * @returns THREE.Matrix3 representing the transformation matrix
 */
export const recover_transform = (P0s: THREE.Vector2[], P1s: THREE.Vector2[]): THREE.Matrix3 => {
    if (P0s.length !== P1s.length || P0s.length < 3) {
        throw new Error('Both point sets must have the same number of points and at least 3 points.');
    }

    const n = P0s.length;

    // Building the matrices for the least squares system
    const A = new Array(n * 2).fill(null).map(() => new Array(6).fill(0));
    const B = new Array(n * 2).fill(0);

    for (let i = 0; i < n; i++) {
        const P0 = P0s[i];
        const P1 = P1s[i];

        // Filling the matrix for the least squares system
        A[2 * i] = [P0.x, P0.y, 1, 0, 0, 0];
        A[2 * i + 1] = [0, 0, 0, P0.x, P0.y, 1];

        // Fill the corresponding B vector (target)
        B[2 * i] = P1.x;
        B[2 * i + 1] = P1.y;
    }

    // Now solve for the least squares solution
    // A * x = B, where x = [a, b, tx, c, d, ty]
    const AT = transposeMatrix(A);
    const ATA = multiplyMatrices(AT, A);
    const ATB = multiplyMatrixVector(AT, B);
    const x = solveLinearSystem(ATA, ATB);

    // Build the 3x3 matrix from the solution vector
    const resultMatrix = new THREE.Matrix3();
    resultMatrix.set(x[0], x[1], x[2], x[3], x[4], x[5], 0, 0, 1);

    return resultMatrix;
};

/**
 * Transposes a matrix.
 */
const transposeMatrix = (matrix: number[][]): number[][] => {
    return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
};

/**
 * Multiplies two matrices.
 */
const multiplyMatrices = (A: number[][], B: number[][]): number[][] => {
    const result = new Array(A.length).fill(null).map(() => new Array(B[0].length).fill(0));
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            result[i][j] = A[i].reduce((sum, el, k) => sum + el * B[k][j], 0);
        }
    }
    return result;
};

/**
 * Multiplies a matrix with a vector.
 */
const multiplyMatrixVector = (A: number[][], B: number[]): number[] => {
    return A.map((row) => row.reduce((sum, el, i) => sum + el * B[i], 0));
};

/**
 * Solves a linear system of equations Ax = B using Gaussian elimination.
 * This is a helper function to solve for x in the least squares method.
 */
const solveLinearSystem = (A: number[][], B: number[]): number[] => {
    const n = A.length;
    const augmentedMatrix = A.map((row, i) => [...row, B[i]]);

    // Gaussian elimination
    for (let i = 0; i < n; i++) {
        // Find pivot row
        let maxRow = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(augmentedMatrix[k][i]) > Math.abs(augmentedMatrix[maxRow][i])) {
                maxRow = k;
            }
        }

        // Swap rows
        [augmentedMatrix[i], augmentedMatrix[maxRow]] = [augmentedMatrix[maxRow], augmentedMatrix[i]];

        // Make all rows below this one 0 in the current column
        for (let k = i + 1; k < n; k++) {
            const factor = augmentedMatrix[k][i] / augmentedMatrix[i][i];
            for (let j = i; j < n + 1; j++) {
                augmentedMatrix[k][j] -= factor * augmentedMatrix[i][j];
            }
        }
    }

    // Back substitution
    const x = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        x[i] = augmentedMatrix[i][n] / augmentedMatrix[i][i];
        for (let k = i - 1; k >= 0; k--) {
            augmentedMatrix[k][n] -= augmentedMatrix[k][i] * x[i];
        }
    }

    return x;
};
