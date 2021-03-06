import { Tree } from '@angular-devkit/schematics';
import { addPackageToPackageJson as originalAddPackageToPackageJson } from '../cdk';

/** Adds a package to the package.json in the given host tree. */
export function addPackageToPackageJson(host: Tree, pkg: string, version: string): Tree {
  return originalAddPackageToPackageJson(host, pkg, version);
}
