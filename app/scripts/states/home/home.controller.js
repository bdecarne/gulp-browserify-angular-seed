(function() {
  'use strict';

  // requires
  require('components/gmap-image/gmap-image.directive');

  // module definition
  angular.module('app.states.home')
    .controller('HomeController', HomeController);

  /**
   * @ngInject
   */
  function HomeController($scope) {
    $scope.name = 'Wookie';
  }

})();
