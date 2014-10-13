'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var lazypipe = require('lazypipe');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

/**
 * browserify
 **/
gulp.task('browserify', function() {
  return browserify({
    entries: ['./app/scripts/app.js'],
    paths: ['./node_modules', './app/scripts/']
  })
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('app.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('.tmp/scripts'));
});

/**
 * config
 **/
var configPipe = lazypipe()
  .pipe($.yaml)
  .pipe($.extend, 'config.js')
  .pipe($.wrap, 'angular.module(\'app\').value(\'appConfig\', <%= contents %>);');

gulp.task('config', function() {
  return gulp.src('./config/config.yml')
    .pipe(configPipe())
    .pipe(gulp.dest('./.tmp/scripts'));
});

gulp.task('config:dist', function() {
  return gulp.src(['./config/config.yml', './config/config.dist.yml'])
    .pipe(configPipe())
    .pipe(gulp.dest('./.tmp/scripts'));
});

/**
 * scripts
 **/
gulp.task('scripts', ['browserify', 'config'], function() {
  return gulp.src(['.tmp/scripts/app.js', '.tmp/scripts/config.js'])
    .pipe($.concat('app.js'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.size());
});

gulp.task('scripts:dist', ['browserify', 'config:dist', 'templates:dist'], function() {
  return gulp.src(['.tmp/scripts/app.js', '.tmp/scripts/config.js', '.tmp/templates/templates.js'])
    .pipe($.concat('app.js'))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe($.size());
});
