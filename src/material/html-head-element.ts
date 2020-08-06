import { Tree } from '@angular-devkit/schematics';
import {
  appendHtmlElementToHead as originalAppendHtmlElementToHead,
  getHtmlHeadTagElement as originalGetHtmlHeadTagElement
} from '@angular/cdk/schematics';
import { DefaultTreeElement } from 'parse5';

/** Appends the given element HTML fragment to the `<head>` element of the specified HTML file. */
export function appendHtmlElementToHead(host: Tree, htmlFilePath: string, elementHtml: string) {
  return originalAppendHtmlElementToHead(host, htmlFilePath, elementHtml);
}

/** Parses the given HTML file and returns the head element if available. */
export function getHtmlHeadTagElement(htmlContent: string): DefaultTreeElement | null {
  return originalGetHtmlHeadTagElement(htmlContent);
}
