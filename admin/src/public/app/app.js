angular.module('sa', [
  'ui.router',
  'sa.manageBots',
  'sa.shared'
]).config(['$urlRouterProvider', '$locationProvider',
  function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
}]);
