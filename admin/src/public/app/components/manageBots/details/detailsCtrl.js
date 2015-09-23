angular.module('sa.manageBots')
  .controller('ManageBotsDetailsCtrl', ['$scope', 'ManageBotsDetailsVM',
   function($scope, VM){
    $scope.vm = new VM();
  }]);
