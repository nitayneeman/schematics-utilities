import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import {
  AppConfig as OriginalAppConfig,
  CliConfig as OriginalCliConfig,
  getWorkspacePath as originalGetWorkspacePath,
  getWorkspace as originalGetWorkspace,
  addProjectToWorkspace as originalAddProjectToWorkspace,
  updateWorkspace as originalUpdateWorkspace,
  configPath as originalConfigPath,
  getConfig as originalGetConfig,
  getAppFromConfig as originalGetAppFromConfig
} from '@schematics/angular/utility/config';

import { ProjectType, WorkspaceProject, WorkspaceSchema } from './workspace-models';

// The interfaces below are generated from the Angular CLI configuration schema
// https://github.com/angular/angular-cli/blob/master/packages/@angular/cli/lib/config/schema.json
export interface AppConfig extends OriginalAppConfig {}

export interface CliConfig extends OriginalCliConfig {}

export function getWorkspacePath(host: Tree): string {
  return originalGetWorkspacePath(host);
}

export function getWorkspace(host: Tree): WorkspaceSchema {
  return originalGetWorkspace(host);
}

export function addProjectToWorkspace<TProjectType extends ProjectType = ProjectType.Application>(
  workspace: WorkspaceSchema,
  name: string,
  project: WorkspaceProject<TProjectType>
): Rule {
  return (host: Tree, context: SchematicContext) => {
    if (workspace.projects[name]) {
      throw new Error(`Project '${name}' already exists in workspace.`);
    }

    // Add project to workspace.
    workspace.projects[name] = project;

    if (!workspace.defaultProject && Object.keys(workspace.projects).length === 1) {
      // Make the new project the default one.
      workspace.defaultProject = name;
    }

    return updateWorkspace(workspace);
  };
}

export function updateWorkspace(workspace: WorkspaceSchema): Rule {
  return originalUpdateWorkspace(workspace);
}

export const configPath = originalConfigPath;

export function getConfig(host: Tree): CliConfig {
  return originalGetConfig(host);
}

export function getAppFromConfig(config: CliConfig, appIndexOrName: string): AppConfig | null {
  return originalGetAppFromConfig(config, appIndexOrName);
}
