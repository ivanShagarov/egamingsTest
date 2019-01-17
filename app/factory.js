;(function() {

  angular
    .module('boilerplate')
    .factory('getDataFromAPI', getDataFromAPI);

  getDataFromAPI.$inject = ['$http', 'LocalStorage'];

  ////////////

  function getDataFromAPI($http, LocalStorage) {

    return {
      loadData: loadData
    };

  }


})();
