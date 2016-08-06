/**
 * Created by lerry on 8/3/16.
 */
"use strict";

var heroDetailComponent = require('./hero-detail.component');
var heroService = require('./hero.services');

var AppComponent =
    ng.core.Component({
        selector: 'my-app',
        templateUrl: 'app/appTmpl.html',
        directives: [heroDetailComponent.HeroDetailComponent],
        providers:[ heroService.HeroService ]
    })
        .Class({
            constructor: [heroService.HeroService,function (heroService) {
                this.title = "Tour of Heroes";
                this._heroService = heroService;
            }],
            onSelect: function (hero) {
                this.selectedHero = hero;
            },
            getHeroes:function () {

                var _this = this;
                this._heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
            },
            ngOnInit: function () {
                return this.getHeroes();
            }
        });

exports.AppComponent = AppComponent;
