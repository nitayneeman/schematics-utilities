import { chain, noop, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { addPackageJsonDependency, getWorkspace, NodeDependency } from './angular';
import { addModuleImportToRootModule, getProjectFromWorkspace } from './material';

export interface NgAddSchema {
  /**
   * Skip adding dependencies and installing them
   */
  skipPackageJson?: boolean;

  /**
   * Skip adding the polyfills into the project's scripts
   */
  skipPolyfills?: boolean;

  /**
   * Skip adding the module into the imports of the project
   */
  skipModuleImport?: boolean;

  /**
   * The project that needs the polyfill scripts
   */
  project?: string;
}

export interface NgAddConfig {
  moduleName: string;
  packageName: string;
  dependencies?: NodeDependency[];
  polyfills?: string[];
}

export function addPackageJsonDependencies(dependencies: NodeDependency[] = []): Rule {
  return (host: Tree, context: SchematicContext) => {
    dependencies.forEach(dependency => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `🖊️ Added "${dependency.name}" into ${dependency.type}`);
    });

    return host;
  };
}

export function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍  Installing dependencies...`);

    return host;
  };
}

export function addModuleToImports(options: NgAddSchema, moduleName: string, packageName: string): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(
      workspace,
      options.project ? options.project : Object.keys(workspace['projects'])[0]
    );

    addModuleImportToRootModule(host, moduleName, packageName, project);
    context.logger.log('info', `🖊️ Added "${moduleName}" into the imports of "${project.name}"`);

    return host;
  };
}

export function addPolyfillsToScripts(options: NgAddSchema, polyfills: string[] = []) {
  return (host: Tree, context: SchematicContext) => {
    try {
      const angularJsonFile = host.read('angular.json');

      if (angularJsonFile) {
        const angularJsonFileObject = JSON.parse(angularJsonFile.toString('utf-8'));
        const project = options.project ? options.project : Object.keys(angularJsonFileObject['projects'])[0];
        const projectObject = angularJsonFileObject.projects[project];
        const scripts = projectObject.architect.build.options.scripts;

        polyfills.forEach(polyfill => {
          const isExist = scripts.filter(script => script.input === polyfill).length > 0;

          if (!isExist) {
            scripts.push({
              input: polyfill
            });
          }
        });
        host.overwrite('angular.json', JSON.stringify(angularJsonFileObject, null, 2));
      }
    } catch (e) {
      context.logger.log('error', `🚫 Failed to add the polyfills into the project's scripts`);
    }

    context.logger.log('info', `🖊️ Added the polyfills into the project's scripts`);

    return host;
  };
}

export function ngAdd(options: NgAddSchema, config: NgAddConfig): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : addPackageJsonDependencies(config.dependencies),
    options && options.skipPackageJson ? noop() : installPackageJsonDependencies(),
    options && options.skipModuleImport ? noop() : addModuleToImports(options, config.moduleName, config.packageName),
    options && options.skipPolyfills ? noop() : addPolyfillsToScripts(options, config.polyfills)
  ]);
}
