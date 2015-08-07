// 'myApp.controllers' is found in controllers.js
angular.module('myApp', ['ionic', 'ngSanitize', 'myApp.controllers'])

.run(function($ionicPlatform) {

})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'views/home/index.html',
        controller: 'HomeCtrl'
    })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');

});

function load() {
    // BootStrap ionic / Angular
    angular.element(document).ready(function () {
        var injector = angular.bootstrap(document, ['myApp']);
        $rootScope = injector.get("$rootScope");
    });
}

load();
