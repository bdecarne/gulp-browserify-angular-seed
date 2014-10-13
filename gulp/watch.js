'use strict';

var gulp = require('gulp');

gulp.task('watch', ['styles', 'scripts', 'templates'] ,function () {
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch(['app/scripts/**/*.js', 'config/config.yml'], ['scripts']);
    gulp.watch('app/scripts/**/*.html', ['templates']);
    gulp.watch('app/images/**/*', ['images']);
});
