/**
 * Created by lerry on 8/11/16.
 */
"use strict";
var ng_http = require('@angular/http');

var HeroSearchServcie = (function () {
    function HeroSearchServcie(http) {
        this._http = http;
    }

    HeroSearchServcie.parameters = [ ng_http.Http ];

    HeroSearchServcie.prototype = {
        search:function(term){
            return this._http
                .get("app/heroes/?name=" + term)
                .map(function (r) { return r.json().data; });
        }
    }

    return HeroSearchServcie;
}());


exports.HeroSearchServcie = HeroSearchServcie;
