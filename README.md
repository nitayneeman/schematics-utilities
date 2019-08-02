<p align="center">
  <img src="https://github.com/nitayneeman/schematics-utilities/blob/master/images/logo.png?raw=true" alt="Puppeteer Logo">
</p>

<h1 align="center">Schematics Utilities</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/schematics-utilities"><img src="https://img.shields.io/npm/v/schematics-utilities.svg?colorB=cb3837" alt="npm"></a>
  <a href="https://nitayneeman.github.io/schematics-utilities/"><img src="https://img.shields.io/badge/docs-typedoc-green.svg" alt="Docs"></a>
  <a href="https://www.npmjs.com/package/schematics-utilities"><img src="https://img.shields.io/npm/dt/schematics-utilities?color=blue" alt="Downloads"></a>
  <a href="https://github.com/nitayneeman/schematics-utilities/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-lightgray.svg" alt="License"></a>
</p>

<p align="center">
  <a href="https://github.com/nitayneeman/schematics-utilities#how-to-install">Installation</a> ·
  <a href="https://github.com/nitayneeman/schematics-utilities#how-to-use">Usage</a> ·
  <a href="https://github.com/nitayneeman/schematics-utilities#disclaimer">Disclaimer</a>
</p>

## ℹ️️ Description

At the moment, none of the utilities from the Angular Schematics package are exported.

This project was created from that purpose - _providing a collection of general and useful utilities for Schematics, based on non-exported existing utilities and further_.

You might use this project as a polyfill until these utilities will be exported officially by the relevant teams (and then just replace the path you import). However, consider sticking with this project for additional and unique utilities which are planned for the future.

<br>

## 🔧 How to Install

To Install using npm, simply do:

```
npm install schematics-utilities
```

<br>

## 👨🏻‍🏫 How to Use

```javascript
import { Rule, Tree } from '@angular-devkit/schematics';
// 1. Import the needed utilities
import { addPackageJsonDependency, NodeDependency, NodeDependencyType } from 'schematics-utilities';

function addDependencies(host: Tree): Tree {
  const dependencies: NodeDependency[] = [{ type: NodeDependencyType.Default, version: '4.17.10', name: 'lodash-es' }];

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

Check out the [API docs](https://nitayneeman.github.io/schematics-utilities/) for the available utilities.

<br>

## ⚠️️ Disclaimer

This repository contains code which is directly taken from:

- [Angular Schematics package](https://github.com/angular/angular-cli/tree/master/packages/schematics)
- [Angular Material](https://github.com/angular/components/tree/master/src/cdk/schematics/utils)

All credits go to the respective developers! 👏

<br>

## 💁🏻 Contributing

This is an open source project. Any contribution would be greatly appreciated!
