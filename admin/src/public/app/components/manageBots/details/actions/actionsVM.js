angular.module('sa.manageBots')
  .factory('ManageBotsDetailsActionsVM', ['botService', 'ngToast', function(botService, ngToast){
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
          ngToast.create({
            className: 'success',
            content: '<h4 class="text-left"><i class="icon fa fa-check"></i> Done</h4><p>Successfully executed</p>',
            //dismissOnTimeout: false
          });
        })
        .catch(function(){
          ngToast.create({
            className: 'danger',
            content: '<h4 class="text-left"><i class="icon fa fa-exclamation"></i> Error</h4><p>Something went wrong:(</p>',
            //dismissOnTimeout: false
          });
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
