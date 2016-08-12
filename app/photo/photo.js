'use strict';

angular.module('myApp.photo', ['ngRoute'])

    .controller('PhotoCtrl', ['$scope', '$routeParams', 'photoManager', function ($scope, $routeParams, photoManager) {
        var oldPhoto = $scope.photo = photoManager.getPhoto($routeParams.photoId);
        $scope.updatePhoto = function () {
            photoManager.updatePhoto($scope.photo);
            oldPhoto = $scope.photo;
        };

        $scope.resetPhoto = function () {
            $scope.photo = oldPhoto;
        }
    }]);
