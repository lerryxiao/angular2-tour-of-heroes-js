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
        parameters:[heroService.HeroService]
    })
        .Class({
            constructor: [heroService.HeroService,function (heroService) {
                this.title = "Tour of Heroes";
                this.heroService = heroService;
            }],
            onSelect: function (hero) {
                this.selectedHero = hero;
            },
            getHeroes:function () {
                this.heroes = this.heroService.getHeroes();
            },
            ngOnInit: function () {
                return this.getHeroes();
            }
        });

exports.AppComponent = AppComponent;
