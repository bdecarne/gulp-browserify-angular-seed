(function() {
  'use strict';

  // module definition
  angular.module('app.states.home', [])
    .config(config);

  // requires
  require('./home.controller');

  /**
   * @ngInject
   */
  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "states/home/home.html",
        controller: "HomeController"
      });
  }

})();
