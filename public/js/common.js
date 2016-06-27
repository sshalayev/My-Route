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
    'ui.grid',
    'ui.grid.selection',
    'ngMaterial'
]);

app.config(['ngDialogProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider',
    function (ngDialogProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {
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

    $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('orange');

    $mdThemingProvider.theme('redInv')
        .primaryPalette('grey')
        .accentPalette('red')
        .warnPalette('orange')
        .backgroundPalette('red')
        .dark();


    $mdThemingProvider.theme('bw')
        .primaryPalette('grey')
        .accentPalette('red')
        .warnPalette('orange')
        .backgroundPalette('grey');

    $urlRouterProvider.otherwise('/archer-login/');

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
            .state("main.archerLogin", {
                controller: 'ArcherLoginController',
                templateUrl: '/partials/archer-login.html',
                url: "archer-login/",
                onEnter: function ($rootScope) {
                    $rootScope.pageTitle = 'Archer Producer';
                }
            })
            .state("main.archer", {
                controller: 'ArcherController',
                templateUrl: '/partials/archer-main.html',
                abstract: true,
                url: "archer/",
                onEnter: function ($rootScope) {
                    $rootScope.pageTitle = 'Archer Producer';
                }
            })
                .state("main.archer.reports", {
                    template: '<div ui-view class="section-container" ap-md-color="{\'background-color\': \'palette-grey-50\'}"></div>',
                    url: "reports/",
                    abstract: true,
                    controller: "ArcherReportsController",
                    onEnter: function ($rootScope) {
                        $rootScope.pageTitle = 'Reports';
                    }
                })
                    .state("main.archer.reports.daily", {
                        templateUrl: '/partials/archer-reports-daily.html',
                        url: "daily/",
                        onEnter: function ($rootScope) {
                            $rootScope.pageTitle = 'Daily Reports';
                        }
                    })
                    .state("main.archer.reports.status", {
                        templateUrl: '/partials/archer-reports-status.html',
                        url: "status/",
                        onEnter: function ($rootScope) {
                            $rootScope.pageTitle = 'Status Reports';
                        }
                    })
                .state("main.archer.pm", {
                    template: '<div ui-view class="section-container"></div>',
                    url: "pm/",
                    abstract: true,
                    onEnter: function ($rootScope) {
                        $rootScope.pageTitle = 'Project Management';
                    }
                })
                    .state("main.archer.pm.projects", {
                        templateUrl: '/partials/archer-pm-projects.html',
                        url: "projects/",
                        onEnter: function ($rootScope) {
                            $rootScope.pageTitle = 'PM: Projects';
                        }
                    })
                    .state("main.archer.pm.control", {
                        templateUrl: '/partials/archer-pm-control.html',
                        url: "control/",
                        onEnter: function ($rootScope) {
                            $rootScope.pageTitle = 'PM: Control';
                        }
                    })
                    .state("main.archer.pm.csi", {
                        templateUrl: '/partials/archer-pm-csi.html',
                        url: "csi/",
                        onEnter: function ($rootScope) {
                            $rootScope.pageTitle = 'PM: Cusomer Satisfaction';
                        }
                    })
                .state("main.archer.hrm", {
                    //templateUrl: '/partials/archer-hrm.html',
                    url: "hrm/",
                    onEnter: function ($rootScope) {
                        $rootScope.pageTitle = 'HR Management';
                    }
                })
                .state("main.archer.finances", {
                    //templateUrl: '/partials/archer-finances.html',
                    url: "pm/",
                    onEnter: function ($rootScope) {
                        $rootScope.pageTitle = 'Finances';
                    }
                })
                .state("main.archer.analytics", {
                    //templateUrl: '/partials/archer-analytics.html',
                    url: "pm/",
                    onEnter: function ($rootScope) {
                        $rootScope.pageTitle = 'Analytics';
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
