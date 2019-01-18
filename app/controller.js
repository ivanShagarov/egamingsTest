;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['QueryService'];


  function MainController(QueryService) {
    var self = this;

    // Берем тестовые данные из сервиса queryService.service.js
    self.games = QueryService.games;
  }


})();