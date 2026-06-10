/**
 * Application orchestration: scene, controls, fold interaction, history,
 * save/load. The committed model is a FoldedState produced by replaying the
 * op history; drags preview speculative ops against the committed state and
 * commit on release.
 */
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

import { Vec2, closestBoundaryPoint, polygonCentroid } from './engine/geometry';
import {
    FoldedState,
    Crease,
    makeInitialState,
    foldedPoly,
    getCreases,
    creaseKeyPoint,
    findOverride,
    outOfPlaneFacets
} from './engine/model';
import { clampedSimpleFold } from './engine/simple_fold';
import { FoldOp, applyOp } from './engine/ops';
import { OrbitalPointer } from './controls';
import { buildPaperObject, PaperObject, PaperStyle, stateRadius } from './render/paper_mesh';
import { PatternId } from './render/materials';
import { ShapeId, shapePolygon } from './paper_shapes';

export type FoldMode = 'simple' | 'reverse' | 'squash' | 'petal';

export type PaperConfig = {
    shape: ShapeId;
    size: number;
    style: PaperStyle;
    background: string;
};

export type SaveFile = {
    version: 1;
    name: string;
    paper: PaperConfig;
    ops: FoldOp[];
};

/** A complete, restorable document state (one undo step). */
type Snapshot = {
    config: PaperConfig;
    ops: FoldOp[];
    name: string;
};

export const DEFAULT_CONFIG: PaperConfig = {
    shape: 'square',
    size: 10,
    style: {
        frontPattern: 'seigaiha',
        frontColor0: '#87ceeb',
        frontColor1: '#ffffff',
        backPattern: 'plain',
        backColor0: '#f5efdf',
        backColor1: '#ffffff',
        edgeColor: '#222222',
        thickness: 0.005
    },
    background: '#1a1d24'
};

export class App {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    controls: OrbitalPointer;

    config: PaperConfig;
    ops: FoldOp[] = [];
    committed: FoldedState;
    mode: FoldMode = 'simple';
    modelName = 'untitled';

    // linear snapshot history; each entry is a full document (config + ops +
    // name), so undo/redo span paper changes and loads, not just folds
    private history: Snapshot[] = [];
    private historyIndex = -1;

    paperObj: PaperObject | null = null;
    previewObj: PaperObject | null = null;
    meshToFacet = new Map<THREE.Mesh, number>();

    // drag state
    dragFrom: Vec2 | null = null;
    dragSign: 1 | -1 = 1;
    lastGoodTo: Vec2 | null = null;
    lastGoodOp: FoldOp | null = null;
    lastGoodState: FoldedState | null = null;

    lastPointer = new THREE.Vector2(); // last mouse position in NDC, for crease picking

    // ctrl-held 3D fold mode
    ctrlDown = false;
    private hover: { crease: Crease; facetIdx: number } | null = null;
    private highlightLine!: Line2;
    private highlightMat!: LineMaterial;
    private angleDrag: {
        crease: Crease;
        facetIdx: number;
        point: Vec2;
        baseAngle: number;
        startNDC: THREE.Vector2;
        dirNDC: THREE.Vector2; // unit NDC direction from the press point toward the crease
        degPerNDC: number; // dragging all the way to the crease opens the fold by 90 degrees
    } | null = null;

    onChange: () => void = () => {}; // UI refresh hook (mode/status/buttons)
    onSync: () => void = () => {}; // UI hook to mirror restored config + name back into the inputs

