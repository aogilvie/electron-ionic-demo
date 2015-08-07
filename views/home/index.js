.controller('HomeCtrl', function($scope) {

    console.log('test ctrl');
    $scope.$on('$ionicView.afterEnter', function(ev, data) {
        ev.stopPropagation();
    });

})
