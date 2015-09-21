angular.module('sa.manageBots')
  .factory('ManageBotsDetailsVM', ['botService', function(botService){
    var ViewModel = function(id){
      var self = this;

      _init();

      function _init(){
        self.menu = {
          header: {
            title: 'Bot Details',
            css: 'header pull-left',
            icon: 'fa fa-th'
          },
          items: [{
            title: 'Actions',
            state: 'manageBotsDetails.actions'
          }, {
            title: 'Info',
            state: 'manageBotsDetails.info'
          }]
        };
      };
    };

    //ViewModel.prototype.

    return ViewModel;
  }]);
