/**
 * Created by lerry on 8/10/16.
 */
"use strict";

var ng_core = require('@angular/core');
var ng_router = require('@angular/router');

var heroServices = require('./hero.services');
var heroSearchComponent = require('./hero.search.component');

var DashboardComponent =
    ng_core.Component({
        selector: 'my-dashboard',
        templateUrl: './app/dashboard.component.html',
        styleUrls:['./app/dashboard.component.css'],
        providers:[ heroServices.HeroService ],
        directives: [ heroSearchComponent.HeroSearchComponent ]
    })
        .Class({
            constructor:[ng_router.Router, heroServices.HeroService, function (router, heroService) {
                this._router = router;
                this._heroService = heroService;
            }],
            getHeroes:function () {
                var _this = this;
                this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
            },
            ngOnInit:function () {
                return this.getHeroes();
            },
            gotoDetail:function(hero){
                var link = ['./detail', hero.id];
                this._router.navigate(link);
            }
        });

exports.DashboardComponent = DashboardComponent;
