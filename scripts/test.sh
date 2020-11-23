#!/bin/bash

# Change directory to parent
cd "$(dirname "$0")/.."

# Install dependencies
yarn install

# Test!
CI=true yarn test
