angular.module('sa.manageBots')
  .controller('ManageBotsDetailsCtrl', ['$scope', '$stateParams', 'ManageBotsDetailsVM',
   function($scope, $stateParams, VM){
    $scope.vm = new VM($stateParams.id);
  }]);
