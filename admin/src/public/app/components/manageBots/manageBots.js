angular.module('sa.manageBots', [
  'ui.router'
]).config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('manageBots', {
        url: "/bots/list",
        templateUrl: "app/components/manageBots/list/list.html",
        controller: 'ManageBotsListCtrl'
      })
      .state('manageBotsDetails', {
        url: "/bots/:id/details",
        abstract: true,
        templateUrl: "app/components/manageBots/details/details.html",
        controller: 'ManageBotsDetailsCtrl'
      })
      .state('manageBotsDetails.info', {
        url: "",
        templateUrl: "app/components/manageBots/details/info/info.html",
        //controller: 'ManageBotsDetailsCtrl'
      })
      .state('manageBotsDetails.actions', {
        url: "/actions",
        templateUrl: "app/components/manageBots/details/actions/actions.html",
        //controller: 'ManageBotsDetailsCtrl'
      });
}]);
