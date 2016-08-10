/**
 * Created by lerry on 8/4/16.
 */
"use strict";
var ng_core = require('@angular/core');
var ng_router = require('@angular/router');
var heroService = require('./hero.services');

var HeroDetailComponent =
    ng_core.Component({
        selector: "my-hero-detail",
        inputs: ["hero"],
        templateUrl: './app/hero-detail.component.html',
        styleUrls:['./app/hero-detail.component.css']
    })
        .Class({
            constructor:[ ng_router.ActivatedRoute, heroService.HeroService,function (router, heroService) {
                this._heroService = heroService;
                this._router = router;
            }],
            ngOnInit: function () {
                var _this = this;
                this.sub = this._router.params.subscribe(function (params) {
                        var id = +params['id'];
                        _this._heroService.getHero(id)
                            .then(function (hero) { return _this.hero = hero; });
                });
            },
            ngOnDestory: function () {
                this.sub.unsubscribe();
            },
            goBack:function(){
                window.history.back();
            }
        });

exports.HeroDetailComponent = HeroDetailComponent;




