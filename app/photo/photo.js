'use strict';

angular.module('myApp.photo', ['ngRoute'])

    .controller('PhotoCtrl', ['$scope', '$routeParams', 'photoManager', function ($scope, $routeParams, photoManager) {
        var photo = photoManager.getPhoto($routeParams.photoId);
        $scope.photo = {};
        angular.copy(photo, $scope.photo);

        $scope.updatePhoto = function () {
            photoManager.updatePhoto($scope.photo);
        };
    }]);
