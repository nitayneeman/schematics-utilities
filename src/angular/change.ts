import {
  Host as originalHost,
  Change as originalChange,
  NoopChange as originalNoopChange,
  InsertChange as originalInsertChange,
  RemoveChange as originalRemoveChange,
  ReplaceChange as originalReplaceChange
} from '@schematics/angular/utility/change';

export interface Host extends originalHost {}

export interface Change extends originalChange {}

/**
 * An operation that does nothing.
 */
export class NoopChange extends originalNoopChange {}

/**
 * Will add text to the source code.
 */
export class InsertChange extends originalInsertChange {}

/**
 * Will remove text from the source code.
 */
export class RemoveChange extends originalRemoveChange {}

/**
 * Will replace text from the source code.
 */
export class ReplaceChange extends originalReplaceChange {}
