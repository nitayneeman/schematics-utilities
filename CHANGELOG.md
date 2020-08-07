# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.2] - 2020-08-07

### Fixed

- Adjust CDK source files to allow compatibility with Angular v10 ([#3a0bdc0](https://github.com/nitayneeman/schematics-utilities/commit/3a0bdc09744effc3cf8a9e07e376a61eccc176ce)) - thanks to [@mraible](https://github.com/mraible)

## [2.0.1] - 2020-01-04

### Fixed

- Clone `@angular/cdk`'s schematics code to avoid version conflicts

## [2.0.0] - 2019-10-05

### Added

- Add new utility functions:

  - `getRouterModuleDeclaration`
  - `addRouteDeclarationToModule`
  - `updateWorkspace`
  - `getConfig`
  - `relativePathToWorkspaceRoot`
  - `getProject`
  - `isWorkspaceSchema`
  - `isWorkspaceProject`
  - `hasNgModuleImport`
  - `appendHtmlElementToHead`
  - `getHtmlHeadTagElement`
  - `targetBuildNotFoundError`

### Changed

- Change the code to import and reuse the original source

### Removed

- Remove utility functions:

  - `getHeadTag`
  - `addHeadLink`
  - `getIndexHtmlPath`
  - `getStylesPath`
  - `runPostScheduledTasks`

## [1.1.3] - 2019-08-02

### Docs

- Deploy docs after improving README file

## [1.1.2] - 2019-03-15

### Changed

- Adjust code to the original source

## [1.1.1] - 2018-09-11

### Fixed

- Change projects to use `targets` instead of `architect`

## [1.1.0] - 2018-08-03

### Added

- Add new utilities:
  - `angular/lint-fix`
  - `angular/project-targets`
  - `material/build-component`
  - `material/get-project`
  - `material/lib-versions`
  - `material/testing`

### Changed

- Adjust code to the original source

## [1.0.1] - 2018-07-19

### Removed

- Remove redundant function: `findModuleFromOptionsWithPathHandling`

## [1.0.0] - 2018-07-15

- 🎉 Initial release
