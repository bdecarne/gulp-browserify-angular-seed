'use strict';

require('require-dir')('./build');
var gulp = require('gulp');

/**
 * build
 **/
gulp.task('build:dist', ['styles:dist', 'scripts:dist', 'images:dist', 'html:dist']);

/**
 * clean
 **/
gulp.task('clean', function () {
  return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.rimraf());
});
