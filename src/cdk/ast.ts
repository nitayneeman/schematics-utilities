import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { ts, typescript } from './version-agnostic-typescript';

/** Reads file given path and returns TypeScript source file. */
export function getSourceFile(host: Tree, path: string): typescript.SourceFile {
  const buffer = host.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not find file for path: ${path}`);
  }
  return ts.createSourceFile(path, buffer.toString(), ts.ScriptTarget.Latest, true);
}
