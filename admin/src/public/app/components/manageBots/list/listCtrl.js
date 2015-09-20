angular.module('sa.manageBots')
  .controller('ManageBotsListCtrl', ['$scope', 'ManageBotsListVM',
   function($scope, VM){
    $scope.vm = new VM();
  }]);
