/**
 * Created by lerry on 8/3/16.
 */
"use strict";

var HeroDetailComponent = require('./hero-detail.component');

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

var AppComponent =
    ng.core.Component({
        selector: 'my-app',
        templateUrl: 'app/appTmpl.html',
        directives: [HeroDetailComponent.HeroDetailComponent]
    })
        .Class({
            constructor: function () {
                this.title = "Tour of Heroes";
                this.heroes = HEROES;
            },
            onSelect: function (hero) {
                this.selectedHero = hero;
            }
        });

exports.AppComment = AppComponent;