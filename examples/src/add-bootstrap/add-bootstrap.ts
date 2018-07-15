import { Rule, Tree } from '@angular-devkit/schematics';
import { addPackageJsonDependency, NodeDependency, NodeDependencyType } from 'schematics-utilities';

function addDependencies(host: Tree): Tree {
  const dependencies: NodeDependency[] = [
    { type: NodeDependencyType.Default, version: '^3.3.1', name: 'jquery' },
    { type: NodeDependencyType.Default, version: '^1.14.3', name: 'popper.js' },
    { type: NodeDependencyType.Default, version: '^4.1.2', name: 'bootstrap' }
  ];

  dependencies.forEach(dependency => addPackageJsonDependency(host, dependency));

  return host;
}

export default function(): Rule {
  return (tree: Tree) => {
    addDependencies(tree);

    return tree;
  };
}
