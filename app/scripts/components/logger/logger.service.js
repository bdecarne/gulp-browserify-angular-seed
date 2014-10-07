(function() {
  'use strict';

  angular
    .module('app')
    .service('logger',	logger);

  /**
   * @ngInject
   */
  function logger() {
    this.log = function(msg) {
      console.log(msg);
    };
  }
})();
