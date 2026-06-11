/**
 * Custom DOM overlay UI: paper setup, fold tools, save/load, samples, help.
 */
import { App, FoldMode, PaperConfig } from '../app';
import { SHAPES, ShapeId } from '../paper_shapes';
import { PATTERNS, PatternId } from '../render/materials';
import { SAMPLES } from '../samples';
import './style.css';

const el = <K extends keyof HTMLElementTagNameMap>(
    tag: K,
    attrs: Record<string, string> = {},
    ...children: (HTMLElement | string)[]
): HTMLElementTagNameMap[K] => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
        if (k === 'class') node.className = v;
        else node.setAttribute(k, v);
    }
    for (const c of children) {
        node.append(c);
    }
    return node;
};

const touchModeIcon = (mode: '2d' | '3d') => {
    const icon = el('span', { class: 'touch-mode-icon' });
    icon.innerHTML =
        mode === '3d'
            ? `<svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M10 12 18 8 26 12 18 16Z" />
                <path d="M10 12V21L18 25V16" />
                <path d="M18 16 26 12V21L18 25" />
            </svg>`
            : `<svg viewBox="0 0 32 32" aria-hidden="true">
                <rect x="8" y="8" width="16" height="16" rx="1.5" />
            </svg>`;
    return icon;
};

let toastTimer: number | undefined;
export const toast = (msg: string) => {
    let t = document.getElementById('toast');
    if (!t) {
        t = el('div', { id: 'toast' });
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => t!.classList.remove('show'), 2600);
};

