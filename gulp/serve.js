'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');
//var httpProxy = require('http-proxy');
var modRewrite = require('connect-modrewrite');

/* This configuration allow you to configure browser sync to proxy your backend */
//var proxyTarget = 'http://localhost:8000/'; // The location of your backend
//var proxyApiPrefix = 'api'; // The element in the URL which differentiate between API request and static file request
//
//var proxy = httpProxy.createProxyServer({
//  target: proxyTarget
//});

//function proxyMiddleware(req, res, next) {
//  if (req.url.indexOf(proxyApiPrefix) !== -1) {
//    proxy.web(req, res);
//  } else {
//    next();
//  }
//}

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  browserSync.instance = browserSync.init(files, {
    startPath: '/index.html',
    server: {
      baseDir: baseDir,
      middleware: [
          //proxyMiddleware,
          modRewrite(['!\.html|\.woff|\.js|\.ttf|\.svg|\.css|\.png$ /index.html [L]'])
      ]
    },
    browser: browser
  });

}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    '.tmp/templates',
    '.tmp',
    'app'
  ], [
    '.tmp/styles/**/*.css',
    '.tmp/scripts/**/*.js',
    '.tmp/templates/**/*.html',
    'app/*.html',
    'app/images/**/*'
  ]);
});

gulp.task('serve:dist', ['build:dist'], function () {
  browserSyncInit('dist');
});

gulp.task('serve:e2e', function () {
  browserSyncInit(['app', '.tmp'], null, []);
});

gulp.task('serve:e2e-dist', ['watch'], function () {
  browserSyncInit('dist', null, []);
});
