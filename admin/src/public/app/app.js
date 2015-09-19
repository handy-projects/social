angular.module('sa', [
  'ui.router',
  'sa.manageBots'
]).config(['$urlRouterProvider', '$locationProvider',
  function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
}]);
