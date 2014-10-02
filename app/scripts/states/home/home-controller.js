'use strict';

/**
 * @constructor
 * @ngInject
 */
myApp.states.home.HomeCtrl = function($scope) {
  $scope.name = 'Wookie';
}

// module configuration
myApp.states.home.module
  .controller('HomeCtrl', myApp.states.home.HomeCtrl);
