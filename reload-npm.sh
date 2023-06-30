#!/bin/bash

# Remove node_modules folder
echo "Removing node_modules folder..."
rm -rf node_modules

# Remove package-lock.json
echo "Removing package-lock.json..."
rm -f package-lock.json

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Install fresh copy
echo "Installing dependencies..."
npm install

echo "Done!"

