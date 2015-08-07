angular.module('myApp.controllers', [])

.controller('TopCtrl', function ($scope, $rootScope, $location, $state) {
    $rootScope.back = function () {
        $window.history.back();
    }
    $rootScope.go = function (path, properties) {
        if (properties) {
            properties = JSON.stringify(properties);
            path = path.split("/");
            $state.go(path[1], { properties: properties });
        } else {
            $location.url(path);
        }
    }
    document.addEventListener('touchMove', function () {
        e.preventDefault();
    })
})

.controller('HomeCtrl', function($scope) {

    console.log('>>>> home ctrl');
    $scope.$on('$ionicView.afterEnter', function(ev, data) {
        ev.stopPropagation();
    });
    $scope.title = 'Home';
    $scope.btn_click = 'Click';
    $scope.sampleText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
})
