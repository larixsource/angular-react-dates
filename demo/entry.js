"use strict";
require('core-js');
require('zone.js/dist/zone');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var demo_module_1 = require('./demo.module');
if (ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(demo_module_1.DemoModule);
//# sourceMappingURL=entry.js.map