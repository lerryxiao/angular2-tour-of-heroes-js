/**
 * Created by lerry on 8/3/16.
 */
"use strict";

var platform_browser_dynamic = require('@angular/platform-browser-dynamic');

var app_comment = require('./app.component');
var appRouterProviders = require('./app.routes');

document.addEventListener('DOMContentLoaded', function() {
    platform_browser_dynamic.bootstrap(app_comment.AppComponent,[
        appRouterProviders.AppRouterProviders
    ]);
});
