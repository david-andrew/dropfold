# build in tmp folder
bunx tsc
sed -i '1s|.*|import * as THREE from "./three.module.min.js";|' tmp/index.js

# copy to dist folder
rm -rf dist
mkdir dist
cp tmp/index.js dist/index.js
cp three.module.min.js dist/three.module.min.js
cp src/index.html dist/index.html
rm -rf tmp