'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .filter('startFrom', function () {
        return function (input, start) {
            return input.slice(+start);
        }
    })

    .controller('HomeCtrl', ['$scope', '$filter', 'photoManager', function ($scope, $filter, photoManager) {
        $scope.currentPage = 0;
        $scope.photos = [];
        $scope.pageSize = 10;
        $scope.search = '';

        photoManager.getPhotos().then(function (photos) {
            $scope.photos = photos;
            $scope.filteredPhotos = photos;

            $scope.onUserSearch = function () {
                $scope.filteredPhotos = $filter('filter')($scope.photos, $scope.search);
            };
            $scope.numberOfPages = function () {
                return Math.ceil($scope.getData().length / $scope.pageSize);
            };
        });
    }]);
