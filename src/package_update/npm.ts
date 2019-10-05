import { logging } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { getNpmPackageJson as originalGetNpmPackageJson } from '@schematics/update/update/npm';

import { NpmRepositoryPackageJson } from './npm-package-json';

/**
 * Get the NPM repository's package.json for a package. This is p
 * @param {string} packageName The package name to fetch.
 * @param {string} registryUrl The NPM Registry URL to use.
 * @param {LoggerApi} logger A logger instance to log debug information.
 * @returns An observable that will put the pacakge.json content.
 */
export function getNpmPackageJson(
  packageName: string,
  logger: logging.LoggerApi,
  options?: {
    registryUrl?: string;
    usingYarn?: boolean;
    verbose?: boolean;
  }
): Observable<Partial<NpmRepositoryPackageJson>> {
  return originalGetNpmPackageJson(packageName, logger, options);
}
