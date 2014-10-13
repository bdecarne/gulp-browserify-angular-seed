'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});

/**
 * styles
 **/
gulp.task('styles', function () {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sass({style: 'expanded'}))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.size());
});

gulp.task('styles:dist', ['styles'], function() {
  return gulp.src('.tmp/styles/**/*.css')
    .pipe($.cssmin())
    .pipe(gulp.dest('dist/styles'))
    .pipe($.size());
});
