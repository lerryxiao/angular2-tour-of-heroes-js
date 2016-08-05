/**
 * Created by lerry on 8/4/16.
 */
"use strict";


var HeroDetailComponent =
    ng.core.Component({
        selector: "my-hero-detail",
        inputs:["hero"],
        template: '<div *ngIf="hero"> <h2>{{hero.name}} details!</h2> <div><label>id: </label>{{hero.id}}</div> <div> <label>name: </label> <input [(ngModel)]="hero.name" placeholder="name"/> </div> </div>'
    })
        .Class({
            constructor: function () {
            }
        });

exports.HeroDetailComponent = HeroDetailComponent;



