angular.module('sa.shared')
  .directive('menu', ['$state', function($state) {
    return {
        restrict: 'A',
        scope: {
          menu: '='
        },
        template: '<li class="{{menu.header.css}}"><i class="{{menu.header.icon}}"></i>{{menu.header.title}}</li>'
                  + '<li ng-repeat="item in menu.items" ng-class="{active: isActive(item.state)}"><a ui-sref="{{item.state}}">{{item.title}}</a></li>',
        link: function ($scope) {
          $scope.isActive = function(state) {
            return $state.includes(state) || $state.is(state);
          };
        }
    };
}])
