/**
 * Created by lerry on 8/4/16.
 */
"use strict";
var ng_core = require('@angular/core');
var ng_router = require('@angular/router');
var heroService = require('./hero.services');
var hero = require('./Hero');


var HeroDetailComponent =
    ng_core.Component({
        selector: "my-hero-detail",
        inputs: ["hero"],
        outputs:["close"],
        templateUrl: './app/hero-detail.component.html',
        styleUrls:['./app/hero-detail.component.css']
    })
        .Class({
            constructor:[ ng_router.ActivatedRoute, heroService.HeroService,function (router, heroService) {
                this._heroService = heroService;
                this._router = router;
                this.close = new ng_core.EventEmitter();
                this.navigated = false;
            }],
            ngOnInit: function () {
                var _this = this;
                this.sub = this._router.params.subscribe(function (params) {
                    if (params['id'] !== undefined) {
                        var id = +params['id'];
                        _this.navigated = true;
                        _this._heroService.getHero(id)
                            .then(function (hero) { return _this.hero = hero; });
                    }
                    else {
                        _this.navigated = false;
                        _this.hero = new hero.Hero();
                    }
                });
            },
            ngOnDestory: function () {
                this.sub.unsubscribe();
            },
            goBack:function(savedHero){
                if (savedHero === void 0) {
                    savedHero = null;
                }
                this.close.emit(savedHero);
                if (this.navigated) {
                    window.history.back();
                }
            },
            save:function () {
                var _this = this;
                this._heroService
                    .save(this.hero)
                    .then(function (hero) {
                        _this.hero = hero; // saved hero, w/ id if new
                        _this.goBack(hero);
                    })
                    .catch(function (error) { return _this.error = error; }); // TODO: Display error message
            }
        });

exports.HeroDetailComponent = HeroDetailComponent;




