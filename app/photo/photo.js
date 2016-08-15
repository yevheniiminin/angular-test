'use strict';

angular.module('myApp.photo', ['ngRoute'])

    .controller('PhotoCtrl', ['$scope', '$routeParams', 'photoManager', function ($scope, $routeParams, photoManager) {
        $scope.photo = {};
        photoManager.getPhoto($routeParams.photoId).then(function (photo) {
             angular.copy(photo, $scope.photo);
        });

        $scope.updatePhoto = function () {
            photoManager.updatePhoto($scope.photo);
        };
    }]);