    constructor(container: HTMLElement, config: PaperConfig = DEFAULT_CONFIG) {
        this.config = structuredClone(config);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(this.renderer.domElement);
        // the canvas must hold keyboard focus for shortcuts to fire; the pointer
        // controls preventDefault mousedown (which would otherwise focus it), so
        // make it focusable and focus it explicitly on load and on press
        this.renderer.domElement.tabIndex = 0;
        this.renderer.domElement.style.outline = 'none';
        this.renderer.domElement.addEventListener('mousedown', () => this.renderer.domElement.focus());

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.config.background);
        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 18);

        this.committed = makeInitialState(shapePolygon(this.config.shape, this.config.size));

        this.controls = new OrbitalPointer({
            camera: this.camera,
            scene: this.scene,
            domElement: this.renderer.domElement,
            getInteractables: () => (this.paperObj ? this.paperObj.facetMeshes : []),
            onPress: this.onPress,
            onMove: this.onMove,
            onRelease: this.onRelease,
            faceBounded: false,
            showPlane: false,
            enablePan: true
        });
        // alt+left-drag pans, otherwise left-drag orbits; set on pointerdown in
        // the capture phase so OrbitControls (which also listens on pointerdown)
        // sees the right mapping before it handles the press
        window.addEventListener(
            'pointerdown',
            (e) => {
                this.controls.controls.mouseButtons.LEFT = e.altKey ? THREE.MOUSE.PAN : THREE.MOUSE.ROTATE;
            },
            true
        );

        window.addEventListener('resize', this.onResize);
        window.addEventListener('mousemove', this.trackPointer);
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
        window.addEventListener('blur', this.onBlur);

        this.highlightMat = new LineMaterial({ color: 0xffc83d, linewidth: 5 });
        this.highlightMat.resolution.set(window.innerWidth, window.innerHeight);
        this.highlightMat.depthTest = false;
        this.highlightLine = new Line2(new LineGeometry(), this.highlightMat);
        this.highlightLine.renderOrder = 10;
        this.highlightLine.visible = false;
        this.scene.add(this.highlightLine);

        this.rebuild();
        this.record(); // seed history with the empty sheet
        this.renderer.domElement.focus();
        this.animate();
    }

    // ------------------------------------------------------------ rendering

    private buildObject = (state: FoldedState): PaperObject => {
        const obj = buildPaperObject(state, this.config.style);
        this.scene.add(obj.group);
        return obj;
    };

    private removeObject = (obj: PaperObject | null) => {
        if (!obj) return;
        this.scene.remove(obj.group);
        obj.dispose();
    };

    /** Rebuild the visible committed object. */
    rebuild = () => {
        this.removeObject(this.paperObj);
        this.removeObject(this.previewObj);
        this.previewObj = null;
        this.paperObj = this.buildObject(this.committed);
        this.meshToFacet = new Map(this.paperObj.facetMeshes.map((m, i) => [m, i]));
        if (this.ctrlDown && !this.angleDrag) this.updateHover();
        this.onChange();
    };

    private showPreview = (state: FoldedState) => {
        this.removeObject(this.previewObj);
        this.previewObj = this.buildObject(state);
        if (this.paperObj) this.paperObj.group.visible = false;
    };

    private clearPreview = () => {
        this.removeObject(this.previewObj);
        this.previewObj = null;
        if (this.paperObj) this.paperObj.group.visible = true;
    };

    animate = () => {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
    };

    onResize = () => {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.highlightMat.resolution.set(window.innerWidth, window.innerHeight);
        for (const obj of [this.paperObj, this.previewObj]) {
            obj?.group.traverse((o) => {
                const mat = (o as THREE.Mesh).material as { resolution?: THREE.Vector2 };
                if (mat?.resolution) mat.resolution.set(window.innerWidth, window.innerHeight);
            });
        }
    };

    // ---------------------------------------------------------- interaction

    private trackPointer = (e: MouseEvent) => {
        this.lastPointer.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
        if (this.ctrlDown && !this.controls.isInteracting) this.updateHover();
    };

    onPress = () => {
        if (this.ctrlDown) {
            this.startAngleDrag();
            return;
        }
        const mesh = this.controls.touchMesh;
        if (!mesh || !this.controls.touchPoint || !this.controls.touchNormal) return;
        const facetIdx = this.meshToFacet.get(mesh);
        if (facetIdx === undefined) return;
        // 3D-lifted facets can't be flat-folded; use ctrl-drag on their hinge instead
        if (outOfPlaneFacets(this.committed).has(facetIdx)) return;

        this.dragSign = this.controls.touchNormal.z >= 0 ? 1 : -1;

        // the fold starts from the closest point on the grabbed facet's boundary
        const touch2d: Vec2 = [this.controls.touchPoint.x, this.controls.touchPoint.y];
        const poly = foldedPoly(this.committed.facets[facetIdx]);
        this.dragFrom = closestBoundaryPoint(poly, touch2d).point;
        this.lastGoodTo = null;
        this.lastGoodOp = null;
        this.lastGoodState = null;
    };

    onMove = () => {
        if (this.angleDrag) {
            this.moveAngleDrag();
            return;
        }
        if (!this.dragFrom || !this.controls.touchPoint) return;
        const to: Vec2 = [this.controls.touchPoint.x, this.controls.touchPoint.y];

        if (this.mode === 'simple') {
            // clamps the drag to the furthest valid fold along the way
            const r = clampedSimpleFold(
                this.committed,
                { from: this.dragFrom, to, sign: this.dragSign },
                this.lastGoodTo
            );
            if (r) {
                this.lastGoodTo = r.params.to;
                this.lastGoodOp = { type: 'simple', ...r.params };
                this.lastGoodState = r.state;
                this.showPreview(r.state);
            } else if (this.lastGoodState) {
                this.showPreview(this.lastGoodState);
            }
        } else {
            const op: FoldOp = { type: this.mode, grab: this.dragFrom, to, sign: this.dragSign };
            const result = applyOp(this.committed, op);
            if (result) {
                this.lastGoodTo = to;
                this.lastGoodOp = op;
                this.lastGoodState = result;
                this.showPreview(result);
            } else if (this.lastGoodState) {
                this.showPreview(this.lastGoodState);
            }
        }
    };

    onRelease = () => {
        if (this.lastGoodOp && this.lastGoodState) {
            this.commitOp(this.lastGoodOp, this.lastGoodState);
        }
        this.dragFrom = null;
        this.angleDrag = null;
        this.lastGoodTo = null;
        this.lastGoodOp = null;
        this.lastGoodState = null;
        this.clearPreview();
        this.rebuild();
        // rebuild refreshes the hover highlight while Ctrl is held; once it's
        // released there's nothing to refresh it, so clear it explicitly
        if (!this.ctrlDown) this.clearHover();
    };

    // ------------------------------------------------------- ctrl 3D folding

    /**
     * Crease targeted by the cursor: on the hovered facet, the crease hit by
     * the ray from the cursor through the facet's center (so pointing the
     * mouse "at" an edge from inside the facet selects it); falls back to the
     * nearest crease.
     */
    private pickCrease = (): { crease: Crease; facetIdx: number } | null => {
        if (!this.paperObj) return null;
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(this.lastPointer, this.camera);
        const hits = raycaster.intersectObjects(this.paperObj.facetMeshes);
        if (hits.length === 0) return null;
        const mesh = hits[0].object as THREE.Mesh;
        const facetIdx = this.meshToFacet.get(mesh);
        if (facetIdx === undefined) return null;
        const local = hits[0].point.clone().applyMatrix4(mesh.matrixWorld.clone().invert());
        const p: Vec2 = [local.x, local.y];

        const creases = getCreases(this.committed).filter((c) => c.a === facetIdx || c.b === facetIdx);
        if (creases.length === 0) return null;

        const c0 = polygonCentroid(this.committed.facets[facetIdx].poly);
        const dLen = Math.hypot(c0[0] - p[0], c0[1] - p[1]);
        let best: Crease | null = null;
        if (dLen > 1e-6) {
            const dir: Vec2 = [(c0[0] - p[0]) / dLen, (c0[1] - p[1]) / dLen];
            let bestT = Infinity;
            for (const c of creases) {
                const t = raySegIntersect(p, dir, c.seg);
                if (t !== null && t > 1e-6 && t < bestT) {
                    bestT = t;
                    best = c;
                }
            }
        }
        if (!best) {
            let bestD = Infinity;
            for (const c of creases) {
                const d = distToSeg(p, c.seg[0], c.seg[1]);
                if (d < bestD) {
                    bestD = d;
                    best = c;
                }
            }
        }
        return best ? { crease: best, facetIdx } : null;
    };

    private setHighlight = (seg: [Vec2, Vec2] | null, matrix?: THREE.Matrix4) => {
        if (!seg || !matrix) {
            this.highlightLine.visible = false;
            return;
        }
        const pts = seg.map(([x, y]) => new THREE.Vector3(x, y, 0).applyMatrix4(matrix));
        const g = new LineGeometry();
        g.setPositions(pts.flatMap((p) => [p.x, p.y, p.z]));
        this.highlightLine.geometry.dispose();
        this.highlightLine.geometry = g;
        this.highlightLine.visible = true;
    };

    private updateHover = () => {
        this.hover = this.pickCrease();
        if (this.hover && this.paperObj) {
            this.setHighlight(this.hover.crease.seg, this.paperObj.matrices[this.hover.facetIdx]);
        } else {
            this.setHighlight(null);
        }
    };

    private clearHover = () => {
        this.hover = null;
        this.setHighlight(null);
    };

    private startAngleDrag = () => {
        const pick = this.hover ?? this.pickCrease();
        if (!pick || !this.paperObj) return;
        const { crease, facetIdx } = pick;
        const mid = new THREE.Vector3(
            (crease.seg[0][0] + crease.seg[1][0]) / 2,
            (crease.seg[0][1] + crease.seg[1][1]) / 2,
            0
        )
            .applyMatrix4(this.paperObj.matrices[facetIdx])
            .project(this.camera);
        const startNDC = this.controls.pointer.clone();
        const toCrease = new THREE.Vector2(mid.x, mid.y).sub(startNDC);
        const span = Math.max(toCrease.length(), 0.02);
        this.angleDrag = {
            crease,
            facetIdx,
            point: creaseKeyPoint(crease),
            baseAngle: findOverride(this.committed, crease)?.angle ?? 180,
            startNDC,
            dirNDC: toCrease.normalize(),
            degPerNDC: 90 / span
        };
    };

    private moveAngleDrag = () => {
        const drag = this.angleDrag!;
        const d = this.controls.pointer.clone().sub(drag.startNDC).dot(drag.dirNDC);
        const angle = Math.round(Math.max(0, Math.min(180, drag.baseAngle - d * drag.degPerNDC)));
        const op: FoldOp = { type: 'angle', point: drag.point, angle };
        const next = applyOp(this.committed, op);
        if (!next) return;
        this.lastGoodOp = op;
        this.lastGoodState = next;
        this.showPreview(next);
        this.setHighlight(drag.crease.seg, this.previewObj!.matrices[drag.facetIdx]);
    };

    // ------------------------------------------------------------- keyboard

    onKeyDown = (e: KeyboardEvent) => {
        if ((e.target as HTMLElement)?.tagName === 'INPUT' || (e.target as HTMLElement)?.tagName === 'SELECT') return;
        if (e.key === 'Control' && !this.ctrlDown) {
            this.ctrlDown = true;
            if (!this.controls.isInteracting) this.updateHover();
            return;
        }
        if (e.ctrlKey || e.metaKey) {
            if (e.key.toLowerCase() === 'z') {
                e.preventDefault();
                if (e.shiftKey) this.redo();
                else this.undo();
            }
            return;
        }
        switch (e.key) {
            case 'q':
            case 'Q':
                this.setMode('simple');
                break;
            case 'r':
            case 'R':
                this.setMode('reverse');
                break;
            case 's':
            case 'S':
                this.setMode('squash');
                break;
            case 'p':
            case 'P':
                this.setMode('petal');
                break;
        }
    };

    onKeyUp = (e: KeyboardEvent) => {
        if (e.key === 'Control') {
            this.ctrlDown = false;
            if (!this.angleDrag) this.clearHover();
        }
    };

    onBlur = () => {
        this.ctrlDown = false;
        if (!this.angleDrag) this.clearHover();
    };

    setMode = (mode: FoldMode) => {
        this.mode = mode;
        this.onChange();
    };

    // -------------------------------------------------------------- history

    private replayAll = (): FoldedState => {
        let state = makeInitialState(shapePolygon(this.config.shape, this.config.size));
        for (const op of this.ops) {
            const next = applyOp(state, op);
            if (next === null) {
                console.error('history replay failed at op', op);
                break;
            }
            state = next;
        }
        return state;
    };

    private snapshot = (): Snapshot => ({
        config: structuredClone(this.config),
        ops: structuredClone(this.ops),
        name: this.modelName
    });

    /** Record the current document as a new history step (drops any redo tail). */
    private record = () => {
        const snap = this.snapshot();
        const cur = this.history[this.historyIndex];
        if (cur && JSON.stringify(cur) === JSON.stringify(snap)) return;
        this.history = this.history.slice(0, this.historyIndex + 1);
        this.history.push(snap);
        this.historyIndex = this.history.length - 1;
        this.onChange();
    };

    private restore = () => {
        const snap = this.history[this.historyIndex];
        this.config = structuredClone(snap.config);
        this.ops = structuredClone(snap.ops);
        this.modelName = snap.name;
        this.scene.background = new THREE.Color(this.config.background);
        this.committed = this.replayAll();
        this.frameCamera();
        this.rebuild();
        this.onSync();
    };

    /** Commit a fold/angle op to the model and history (angle tweaks coalesce). */
    private commitOp = (op: FoldOp, state: FoldedState) => {
        const last = this.ops[this.ops.length - 1];
        if (
            op.type === 'angle' &&
            last?.type === 'angle' &&
            Math.hypot(last.point[0] - op.point[0], last.point[1] - op.point[1]) < 1e-6
        ) {
            this.ops[this.ops.length - 1] = op;
        } else {
            this.ops.push(op);
        }
        this.committed = state;
        this.record();
    };

    canUndo = () => this.historyIndex > 0;
    canRedo = () => this.historyIndex < this.history.length - 1;

    undo = () => {
        if (!this.canUndo()) return;
        this.historyIndex--;
        this.restore();
    };

    redo = () => {
        if (!this.canRedo()) return;
        this.historyIndex++;
        this.restore();
    };

    /** Live style preview (no history step); geometry assumed unchanged. */
    previewConfig = (config: PaperConfig) => {
        this.config = structuredClone(config);
        this.scene.background = new THREE.Color(this.config.background);
        this.rebuild();
    };

    /**
     * Apply a paper config as a committed history step. A shape/size change
     * starts a fresh sheet (clearing the folds) but stays undoable: undo jumps
     * back over the change to the previous paper and its folds.
     */
    commitConfig = (config: PaperConfig) => {
        const geometryChanged = config.shape !== this.config.shape || config.size !== this.config.size;
        this.config = structuredClone(config);
        this.scene.background = new THREE.Color(this.config.background);
        if (geometryChanged) {
            this.ops = [];
            this.committed = makeInitialState(shapePolygon(config.shape, config.size));
            this.frameCamera();
        }
        this.rebuild();
        this.record();
        // the triggering select/range keeps focus, which would swallow keyboard
        // shortcuts; hand focus back to the canvas
        this.renderer.domElement.focus();
    };

    /** Hard reset: fresh sheet and a cleared history (the only thing that does). */
    reset = (config?: PaperConfig) => {
        if (config) this.config = structuredClone(config);
        this.ops = [];
        this.committed = makeInitialState(shapePolygon(this.config.shape, this.config.size));
        this.scene.background = new THREE.Color(this.config.background);
        this.frameCamera();
        this.rebuild();
        this.history = [];
        this.historyIndex = -1;
        this.record();
        this.onSync();
    };

    frameCamera = () => {
        const r = stateRadius(this.committed);
        const dist = Math.max(10, r * 2.6);
        this.camera.position.set(0, 0, dist);
        this.camera.lookAt(0, 0, 0);
        this.controls.controls.target.set(0, 0, 0);
        this.controls.controls.update();
    };

    // ------------------------------------------------------------ save/load

    serialize = (): SaveFile => ({
        version: 1,
        name: this.modelName,
        paper: structuredClone(this.config),
        ops: structuredClone(this.ops)
    });

    save = () => {
        const data = JSON.stringify(this.serialize(), null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.modelName || 'untitled'}.fold.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    loadSaveFile = (file: SaveFile): string | null => {
        if (file.version !== 1) return `unsupported file version: ${(file as { version: unknown }).version}`;
        this.config = structuredClone(file.paper);
        this.modelName = file.name || 'untitled';
        this.ops = [];
        this.scene.background = new THREE.Color(this.config.background);

        let err: string | null = null;
        let state = makeInitialState(shapePolygon(this.config.shape, this.config.size));
        for (const op of file.ops) {
            const next = applyOp(state, op);
            if (next === null) {
                err = `replay failed at op ${this.ops.length + 1}/${file.ops.length}; loaded partial model`;
                break;
            }
            state = next;
            this.ops.push(op);
        }
        this.committed = state;
        this.frameCamera();
        this.rebuild();
        this.record(); // a load is its own undoable step
        this.onSync();
        return err;
    };

    loadJsonText = (text: string): string | null => {
        try {
            return this.loadSaveFile(JSON.parse(text));
        } catch (e) {
            return `could not parse file: ${e}`;
        }
    };

    dispose = () => {
        this.controls.dispose();
        window.removeEventListener('resize', this.onResize);
        window.removeEventListener('mousemove', this.trackPointer);
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);
        window.removeEventListener('blur', this.onBlur);
    };
}

/** Parameter t along the ray o + t*dir where it crosses segment seg, or null. */
const raySegIntersect = (o: Vec2, dir: Vec2, seg: [Vec2, Vec2]): number | null => {
    const ex = seg[1][0] - seg[0][0];
    const ey = seg[1][1] - seg[0][1];
    const denom = dir[0] * ey - dir[1] * ex;
    if (Math.abs(denom) < 1e-12) return null;
    const wx = seg[0][0] - o[0];
    const wy = seg[0][1] - o[1];
    const t = (wx * ey - wy * ex) / denom;
    const s = (wx * dir[1] - wy * dir[0]) / denom;
    if (s < -1e-6 || s > 1 + 1e-6) return null;
    return t;
};

const distToSeg = (p: Vec2, a: Vec2, b: Vec2): number => {
    const abx = b[0] - a[0];
    const aby = b[1] - a[1];
    const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * abx + (p[1] - a[1]) * aby) / (abx * abx + aby * aby)));
    return Math.hypot(p[0] - (a[0] + abx * t), p[1] - (a[1] + aby * t));
};
