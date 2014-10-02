'use strict';

// application namespace
var Namespace = require('namespacejs');
Namespace.create('myApp').means({
  states: {},
  components: {}
});

// module definition
var angular = require('angular');
myApp.module = angular.module('myApp', ['ui.router', 'myApp.states.home']);

// requires
require('angular-ui-router');
require('./states/home/home');

/**
 * @constructor
 * @ngInject
 */
myApp.Configuration = function ($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

// main app module definition
myApp.module
  .config(myApp.Configuration);
