'use strict';

var angular = require('angular');
require('angular-ui-router');

// namespace
var Namespace = require('namespacejs');
Namespace.create('myApp.states.home').means({});

/**
 * @constructor
 * @ngInject
 */
myApp.states.home.Configuration = function($stateProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "states/home/home.html"
    });
}

/**
 * home module
 */
angular.module('myApp.states.home', [])
  .config(myApp.states.home.Configuration);
