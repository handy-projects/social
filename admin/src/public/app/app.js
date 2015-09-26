angular.module('sa', [
  'ui.router',
  'ngToast',
  'sa.manageBots',
  'sa.shared'
]).config(['$urlRouterProvider', '$locationProvider',
  function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
}]);
