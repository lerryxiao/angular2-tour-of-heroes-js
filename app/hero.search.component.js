/**
 * Created by lerry on 8/11/16.
 */
"use strict";

var ng_core = require('@angular/core');
var ng_router = require('@angular/router');
var rxjs_Observable = require('rxjs/Observable');
var rxjs_Subject = require('rxjs/Subject');

var heroSearchService = require('./hero-search.service');

var HeroSearchComponent = ng_core.Component({
    selector: 'hero-search',
    templateUrl: './app/hero.search.component.html',
    styleUrls: ['./app/hero.search.component.css'],
    providers: [ heroSearchService.HeroSearchServcie ]
})
    .Class({
        constructor:[ ng_router.Router, heroSearchService.HeroSearchServcie, function (router, heroSearchServie) {
            this._router = router;
            this._heroSearchService = heroSearchServie;
            this.searchTerms = new rxjs_Subject.Subject();
        }],
        search:function (term) {
            this.searchTerms.next(term);
        },
        gotoDetail:function (hero) {
            var link = ['/detail', hero.id];
            this._router.navigate(link);
        },
        ngOnInit:function () {
            var _this = this;
            this.heroes = this.searchTerms
                .debounceTime(300) // wait for 300ms pause in events
                .distinctUntilChanged() // ignore if next search term is same as previous
                .switchMap(function (term) { return term // switch to new observable each time
                    ? _this._heroSearchService.search(term)
                    : rxjs_Observable.Observable.of([]); })
                .catch(function (error) {
                    // TODO: real error handling
                    console.log(error);
                    return rxjs_Observable.Observable.of([]);
                });
        }
        
    });

exports.HeroSearchComponent = HeroSearchComponent;