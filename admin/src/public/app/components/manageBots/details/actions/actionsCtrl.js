angular.module('sa.manageBots')
  .controller('ManageBotsDetailsActionsCtrl', ['$scope', '$stateParams', 'ManageBotsDetailsActionsVM',
   function($scope, $stateParams, VM){
    $scope.vm = new VM($stateParams.id);
  }]);
