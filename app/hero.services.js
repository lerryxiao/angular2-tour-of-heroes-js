/**
 * Created by lerry on 8/5/16.
 */
"use strict";
var heroes = require('./mock-heroes');

var HeroService = (function () {
    function HeroService() {
    }

    HeroService.prototype = {
        getHeroes: function () {
            return Promise.resolve(heroes.HEROES);
        },
        getHeroesSlowly: function () {
            return new Promise(function (resolve) {
                return setTimeout(function () {
                    return resolve(heroes.HEROES);
                }, 2000);
            }); // 2 seconds
        },
        getHero:function(id){
            return this.getHeroes().then(function (heroes) {
                return heroes.find(function (heroes) {
                    return heroes.id === id;
                });
            });
        }

    }
    return HeroService;
})();

exports.HeroService = HeroService;
