if (!getCookie('timezone_offset')) {
    setCookie('timezone_offset', new Date().getTimezoneOffset());
}
setCookie('timezone_offset', new Date().getTimezoneOffset());

var app = angular.module('awmApp', [
    'ui.router',
    'ngDialog',
    'angular.filter',
    'ngAnimate',
    'angular-storage',
    'nemLogging',
    'ui-leaflet',
    'ui.grid'
]);

app.config(['ngDialogProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function (ngDialogProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false,
        disableAnimation: true
    });

    $httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded'};
    $httpProvider.defaults.headers.put = {'Content-Type': 'application/x-www-form-urlencoded'};
    $httpProvider.defaults.headers.delete = {'Content-Type': 'application/x-www-form-urlencoded'};

    $urlRouterProvider.otherwise('/map/');

    $stateProvider
        .state("main", {
            url: "/",
            abstract: true,
            controller: 'MainController',
            template: '<div ui-view id="level2-view"></div>'
        })
        .state("main.map", {
            controller: 'MapController',
            templateUrl: '/partials/map.html',
            url: "map/",
            onEnter: function ($rootScope) {
                $rootScope.pageTitle = 'My Route';
            }
        })
        .state("main.test", {
            controller: 'TestController',
            templateUrl: '/partials/test.html',
            url: "test/",
            onEnter: function ($rootScope) {
                $rootScope.pageTitle = 'My Test';
            }
        })
}]);

app.run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
);

app.service('Validator', function () {
    return {
        validateEmail: function (email) {
            var regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
            return regexp.test(email);
        }
    }
});

function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}
