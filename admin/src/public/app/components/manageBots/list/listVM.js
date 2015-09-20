angular.module('sa.manageBots')
  .factory('ManageBotsListVM', ['botService', function(botService){
    var ViewModel = function(){
      var self = this;

      this.title = 'Test VM';

      _init();

      function _init(){
        botService.getBots()
          .then(function(bots) {
            debugger
            self.bots = angular.copy(bots);
          });
      };
    };

    //ViewModel.prototype.

    return ViewModel;
  }]);
