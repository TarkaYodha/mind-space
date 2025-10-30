#!/bin/bash

# Create a clean directory for essential packaging
mkdir -p /tmp/mindspace-essential

# Copy essential files only
cp -r app /tmp/mindspace-essential/
cp -r components /tmp/mindspace-essential/
cp -r hooks /tmp/mindspace-essential/
cp -r lib /tmp/mindspace-essential/
cp -r public /tmp/mindspace-essential/
cp -r styles /tmp/mindspace-essential/

# Copy essential config files
cp package.json /tmp/mindspace-essential/
cp tsconfig.json /tmp/mindspace-essential/
cp next.config.mjs /tmp/mindspace-essential/
cp tailwind.config.js /tmp/mindspace-essential/
cp postcss.config.mjs /tmp/mindspace-essential/
cp middleware.ts /tmp/mindspace-essential/
cp next-env.d.ts /tmp/mindspace-essential/
cp .env.local /tmp/mindspace-essential/

# Create the zip file
cd /tmp
zip -r ~/Documents/mindspace-essential.zip mindspace-essential

echo "Essential package created at ~/Documents/mindspace-essential.zip"

# Cleanup
rm -rf /tmp/mindspace-essential