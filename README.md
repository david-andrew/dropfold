# DropFold

A parametric paper folding simulator built on three.js. Grab the paper with the
mouse and fold it — simple folds, inside reverse folds, squash folds and petal
folds — all geometrically exact, with arbitrarily many layers. Fold a paper
airplane, fold an origami crane, or invent something else.

## Controls

| input | action |
| --- | --- |
| drag paper | fold from the grabbed point |
| drag empty space | orbit the camera |
| `Alt` + drag | pan the camera |
| scroll | zoom |
| `Q` / `R` / `S` / `P` | fold mode: simple / reverse / squash / petal |
| hold `Ctrl` | 3D fold mode: hover highlights the targeted crease, drag swings the flap over it |
| `Ctrl+Z` / `Ctrl+Shift+Z` | undo / redo |

Grab the front of the paper to fold over the top; orbit behind and grab the
back to fold underneath. Reverse, squash and petal folds act on flaps: grab
near the flap tip (reverse/petal) or its folded edge (squash) and drag to where
it should go.

The side panel lets you pick paper shape, size, front/back patterns and
background, save your model (`*.fold.json`, also loadable via file picker or
drag-and-drop), and load the built-in samples (paper airplane, origami crane).

## How it works

The engine (`src/engine/`) is pure and parametric: a folded model is a set of
**facets** (convex paper-space polygons), each carrying a 2D **isometry**
(rigid transform + reflection bit) into the folded plane and a stacking
**layer**. Every fold op is a function `(state, params) -> state | null`:

- `simple_fold.ts` — straight-line folds with a connectivity flood (no
  tearing), layer sweeping (no passing through paper) and drag clamping.
- `compound_folds.ts` — inside reverse, squash and petal folds; each
  constructs its re-folded seed pieces and a propagation pass drags the rest
  of the paper consistently, then the result is validated (no torn creases, no
  same-layer overlaps).
- `pose.ts` — lifts the flat state into 3D over the facet adjacency tree,
  applying per-crease angle overrides and layer z-offsets.
- `ops.ts` — serializable op history; a save file is just the paper config
  plus the op list, replayed on load.

## Dev

```bash
npm install
npm run dev    # vite dev server
npm test       # vitest unit tests (geometry kernel, folds, sample replays)
```

### building and deploying

Any changes to master are automatically built and deployed to
david-andrew.github.io/dropfold

You can generate the build artifact for itch.io via

```bash
npm run zip
```
