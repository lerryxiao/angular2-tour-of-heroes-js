/**
 * Created by lerry on 8/3/16.
 */
"use strict";

var app_comment = require('./app.component');
(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(app_comment.AppComment);
    });
})(window.app || (window.app = {}));