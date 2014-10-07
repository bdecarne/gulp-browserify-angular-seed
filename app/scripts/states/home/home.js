'use strict';

// namespace
require('namespacejs').create('myApp.states.home').means({});

// module definition
myApp.states.home.module = angular.module('myApp.states.home', []);

// requires
require('./home-controller');

/**
 * @constructor
 * @ngInject
 */
myApp.states.home.Configuration = function($stateProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "states/home/home.html",
      controller: "HomeCtrl"
    });
}

// module configuration
myApp.states.home.module
  .config(myApp.states.home.Configuration);
