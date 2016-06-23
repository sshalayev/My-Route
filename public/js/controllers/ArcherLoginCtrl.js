/**
 * Created by user on 23.06.2016.
 */
app.controller('ArcherLoginController', ['$rootScope', '$scope', '$state', '$timeout', function ($rootScope, $scope, $state, $timeout) {
    $scope.spinner = false;
    $scope.loginFormData = {
        username: '',
        password: ''
    };
    $scope.doLogin = function () {
        $scope.spinner = true;
        $timeout(function () {
            $scope.spinner = false;
            $state.go('main.archer.reports.daily');
        }, 2000);
    }
}]);