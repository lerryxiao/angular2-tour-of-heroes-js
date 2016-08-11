/**
 * Created by lerry on 8/3/16.
 */
"use strict";
var ng_core = require('@angular/core');
var ng_router = require('@angular/router');

var heroService = require('./hero.services');
var heroDetailComponent = require('./hero-detail.component');

var HeroesComponent =
    ng_core.Component({
        selector: 'my-heroes',
        templateUrl: 'app/heroes.component.html',
        styleUrls: ['app/heroes.component.css'],
        directives: [heroDetailComponent.HeroDetailComponent],
    })
        .Class({
            constructor: [ng_router.Router, heroService.HeroService, function (router, heroService) {
                this._router = router;
                this._heroService = heroService;
            }],
            onSelect: function (hero) {
                this.selectedHero = hero;
            },
            getHeroes: function () {

                var _this = this;
                this._heroService.getHeroes().then(function (heroes) {
                    return _this.heroes = heroes;
                });
            },
            ngOnInit: function () {
                return this.getHeroes();
            },
            gotoDetail: function () {
                this._router.navigate(['/detail', this.selectedHero.id]);
            },
            addHero: function () {
                this.addingHero = true;
                this.selectedHero = null;
            },
            close: function (savedHero) {
                this.addingHero = false;
                if (savedHero) {
                    this.getHeroes();
                }
            },
            deleteHero: function (hero, event) {
                var _this = this;
                event.stopPropagation();
                this._heroService
                    .delete(hero)
                    .then(function (res) {
                        _this.heroes = _this.heroes.filter(function (h) {
                            return h !== hero;
                        });
                        if (_this.selectedHero === hero) {
                            _this.selectedHero = null;
                        }
                    })
                    .catch(function (error) {
                        return _this.error = error;
                    });
            }
        });

exports.HeroesComponent = HeroesComponent;
