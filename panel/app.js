'use strict';

var app = angular.module('app', ['ngMaterial', 'ngMessages',
    'ui.router',
    'app.toolbar',
    'app.home'
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/app')
        .otherwise('/app/home');
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/toolbar.html',
            controller: 'toolbarCtrl'
        })
        .state('app.home', {
            url: '/home',
            views: {
                'mainContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'homeCtrl'
                }
            }
        });
}]);