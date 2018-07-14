# Schematics Utilities

[![npm](https://img.shields.io/npm/v/schematics-utilities.svg?colorB=brightgreen)](https://www.npmjs.com/package/schematics-utilities)
[![Package Version](https://img.shields.io/github/package-json/v/nitayneeman/schematics-utilities.svg)](https://github.com/nitayneeman/schematics-utilities)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nitayneeman/schematics-utilities/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

At the moment, none of the utility functions from the Angular Schematics package are exported.

This project was created from that purpose - _providing a collection of general and useful utilities for Schematics, based on non-exported existing functions and further_.

## How to Install

To Install using npm, simply do:

```
npm install schematics-utilities
```

## How to Use

```javascript
import { Rule, Tree } from '@angular-devkit/schematics';
// 1. Import the needed utilities
import { addPackageJsonDependency, NodeDependency, NodeDependencyType } from 'schematics-utilities';

function addDependencies(host: Tree): Tree {
  const dependencies: NodeDependency[] = [{ type: NodeDependencyType.Default, version: '^2.5.2', name: 'typescript' }];

  // 2. Just use it whenever you need :)
  dependencies.forEach(dependency => addPackageJsonDependency(host, dependency));

  return host;
}

export default function(): Rule {
  return (tree: Tree) => {
    addDependencies(tree);

    return tree;
  };
}
```

## Disclaimer

This repository contains code which is directly taken from:

- [Angular Schematics package](https://github.com/angular/angular-cli/tree/master/packages/schematics)
- [Angular Material](https://github.com/angular/material2/tree/master/src/lib/schematics/utils)

All credits go to the respective developers! 👏
