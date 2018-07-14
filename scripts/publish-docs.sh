#!/bin/bash

echo -e "\033[0;32mDeploying updates to gh-pages...\033[0m"

# Cleaning up the directory
npm run clean:docs

# Set up a worktree in directory docs checked out on branch gh-pages
git worktree add docs gh-pages

# Building the docs
npm run build:docs

# Navigate to "docs" directory
cd docs

# Adding changes to git
git add .

# Commit changes
msg="Deployment process - `date`"
git commit -m "$msg"

# Pushing changes
git push origin gh-pages

cd ..