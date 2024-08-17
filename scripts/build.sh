#!/bin/bash

set -e
set -o xtrace

# build in tmp folder
mkdir -p tmp
bunx tsc
sed -i '1s|.*|import * as THREE from "./three.module.min.js";|' tmp/index.js
cp three.module.min.js tmp/three.module.min.js
cp src/index.html tmp/index.html

# replace dist with current build
if diff -qr tmp/ dist/ > /dev/null; then
    echo "skipping reload since new build is identical to current build"
    rm -rf tmp
else
    echo "loading build..."
    rm -rf dist
    mv tmp dist
fi