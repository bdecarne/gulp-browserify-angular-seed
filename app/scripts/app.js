(function() {
  'use strict';

  // vendors
  var angular = require('angular');
  require('angular-ui-router');

  // module definition
  angular.module('app', [
    // angular modules
    // contrib modules
    'ui.router',
    // app modules
    'app.states.home'
  ]).config(config);

  // states
  require('./states/home/home');

  /**
   * @ngInject
   */
  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  }

})();
