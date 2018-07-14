#!/bin/bash

echo -e "\033[0;32mDeploying updates to gh-pages...\033[0m"

# Stop on error
set -e

# Cleaning up the directory
npm run clean:docs

# Building the docs
npm run build:docs

# Switching to gh-pages branch
git checkout -b gh-pages

# Adding changes to git
git add -f docs

# Commit changes
msg="Deployment process - `date`"
git commit -m "$msg"

# Pushing changes
git push origin `git subtree split --prefix docs`:gh-pages --force

# Switching to master branch
git checkout master

# Removing the local branch
git branch -D gh-pages