angular.module('myApp.services', [])

    .factory('photoManager', ['$http', '$filter', function ($http, $filter) {
        var photos = [
            {
                "id": 1,
                "name": "Summer.jpeg",
                "likes": 3,
                "author": "Vasya",
                "url": "http://cdn.wallpapersafari.com/27/61/yp0rOY.jpg",
                "visible": true
            },
            {
                "id": 2,
                "name": "Autumn.png",
                "likes": 6,
                "author": "Petya",
                "url": "http://wallpaper.pickywallpapers.com/1600x900/black-cat-sneaking-in-autumn-leafs.jpg",
                "visible": false
            },
            {
                "id": 3,
                "name": "Winter.png",
                "likes": 9,
                "author": "Kolya",
                "url": "http://cdn1-www.cattime.com/assets/uploads/2015/10/cat-in-snow-winter.jpg",
                "visible": true
            },
            {
                "id": 4,
                "name": "Spring.JPG",
                "likes": 12,
                "author": "Anonim",
                "url": "http://www.lovethispic.com/uploaded_images/162235-Cat-And-Spring-Flowers.jpg",
                "visible": true
            }
        ];

        return {
            getPhotos: function () {
                return photos;
            },
            getPhoto: function (id) {
                    return $filter('filter')(photos, {id: id})[0];
            },
            updatePhoto: function (newPhoto) {
                photos[newPhoto.id - 1] = newPhoto;
            }
        }
    }]);
