'use strict';

require('require-dir')('./build');
var gulp = require('gulp');
var del = require('del');

/**
 * build
 **/
gulp.task('build:dist', ['styles:dist', 'scripts:dist', 'images:dist', 'html:dist']);

/**
 * clean
 **/
gulp.task('clean', function (cb) {
  del(['.tmp', 'dist'], cb);
});
