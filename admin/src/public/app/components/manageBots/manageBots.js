angular.module('sa.manageBots', [
  'ui.router'
]).config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('manageBots', {
        url: "/bots/list",
        templateUrl: "app/components/manageBots/list/list.html",
        controller: 'ManageBotsListCtrl'
      });
}]);
