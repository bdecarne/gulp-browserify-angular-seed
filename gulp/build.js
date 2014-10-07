'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

/**
 * scripts
 **/
gulp.task('scripts', function() {
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

gulp.task('scripts:dist', ['scripts', 'templates:dist'], function() {
    return gulp.src(['.tmp/scripts/app.js', '.tmp/templates/templates.js'])
        .pipe($.concat('app.js'))
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe($.size());
});

/**
 * templates
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

/**
 * images
 **/
gulp.task('images:dist', function () {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
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
