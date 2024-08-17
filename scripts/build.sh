# build in tmp folder
bunx tsc
sed -i '1s|.*|import * as THREE from "./three.module.min.js";|' tmp/index.js
cp three.module.min.js tmp/three.module.min.js
cp src/index.html tmp/index.html

# replace dist with current build
rm -rf dist
mv tmp dist
