# build-dart-sass

[![apm](https://flat.badgen.net/apm/license/build-dart-sass)](https://atom.io/packages/build-dart-sass)
[![apm](https://flat.badgen.net/apm/v/build-dart-sass)](https://atom.io/packages/build-dart-sass)
[![apm](https://flat.badgen.net/apm/dl/build-dart-sass)](https://atom.io/packages/build-dart-sass)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-build-dart-sass)](https://circleci.com/gh/idleberg/atom-build-dart-sass)
[![David](https://flat.badgen.net/david/dev/idleberg/atom-build-dart-sass)](https://david-dm.org/idleberg/atom-build-dart-sass?type=dev)

[Atom Build](https://atombuild.github.io/) provider for `dart-sass`, compiles SCSS into CSS. Supports the [linter](https://atom.io/packages/linter) package for error highlighting.

![Screenshot](https://raw.githubusercontent.com/idleberg/atom-build-dart-sass/master/screenshot.png)

*See the linter in action*

## Installation

### apm

Install `build-dart-sass` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-dart-sass`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone repository as `build-dart-sass`:

```bash
$ git clone https://github.com/idleberg/atom-build-dart-sass build-dart-sass
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `Sass [user]`

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Select active target**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Build script**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

**Jump to error**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd> or <kbd>F4</kbd>

**Toggle build panel**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

## License

This work is licensed under the [The MIT License](LICENSE.md).
