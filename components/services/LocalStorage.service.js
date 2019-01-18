;(function() {


    'use strict';

    angular
      .module('boilerplate')
      .factory('LocalStorage', [
        '$window', '$rootScope', LocalStorageService
      ]);

    function LocalStorageService($window, $rootScope) {

      var storage = (typeof window.localStorage === 'undefined') ? undefined : window.localStorage,
          supported = !(typeof storage === undefined || typeof window.JSON === undefined);

        angular.element($window).on('storage', function(event, name) {
          if (event.key === name) {
            $rootScope.$apply();
          }
        });


        return {};

      }

})();
