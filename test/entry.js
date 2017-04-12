/// <reference types="jasmine" />
"use strict";
require('core-js');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('zone.js/dist/proxy');
require('zone.js/dist/jasmine-patch');
require('rxjs/Rx');
var chai_1 = require('chai');
var sinonChai = require('sinon-chai');
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/platform-browser-dynamic/testing');
chai_1.use(sinonChai);
testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
var testsContext = require.context('./', true, /\.spec/);
testsContext.keys().forEach(testsContext);
//# sourceMappingURL=entry.js.map