/**
 * Created by lerry on 8/3/16.
 */
"use strict";

var platform_browser_dynamic = require('@angular/platform-browser-dynamic');
var http = require('@angular/http');
var angular2_in_memory_web_api = require('angular2-in-memory-web-api');
var in_memory_data_service = require('./in-memory-data.service');

var app_comment = require('./app.component');
var appRouterProviders = require('./app.routes');

platform_browser_dynamic.bootstrap(app_comment.AppComponent, [
    appRouterProviders.AppRouterProviders,
    http.HTTP_PROVIDERS,
    {provide: http.XHRBackend, useClass: angular2_in_memory_web_api.InMemoryBackendService},
    {provide: angular2_in_memory_web_api.SEED_DATA, useClass: in_memory_data_service.InMemoryDataService}]);
