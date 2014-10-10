'use strict';

var gulp = require('gulp');
var protractor = require('gulp-protractor');
var browserSync = require('browser-sync');

// Downloads the selenium webdriver
gulp.task('webdriver-update', protractor.webdriver_update);
gulp.task('webdriver-standalone', protractor.webdriver_standalone);

gulp.task('e2e-only', ['webdriver-update'], function (done) {
  var testFiles = [
    'test/e2e/**/*.js'
  ];
  return gulp.src(testFiles)
    .pipe(protractor.protractor({
      configFile: 'test/protractor.conf.js',
      args: ['--baseUrl', 'http://127.0.0.1:3000']
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
});

gulp.task('e2e-tests', ['serve:e2e', 'e2e-only']);
gulp.task('e2e-tests:dist', ['serve:e2e:dist', 'e2e-only']);
