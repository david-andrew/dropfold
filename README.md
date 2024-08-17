# DropFold
Fold Paper & Drop It!

## Dev
### running locally

```bash
bun install
bun run dev
```

### building and deplying

any changes to master are automatically built and deployed to david-andrew.github.io/dropfold

You can generate the build artifact for itch.io via

```bash
bun run zip
```

### template setup

for reference if I ever want to make a vanilla typescript app
```bash
bun create vite@latest dropfold --template vanilla-ts
cd dropfold
bun install
```

## About
Submission for the GMTK Game Jam 2024. Made from scratch with three.js (no bundlers!)