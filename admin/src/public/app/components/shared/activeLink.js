angular.module('sa.shared')
  .directive('activeLink', ['$state', function($state) {
    return {
        restrict: "A",
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
            var state = $attrs.uiSref;

            function update() {
                if ( $state.includes(state) || $state.is(state) ) {
                    $element.parent('li').addClass("active");
                } else {
                    $element.parent('li').removeClass("active");
                }
            }

            $scope.$on('$stateChangeSuccess', update);
            update();
        }]
    };
}])
