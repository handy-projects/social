angular.module('sa.manageBots')
  .factory('ManageBotsDetailsActionsVM', ['botService', function(botService){
    var ViewModel = function(id){
      var self = this;

      _init();

      function _init(){
        self.item = {};
        self.botId = id;
      };
    };

    ViewModel.prototype.like = function(){
      var self = this;
      botService.like(this.botId, this.item.url, this.item.type)
        .then(function(){
          self.success = true;
        })
        .catch(function(){
          self.error = true;
        });
    };

    ViewModel.prototype.repost = function(){
      var self = this;
      botService.repost(this.botId, this.item.url, this.item.type)
        .then(function(){
          self.success = true;
        })
        .catch(function(){
          self.error = true;
        });
    };

    return ViewModel;
  }]);
