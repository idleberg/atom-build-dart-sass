'use babel';

import { configSchema, getConfig } from './config';
import { EventEmitter } from 'events';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import { spawnSync } from 'child_process';
import { which } from './util';
import meta from '../package.json';

export { configSchema as config };

export function provideBuilder() {
  return class DartSassProvider extends EventEmitter {
    constructor(cwd) {
      super();
      this.cwd = cwd;
      atom.config.observe('build-dart-sass.customArguments', () =>
        this.emit('refresh')
      );
    }

    getNiceName() {
      return 'Sass';
    }

    isEligible() {
      if (getConfig('alwaysEligible') === true) {
        return true;
      }

      const cmd = spawnSync(which(), [getConfig('pathToSass')]);
      if (!cmd.stdout?.toString()?.length) {
        return false;
      }

      return true;
    }

    settings() {
      const errorMatch = [
        '\\s*file://(?<file>.*) (?<line>\\d+):(?<column>\\d+)',
      ];

      const pathToSass = getConfig('pathToSass') || 'sass';
      const customArguments = getConfig('customArguments').trim().split(' ');

      return [
        {
          name: 'Sass',
          exec: pathToSass,
          args: ['{FILE_ACTIVE}', '{FILE_ACTIVE_NAME_BASE}.css'],
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'dart-sass:compile',
          errorMatch: errorMatch,
        },
        {
          name: 'Sass (user)',
          exec: pathToSass,
          args: customArguments,
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          atomCommandName: 'dart-sass:compile-with-user-settings',
          errorMatch: errorMatch,
        },
      ];
    }
  };
}

// This package depends on build, make sure it's installed
export async function activate() {
  if (getConfig('manageDependencies') === true) {
    satisfyDependencies(meta.name);
  }
}
