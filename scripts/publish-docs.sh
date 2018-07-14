#!/bin/bash

echo -e "\033[0;32mDeploying updates to gh-pages...\033[0m"

# Navigate to "docs" directory
cd docs

# Adding changes to git
git add .

# Commit changes
msg="Deployment process - `date`"
git commit -m "$msg"

# Pushing changes
git subtree push --prefix ./docs origin gh-pages

# Navigate to parent directory
cd ..