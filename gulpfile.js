/**
 * Created by lerry on 8/5/16.
 */
"use strict";
var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');

var path = {
    main: './app/main.js',
    heroDetail: './app/hero-detail.component.js',
    mockHeroes: './app/mock-hreoes.js',
    appComponent: './app/app.component.js',
    heroesComponent: './app/heroes.component.js',
    hero: './app/Hero.js',
    heroService: './app/hero.services.js',
    routes: './app/app.routes.js',
    dashboardComponent: './app/dashboard.component.js'
}

// set browserify task
gulp.task('browserify', function () {
    browserify({
        entries: ['./app/main.js'],
        debug: true, // 告知Browserify在运行同时生成内联sourcemap用于调试
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer()) // 缓存文件内容
        .pipe(sourcemaps.init({loadMaps: true})) // 从 browserify 文件载入 map
        .pipe(sourcemaps.write('.')) // 写入 .map 文件
        .pipe(gulp.dest('./app'))
        .pipe(notify("browserify complited!"));
})


gulp.task("default", ['browserify'], function () {
    gulp.watch([
        path.main,
        path.appComponent,
        path.heroesComponent,
        path.hero,
        path.heroDetail,
        path.heroService,
        path.routes,
        path.dashboardComponent
    ], ['browserify']);
    console.log("default task");
})