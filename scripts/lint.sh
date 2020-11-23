#!/bin/bash

# Change directory to parent
cd "$(dirname "$0")/.."

# Install dependencies
mkdir -p /usr/local/bin
curl -sfL https://raw.githubusercontent.com/reviewdog/reviewdog/master/install.sh | sh -s -- -b /usr/local/bin
yarn install

# Prep git
git config --global user.email bot@pillai.io
git config --global user.name "Pilleye Bot"

# Lint with ESLint
npx eslint --fix

# Format with Prettier
npx prettier --write ./src

# Store diff in temporary file
TMPFILE=$(mktemp)
git diff >"${TMPFILE}"
git stash -u && git stash drop
/usr/local/bin/reviewdog -f diff -f.diff.strip=1 -reporter=gitlab-mr-discussion < "${TMPFILE}"