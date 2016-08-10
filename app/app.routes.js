/**
 * Created by lerry on 8/10/16.
 */
"use strict";
var ng_router = require('@angular/router');

var heroesComponent = require('./heroes.component');
var dashboardComponent = require('./dashboard.component');
var heroDetailComponent = require('./hero-detail.component');

var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboardComponent.DashboardComponent
    },
    {
        path:'heroes',
        component: heroesComponent.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: heroDetailComponent.HeroDetailComponent
    }
];

exports.AppRouterProviders = [
    ng_router.provideRouter(routes)
];