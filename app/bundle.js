(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./hero-detail.component":2,"./hero.services":3}],2:[function(require,module,exports){
/**
 * Created by lerry on 8/4/16.
 */
"use strict";


var HeroDetailComponent =
    ng.core.Component({
        selector: "my-hero-detail",
        inputs: ["hero"],
        template: '<div *ngIf="hero"> <h2>{{hero.name}} details!</h2> <div><label>id: </label>{{hero.id}}</div> <div> <label>name: </label> <input [(ngModel)]="hero.name" placeholder="name"/> </div> </div>'
    })
        .Class({
            constructor: function () {
            }
        });

exports.HeroDetailComponent = HeroDetailComponent;





},{}],3:[function(require,module,exports){
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
})();

exports.HeroService = HeroService;

},{"./mock-heros":5}],4:[function(require,module,exports){
/**
 * Created by lerry on 8/3/16.
 */
"use strict";

var app_comment = require('./app.component');
document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app_comment.AppComponent);
});

},{"./app.component":1}],5:[function(require,module,exports){
/**
 * Created by lerry on 8/5/16.
 */
"use strict";
var HEROES = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];

exports.HEROES = HEROES;
},{}]},{},[4])


//# sourceMappingURL=bundle.js.map
