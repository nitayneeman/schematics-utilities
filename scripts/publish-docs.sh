#!/bin/bash

echo -e "\033[0;32mDeploying updates to gh-pages...\033[0m"

# Cleaning up the directory
npm run clean:docs

# Building the docs
npm run build:docs

# Removing the local branch
git push origin :gh-pages

# Adding changes to git
git add .

# Commit changes
msg="Deployment process - `date`"
git commit -m "$msg"

# Pushing changes
git subtree push --prefix docs origin gh-pages