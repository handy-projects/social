angular.module('sa.manageBots')
  .factory('ManageBotsListVM', ['botService', '$state', function(botService, $state){
    var ViewModel = function(){
      var self = this;

      _init();

      function _init(){
        botService.getBots()
          .then(function(bots) {
            self.bots = angular.copy(bots);
          });
      };
    };

    ViewModel.prototype.goToDetails = function(id) {
      $state.go('manageBotsDetails.info', {id: id});
    };

    return ViewModel;
  }]);
