'use strict';
var angular = require('angular');
require('angular-ui-router');

/**
 * Main app.
 */
var app = angular.module('app', ['ui.router']);

angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "templates/home/home.html"
            })
    });