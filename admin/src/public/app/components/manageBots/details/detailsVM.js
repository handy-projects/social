angular.module('sa.manageBots')
  .factory('ManageBotsDetailsVM', ['botService', function(botService){
    var ViewModel = function(id){
      var self = this;
      debugger
      _init();

      function _init(){
        // botService.getBots()
        //   .then(function(bots) {
        //     self.bots = angular.copy(bots);
        //   });
      };
    };

    //ViewModel.prototype.

    return ViewModel;
  }]);
