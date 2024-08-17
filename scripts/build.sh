rm -rf dist
bunx tsc
sed -i '1s|.*|import * as THREE from "./three.module.min.js";|' dist/index.js
cp three.module.min.js dist/three.module.min.js
cp index.html dist/index.html