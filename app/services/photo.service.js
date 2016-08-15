angular.module('myApp.services', [])

    .factory('photoManager', ['$http', function ($http) {
        var photos;
        var promise = $http.get('resources/photos.json').then(function (res) {
            photos = res.data;
        });
        return {
            getPhotos: function () {
                return promise.then(function () {
                    return photos;
                });
            },
            getPhoto: function (id) {
                return promise.then(function () {
                    for (var i = 0; i < photos.length; i++) {
                        if (photos[i].id == id) {
                            return photos[i];
                        }
                    }
                });
            },
            updatePhoto: function (newPhoto) {
                return promise.then(function () {
                    for (var i = 0; i < photos.length; i++) {
                        if (photos[i].id === newPhoto.id) {
                            photos[i] = newPhoto;
                        }
                    }
                });
            }
        }
    }]);
