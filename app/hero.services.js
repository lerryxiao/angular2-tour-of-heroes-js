/**
 * Created by lerry on 8/5/16.
 */
"use strict";

var HEROES = require('./mock-heros');

var HeroService = (function () {
    function HeroService(){}

    HeroService.prototype =  {
        "getHeroes":function () {
            return HEROES.HEROES;
        }
    }
    return HeroService;
})();

exports.HeroService = HeroService;
