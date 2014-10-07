(function() {
  'use strict';

  // requires
  require('components/logger/logger.service');

  angular
    .module('app')
    .directive('gmapImage',	gmapImageDirective);

  /**
   * @ngInject
   */
  function gmapImageDirective(logger) {
    return {
      restrict: 'A',
      scope: {
        lat: '@',
        lng: '@',
        width: '@',
        height: '@',
        zoom: '@'
      },
      link: link,
      templateUrl:'components/gmap-image/gmap-image.directive.html'
    }

    /**
     * @ngInject
     */
    function link(scope, element, attrs) {
      // link function
      logger.log('gmap-image directive linked');
    }
  }

})();
