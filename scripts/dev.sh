#!/bin/bash

# initial build, 
bun run build

# watch the source files (rebuilding on changes) 
bunx chokidar-cli './src/**/*' -c 'bun run build' &

# serve the build files (reloading on changes)
bunx node scripts/dev-server.js