'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

/**
 * angular templates
 **/
gulp.task('templates', function () {
  return gulp.src('app/scripts/**/*.html')
    .pipe(gulp.dest('.tmp/templates'))
    .pipe($.size());
});

gulp.task('templates:dist', ['templates'], function() {
  return gulp.src(['.tmp/templates/**/*.html'])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: 'app',
      prefix: ''
    }))
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest('.tmp/templates'))
    .pipe($.size());
});

/**
 * html
 **/
gulp.task('html:dist', function () {
  return gulp.src('app/*.html')
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});
