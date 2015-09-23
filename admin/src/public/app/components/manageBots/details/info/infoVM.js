angular.module('sa.manageBots')
  .factory('ManageBotsDetailsInfoVM', ['botService', function(botService){
    var ViewModel = function(id){
      var self = this;

      _init();

      function _init(){
        botService.getBotInfo(id)
          .then(function(data){
            self.bot = data;
          });
      };
    };

    //ViewModel.prototype.

    return ViewModel;
  }]);
