/**
 * Created by lerry on 8/3/16.
 */
"use strict";

var app_comment = require('./app.component');
document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app_comment.AppComponent);
});
