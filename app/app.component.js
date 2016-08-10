/**
 * Created by lerry on 8/10/16.
 */
"use strict";
var ng_core = require('@angular/core');
var ng_router =  require('@angular/router');

var heroService = require('./hero.services');

var AppComponent =
    ng_core.Component({
        selector: "my-app",
        templateUrl: "./app/app.component.html",
        styleUrls:['./app/app.component.css'],
        directives: [ ng_router.ROUTER_DIRECTIVES ],
        providers: [
            heroService.HeroService
        ]
})
    .Class({
        constructor:[heroService.HeroService, function(heroServices) {
            this.title = "Tour of Heroes";
            this._heroService = heroServices;
        }]
    });

exports.AppComponent = AppComponent;