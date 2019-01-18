;(function() {
    'use strict';
    
    angular
    .module('boilerplate')
    .factory('QueryService', [
      '$http', '$q', 'CONSTANTS', QueryService
    ]);

  function QueryService($http, $q, CONSTANTS) {

    var games = [{
      id: 0,
      filename: 'dragon_tiger.jpg',
    },{
        id: 0,
        filename: 'blaze.jpg',
    },{
        id: 0,
        filename: 'live_vip.jpg',
    }];

    var service = {
      games: games
    };

    return service;
  }


})();
