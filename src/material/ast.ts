import { Tree } from '@angular-devkit/schematics';
import { Schema as ComponentOptions } from '@schematics/angular/component/schema';
import {
  getSourceFile as originalGetSourceFile,
  addModuleImportToRootModule as originalAddModuleImportToRootModule,
  addModuleImportToModule as originalAddModuleImportToModule,
  findModuleFromOptions as originalFindModuleFromOptions,
  typescript
} from '@angular/cdk/schematics';

/** Reads file given path and returns TypeScript source file. */
export function getSourceFile(host: Tree, path: string): typescript.SourceFile {
  return originalGetSourceFile(host, path);
}

/** Import and add module to root app module. */
export function addModuleImportToRootModule(host: Tree, moduleName: string, src: string, project: WorkspaceProject) {
  return originalAddModuleImportToRootModule(host, moduleName, src, project);
}

/**
 * Import and add module to specific module path.
 * @param host the tree we are updating
 * @param modulePath src location of the module to import
 * @param moduleName name of module to import
 * @param src src location to import
 */
export function addModuleImportToModule(host: Tree, modulePath: string, moduleName: string, src: string) {
  return originalAddModuleImportToModule(host, modulePath, moduleName, src);
}

/** Wraps the internal find module from options with undefined path handling  */
export function findModuleFromOptions(host: Tree, options: ComponentOptions): string | undefined {
  return originalFindModuleFromOptions(host, options);
}

// TODO: Remove after finishing the migration completely
export function getIndexHtmlPath(): any {}

// TODO: Remove after finishing the migration completely
export function getStylesPath(): any {}
