(function() {
  'use strict';

  // vendors
  var angular = require('angular');
  require('angular-ui-router');

  // module definition
  angular.module('app', [

    /*
     * Angular modules
     */
     // 'ngAnimate'

    /*
     * 3rd Party modules
     */
    'ui.router',

    /*
     * States
     */
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
