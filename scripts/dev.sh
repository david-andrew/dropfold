#!/bin/bash

bun run build
bunx chokidar-cli './src/**/*' -c 'bun run build' &
npx node scripts/dev-server.js