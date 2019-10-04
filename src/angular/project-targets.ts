import { SchematicsException, Tree } from '@angular-devkit/schematics';
import {
  getProjectTargets as originalGetProjectTargets,
  targetBuildNotFoundError as originalTargetBuildNotFoundError
} from '@schematics/angular/utility/project-targets';

import { WorkspaceProject, WorkspaceSchema, WorkspaceTargets } from './workspace-models';

export function getProjectTargets(project: WorkspaceProject): WorkspaceTargets;
export function getProjectTargets(workspaceOrHost: WorkspaceSchema | Tree, projectName: string): WorkspaceTargets;
export function getProjectTargets(
  projectOrHost: WorkspaceProject | Tree | WorkspaceSchema,
  projectName = ''
): WorkspaceTargets {
  // TODO: fix the type error
  return originalGetProjectTargets(<any>projectOrHost, projectName);
}

export function targetBuildNotFoundError(): SchematicsException {
  return originalTargetBuildNotFoundError();
}
