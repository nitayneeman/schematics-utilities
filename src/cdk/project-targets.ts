import { SchematicsException } from '@angular-devkit/schematics';
import { WorkspaceProject } from '../angular';

/** Resolves the architect options for the build target of the given project. */
export function getProjectTargetOptions(project: WorkspaceProject, buildTarget: string) {
  if (project.targets && project.targets[buildTarget] && project.targets[buildTarget].options) {
    return project.targets[buildTarget].options;
  }

  if (project.architect && project.architect[buildTarget] && project.architect[buildTarget].options) {
    return project.architect[buildTarget].options;
  }

  throw new SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
}
