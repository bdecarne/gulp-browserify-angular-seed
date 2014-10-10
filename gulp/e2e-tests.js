'use strict';

var gulp = require('gulp');
var karma = require('gulp-karma');
var browserSync = require('browser-sync');

gulp.task('e2e-only', function (done) {
  var testFiles = [
    'test/e2e/**/*.js'
  ];
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'test/karma.conf.js',
      action: 'run'
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
  // todo
});

gulp.task('e2e', ['serve:e2e', 'e2e-only']);
gulp.task('e2e:src', ['serve:e2e', 'e2e-only']);
gulp.task('e2e:dist', ['serve:e2e:dist', 'e2e-only']);
