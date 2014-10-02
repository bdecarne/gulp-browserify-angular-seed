'use strict';

// application namespace
var Namespace = require('namespacejs');
Namespace.create('myApp').means({
  states: {},
  components: {}
});

// requires
var angular = require('angular');
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
angular.module('myApp', ['ui.router', 'myApp.states.home'])
  .config(myApp.Configuration);
