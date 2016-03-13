app.controller("MapController", ['$scope', 'leafletData', function($scope, leafletData) {
    //$scope.mymap = L.map('mapid').setView([51.505, -0.09], 13);
    //L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic3NoYWxheWV2IiwiYSI6ImNpbHFqcHF0cjAwNTh5YW0wcTA2bnR2M2YifQ.9QrIPdoTmadAo1F_ZiutaA', {
    //    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //    maxZoom: 18,
    //    id: 'mapbox.streets',
    //    accessToken: 'pk.eyJ1Ijoic3NoYWxheWV2IiwiYSI6ImNpbHFqcHF0cjAwNTh5YW0wcTA2bnR2M2YifQ.9QrIPdoTmadAo1F_ZiutaA'
    //}).addTo($scope.mymap);
    $scope.defaults = {
        lat: 48.4577104,
        lng: 35.0481418,
        zoom: 14
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $scope.defaults.lat = position.coords.latitude;
            $scope.defaults.lng = position.coords.longitude;
            console.log(position.coords.latitude, position.coords.longitude);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }

    var originalPosition = {
        lat: $scope.defaults.lat,
        lng: $scope.defaults.lng,
        focus: true,
        message: "Hey, drag me if you want",
        draggable: true
    };

    $scope.mapbox = {
        name: 'Mapbox Outdoors',
        url: 'http://api.tiles.mapbox.com/v4/{tileset}/{z}/{x}/{y}.png?access_token={apikey}',
        type: 'xyz',
        options: {
            apikey: 'pk.eyJ1Ijoic3NoYWxheWV2IiwiYSI6ImNpbHFqcHF0cjAwNTh5YW0wcTA2bnR2M2YifQ.9QrIPdoTmadAo1F_ZiutaA',
            tileset: 'mapbox.streets'
        }
    };

    $scope.events = {};
    $scope.markers = {
        originalPosition: angular.copy(originalPosition)
    };

}]);