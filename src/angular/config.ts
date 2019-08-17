import {
  AppConfig,
  CliConfig,
  getWorkspacePath,
  getWorkspace,
  addProjectToWorkspace,
  configPath,
  getConfig,
  getAppFromConfig
} from '@schematics/angular/utility/config';
import { experimental } from '@angular-devkit/core';

export {
  AppConfig,
  CliConfig,
  getWorkspacePath,
  getWorkspace,
  addProjectToWorkspace,
  configPath,
  getConfig,
  getAppFromConfig
};

// TODO: Remove after finishing the migration completely
export type WorkspaceSchema = experimental.workspace.WorkspaceSchema;
export type WorkspaceProject = experimental.workspace.WorkspaceProject;