#!/bin/bash

echo -e "\033[0;32mDeploying updates to gh-pages...\033[0m"

# Cleaning up the directory
npm run clean:docs

# Building the docs
npm run build:docs

# Navigate to "docs" directory
cd docs

# Switching to gh-pages branch
git subtree split --prefix docs/ -b gh-pages

# Adding changes to git
git add .

# Commit changes
msg="Deployment process - `date`"
git commit -m "$msg"

# Pushing changes
git push -f origin gh-pages:gh-pages

# Removing the local branch
git branch -D gh-pages

cd ..