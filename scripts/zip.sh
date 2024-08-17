#!/bin/bash

set -e

# make a .zip file of the current build (with current date+time)
mkdir -p builds
zip -r builds/build-$(date +%Y-%m-%d_%H:%M:%S).zip dist