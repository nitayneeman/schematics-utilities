import { WorkspaceProject, WorkspaceSchema } from '../angular';
import { getProjectFromWorkspace as originalGetProjectFromWorkspace } from '../cdk';

/**
 * Finds the specified project configuration in the workspace. Throws an error if the project
 * couldn't be found.
 */
export function getProjectFromWorkspace(workspace: WorkspaceSchema, projectName?: string): WorkspaceProject {
  return originalGetProjectFromWorkspace(workspace, projectName);
}
