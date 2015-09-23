angular.module('sa.manageBots')
  .controller('ManageBotsDetailsInfoCtrl', ['$scope', '$stateParams', 'ManageBotsDetailsInfoVM',
   function($scope, $stateParams, VM){
    $scope.vm = new VM($stateParams.id);
  }]);
