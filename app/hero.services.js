/**
 * Created by lerry on 8/5/16.
 */
"use strict";
var ng_core = require('@angular/core');
var ng_http = require('@angular/http');
require('rxjs/add/operator/toPromise');

var HeroService = (function () {
    function HeroService(http) {
        this.heroesUrl = "/app/heroes";
        this._http = http;
    }

    HeroService.parameters = [ng_http.Http];

    HeroService.prototype = {
        getHeroes: function () {
            return this._http.get(this.heroesUrl)
                .toPromise()
                .then(function (response) {
                    return response.json().data;
                })
                .catch(this.handleError);
        },
        getHero: function (id) {
            return this.getHeroes().then(function (heroes) {
                return heroes.find(function (heroes) {
                    return heroes.id === id;
                });
            });
        },
        handleError: function (error) {
            console.log('An error occurred', error);
            return Promise.reject(error.message || error);
        },
        post: function (hero) {
            var headers = new ng_http.Headers({
                'Content-Type': 'application/json'
            });
            return this._http
                .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
                .toPromise()
                .then(function (res) {
                    return res.json().data;
                })
                .catch(this.handleError);
        },
        put: function (hero) {
            var headers = new ng_http.Headers();
            headers.append('Content-Type', 'application/json');
            var url = this.heroesUrl + "/" + hero.id;
            return this._http
                .put(url, JSON.stringify(hero), {headers: headers})
                .toPromise()
                .then(function () {
                    return hero;
                })
                .catch(this.handleError);
        },
        delete: function (hero) {
            var headers = new ng_http.Headers();
            headers.append('Content-Type', 'application/json');
            var url = this.heroesUrl + "/" + hero.id;
            return this._http
                .delete(url, {headers: headers})
                .toPromise()
                .catch(this.handleError);
        },
        save: function (hero) {
            if (hero.id) {
                return this.put(hero);
            }
            return this.post(hero);
        }
    }
    return HeroService;
})();

exports.HeroService = HeroService;
