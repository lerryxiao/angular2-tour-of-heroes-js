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

// set browserify task
gulp.task('browserify', function () {
    browserify({
        entries: ['./app/main.js','./app/app.component.js','./app/hero-detail.component.js'],
        debug: true, // 告知Browserify在运行同时生成内联sourcemap用于调试
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer()) // 缓存文件内容
        .pipe(sourcemaps.init({loadMaps: true})) // 从 browserify 文件载入 map
        .pipe(sourcemaps.write('.')) // 写入 .map 文件
        .pipe(gulp.dest('./app'));
})


gulp.task("default",function () {
    gulp.watch(['./app/main.js','./app/app.component.js','./app/hero-detail.component.js'], ['browserify']);
    console.log("default task");
})