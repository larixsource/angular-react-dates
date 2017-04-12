# angular-react-dates
[![Build Status](https://travis-ci.org/larixsource/angular-react-dates.svg?branch=master)](https://travis-ci.org/larixsource/angular-react-dates)
[![codecov](https://codecov.io/gh/larixsource/angular-react-dates/branch/master/graph/badge.svg)](https://codecov.io/gh/larixsource/angular-react-dates)
[![npm version](https://badge.fury.io/js/angular-react-dates.svg)](http://badge.fury.io/js/angular-react-dates)
[![devDependency Status](https://david-dm.org/larixsource/angular-react-dates/dev-status.svg)](https://david-dm.org/larixsource/angular-react-dates?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/larixsource/angular-react-dates.svg)](https://github.com/larixsource/angular-react-dates/issues)
[![GitHub stars](https://img.shields.io/github/stars/larixsource/angular-react-dates.svg)](https://github.com/larixsource/angular-react-dates/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/larixsource/angular-react-dates/master/LICENSE)

## Demo
Check the demo at
https://larixsource.github.io/angular-react-dates/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Angular wrapper component for Airbnb react-dates.

## Installation

Install through npm:
```
npm install --save angular-react-dates
```

Include react-dates styles somewhere globally in your app:
```
import 'react-dates/lib/css/_datepicker.css';
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { AngularReactDatesModule } from 'angular-react-dates';

@NgModule({
  imports: [
    AngularReactDatesModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<angular-date-range-picker [(ngModel)]="selectedDateRange"></angular-date-range-picker>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/larixsource/angular-react-dates/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/angular-react-dates/bundles/angular-react-dates.umd.js"></script>
<script>
    // everything is exported angularReactDates namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://larixsource.github.io/angular-react-dates/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
