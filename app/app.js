'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.photo',
    'myApp.services'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when("/home", {
            templateUrl: 'home/home.html'
        }).when("/photo/:photoId", {
            templateUrl: 'photo/photo.html'
        }).otherwise({redirectTo: '/home'});
}]);