export const buildUI = (app: App) => {
    const touchCapable = navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
    const root = el('div', { id: 'ui-root' });
    const panel = el('div', { class: 'panel' });
    const panelHeader = el('div', { class: 'panel-header' });
    const panelTitle = el('div', { class: 'panel-title' });
    const collapseBtn = el('button', { class: 'panel-toggle', type: 'button', 'aria-label': 'Minimize menu' }, 'Hide');
    const panelBody = el('div', { class: 'panel-body' });
    root.appendChild(panel);
    panel.append(panelHeader, panelBody);

    panelTitle.append(el('h1', {}, 'dropfold'), el('div', { class: 'subtitle' }, 'drag the paper to fold it'));
    panelHeader.append(panelTitle, collapseBtn);

    let collapsed = true;
    const syncPanel = () => {
        panel.classList.toggle('collapsed', collapsed);
        collapseBtn.textContent = collapsed ? 'Menu' : 'Hide';
        collapseBtn.setAttribute('aria-label', collapsed ? 'Open menu' : 'Minimize menu');
    };
    collapseBtn.onclick = () => {
        collapsed = !collapsed;
        syncPanel();
    };

    // ------------------------------------------------------------ fold tools
    const tools = el('details', { open: '' });
    tools.appendChild(el('summary', {}, 'Fold tools'));
    const modeGrid = el('div', { class: 'mode-grid' });
    const modes: { mode: FoldMode; label: string; key: string }[] = [
        { mode: 'simple', label: 'Simple', key: 'Q' },
        { mode: 'reverse', label: 'Reverse', key: 'R' },
        { mode: 'squash', label: 'Squash', key: 'S' },
        { mode: 'petal', label: 'Petal', key: 'P' }
    ];
    const modeButtons = new Map<FoldMode, HTMLButtonElement>();
    for (const m of modes) {
        const b = el('button', {}, m.label, el('span', { class: 'key' }, m.key));
        b.onclick = () => app.setMode(m.mode);
        modeButtons.set(m.mode, b);
        modeGrid.appendChild(b);
    }
    tools.appendChild(modeGrid);

    const btnUndo = el('button', {}, 'Undo');
    const btnRedo = el('button', {}, 'Redo');
    const btnReset = el('button', {}, 'Reset');
    btnUndo.onclick = () => app.undo();
    btnRedo.onclick = () => app.redo();
    btnReset.onclick = () => app.reset();
    tools.appendChild(el('div', { class: 'btn-row' }, btnUndo, btnRedo, btnReset));
    const status = el('div', { class: 'status' });
    tools.appendChild(status);
    panelBody.appendChild(tools);

    // ------------------------------------------------------------ paper setup
    const paper = el('details', {});
    paper.appendChild(el('summary', {}, 'Paper'));

    const shapeSel = el('select', {});
    for (const s of SHAPES) shapeSel.appendChild(el('option', { value: s.id }, s.label));
    const sizeInput = el('input', { type: 'range', min: '6', max: '16', step: '1' });
    const sizeValue = el('span', { class: 'value' });

    const patternSelect = () => {
        const sel = el('select', {});
        for (const p of PATTERNS) sel.appendChild(el('option', { value: p.id }, p.label));
        return sel;
    };
    const frontPat = patternSelect();
    const frontC0 = el('input', { type: 'color' });
    const frontC1 = el('input', { type: 'color' });
    const backPat = patternSelect();
    const backC0 = el('input', { type: 'color' });
    const backC1 = el('input', { type: 'color' });
    const bgColor = el('input', { type: 'color' });
    const thickInput = el('input', { type: 'range', min: '0.001', max: '0.02', step: '0.0005' });

    paper.appendChild(el('div', { class: 'row' }, el('label', {}, 'Shape'), shapeSel));
    paper.appendChild(el('div', { class: 'row' }, el('label', {}, 'Size'), sizeInput, sizeValue));
    paper.appendChild(el('div', { class: 'row' }, el('label', {}, 'Front'), frontPat, frontC0, frontC1));
    paper.appendChild(el('div', { class: 'row' }, el('label', {}, 'Back'), backPat, backC0, backC1));
    paper.appendChild(el('div', { class: 'row' }, el('label', {}, 'Backdrop'), bgColor));
    paper.appendChild(el('div', { class: 'row' }, el('label', {}, 'Thickness'), thickInput));
    paper.appendChild(
        el('div', { class: 'hint' }, 'Changing shape or size starts a new sheet. Colors and patterns apply live.')
    );
    panelBody.appendChild(paper);

    const readConfig = (): PaperConfig => ({
        shape: shapeSel.value as ShapeId,
        size: Number(sizeInput.value),
        style: {
            frontPattern: frontPat.value as PatternId,
            frontColor0: frontC0.value,
            frontColor1: frontC1.value,
            backPattern: backPat.value as PatternId,
            backColor0: backC0.value,
            backColor1: backC1.value,
            edgeColor: app.config.style.edgeColor,
            thickness: Number(thickInput.value)
        },
        background: bgColor.value
    });

    const writeConfig = (c: PaperConfig) => {
        shapeSel.value = c.shape;
        sizeInput.value = String(c.size);
        sizeValue.textContent = String(c.size);
        frontPat.value = c.style.frontPattern;
        frontC0.value = c.style.frontColor0;
        frontC1.value = c.style.frontColor1;
        backPat.value = c.style.backPattern;
        backC0.value = c.style.backColor0;
        backC1.value = c.style.backColor1;
        bgColor.value = c.background;
        thickInput.value = String(c.style.thickness ?? 0.0025);
    };

    // style edits preview live and commit one history step on release;
    // geometry edits (shape/size) commit a fresh sheet, also undoable
    for (const input of [frontPat, frontC0, frontC1, backPat, backC0, backC1, bgColor, thickInput]) {
        input.addEventListener('input', () => app.previewConfig(readConfig()));
        input.addEventListener('change', () => app.commitConfig(readConfig()));
    }
    shapeSel.addEventListener('change', () => app.commitConfig(readConfig()));
    sizeInput.addEventListener('input', () => (sizeValue.textContent = sizeInput.value));
    sizeInput.addEventListener('change', () => app.commitConfig(readConfig()));

    // ------------------------------------------------------------- save/load
    const file = el('details', {});
    file.appendChild(el('summary', {}, 'Save / Load'));
    const nameInput = el('input', { type: 'text', placeholder: 'model name' });
    nameInput.value = app.modelName;
    nameInput.addEventListener('input', () => (app.modelName = nameInput.value));
    file.appendChild(el('div', { class: 'row' }, el('label', {}, 'Name'), nameInput));

    const btnSave = el('button', { class: 'primary' }, 'Save');
    btnSave.onclick = () => {
        app.save();
        toast(`saved ${app.modelName || 'untitled'}.fold.json`);
    };
    const fileInput = el('input', { type: 'file', accept: '.json,application/json', style: 'display:none' });
    fileInput.addEventListener('change', async () => {
        const f = fileInput.files?.[0];
        if (!f) return;
        const err = app.loadJsonText(await f.text());
        toast(err ?? `loaded ${f.name}`);
        fileInput.value = '';
    });
    const btnLoad = el('button', {}, 'Load…');
    btnLoad.onclick = () => fileInput.click();
    file.appendChild(el('div', { class: 'btn-row' }, btnSave, btnLoad));
    file.appendChild(el('div', { class: 'hint' }, 'You can also drag a .fold.json file anywhere onto the window.'));
    file.appendChild(fileInput);
    panelBody.appendChild(file);

    // --------------------------------------------------------------- samples
    const samples = el('details', {});
    samples.appendChild(el('summary', {}, 'Samples'));
    const sampleRow = el('div', { class: 'btn-row' });
    for (const s of SAMPLES) {
        const b = el('button', {}, s.name);
        b.onclick = () => {
            const err = app.loadSaveFile(structuredClone(s.file));
            toast(err ?? `loaded ${s.name}`);
        };
        sampleRow.appendChild(b);
    }
    samples.appendChild(sampleRow);
    panelBody.appendChild(samples);

    // ------------------------------------------------------------------ help
    const help = el('details', {});
    help.appendChild(el('summary', {}, 'Help'));
    const kbd = el('table', { class: 'kbd-table' });
    const rows: [string, string][] = [
        ['drag paper', 'fold from the grabbed edge'],
        ['drag space', 'orbit the camera'],
        ['Alt + drag', 'pan the camera'],
        ['scroll', 'zoom'],
        ['Q / R / S / P', 'fold mode: simple / reverse / squash / petal'],
        ['hold Ctrl', '3D fold mode: hover highlights a crease, drag swings the flap over it (red = locked: hinging would tear the paper)'],
        ['touch 3D button', 'on touch devices: tap once to enter 3D edge-picking mode, then tap-drag to open that crease'],
        ['Ctrl+Z', 'undo'],
        ['Ctrl+Shift+Z', 'redo']
    ];
    for (const [k, v] of rows) {
        kbd.appendChild(el('tr', {}, el('td', {}, k), el('td', {}, v)));
    }
    help.appendChild(kbd);
    help.appendChild(
        el(
            'div',
            { class: 'hint' },
            'Grab the front of the paper to fold over the top; orbit behind and grab the back to fold underneath. ' +
                'Reverse, squash and petal folds act on flaps: grab near the flap tip (reverse/petal) or its folded edge (squash) and drag where it should go.'
        )
    );
    panelBody.appendChild(help);

    // ------------------------------------------------------------- drag-drop
    const dropOverlay = el('div', { id: 'drop-overlay' }, 'drop .fold.json to load');
    document.body.appendChild(dropOverlay);

    let touch3DBtn: HTMLButtonElement | null = null;
    if (touchCapable) {
        touch3DBtn = el(
            'button',
            { id: 'touch-3d-toggle', type: 'button', 'aria-label': 'Switch to 3D mode' },
            touchModeIcon('2d'),
            el('span', { class: 'touch-mode-label' }, '2D')
        );
        touch3DBtn.onclick = () => app.setTouch3DMode(!app.touch3DMode);
        document.body.appendChild(touch3DBtn);
    }
    window.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropOverlay.classList.add('active');
    });
    window.addEventListener('dragleave', (e) => {
        if (e.relatedTarget === null) dropOverlay.classList.remove('active');
    });
    window.addEventListener('drop', async (e) => {
        e.preventDefault();
        dropOverlay.classList.remove('active');
        const f = e.dataTransfer?.files?.[0];
        if (!f) return;
        const err = app.loadJsonText(await f.text());
        toast(err ?? `loaded ${f.name}`);
    });

    // ----------------------------------------------------------------- wiring
    app.onChange = () => {
        for (const [mode, b] of modeButtons) {
            b.classList.toggle('active', app.mode === mode);
        }
        if (touch3DBtn) {
            touch3DBtn.classList.toggle('active', app.touch3DMode);
            touch3DBtn.replaceChildren(
                touchModeIcon(app.touch3DMode ? '3d' : '2d'),
                el('span', { class: 'touch-mode-label' }, app.touch3DMode ? '3D' : '2D')
            );
            touch3DBtn.setAttribute('aria-label', app.touch3DMode ? 'Switch to 2D mode' : 'Switch to 3D mode');
        }
        btnUndo.disabled = !app.canUndo();
        btnRedo.disabled = !app.canRedo();
        const n = app.ops.length;
        status.textContent = `${n} fold${n === 1 ? '' : 's'} · ${app.committed.facets.length} facets`;
    };
    // mirror restored config + name back into the inputs after undo/redo/load
    app.onSync = () => {
        writeConfig(app.config);
        nameInput.value = app.modelName;
    };

    writeConfig(app.config);
    syncPanel();
    document.body.appendChild(root);
    app.onChange();
};
