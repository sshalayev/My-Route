/**
 * Created by pastor on 6/18/2016.
 */
app.controller('ArcherController', ['$scope', '$rootScope', '$state', '$mdSidenav', 'dataService', function ($scope, $rootScope, $state, $mdSidenav, dataService) {
    $scope.navigation = dataService.archerNav;
    $scope.subMenuExpanded = {};
    $scope.tabSet = getTabSet();

    for (var i = 0; i < $scope.navigation.length; i++) {
        var item = $scope.navigation[i];
        $scope.subMenuExpanded[item.state] = false;
    }

    $scope.sidenavOpen = function(id) {
        return $mdSidenav(id).open();
    };

    $scope.sidenavClose = function(id) {
        return $mdSidenav(id).close();
    };

    $scope.navigateTo = function (id) {
        $scope.subMenuExpanded[id] = !$scope.subMenuExpanded[id];
        $scope.activeMenuItem = id;

        console.log('Navigating to ' + id);
        $state.go('main.archer.' + id);
        //$mdSidenav('archerMainNav').close();
    };

    $scope.toggleSubmenu = function (parent) {
        $scope.subMenuExpanded[parent] = !$scope.subMenuExpanded[parent];
    };

    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
        $scope.tabSet = getTabSet();
    });

    function getNavItem (state) {
        var result = {};
        angular.forEach($scope.navigation, function (obj) {
            if (obj.state === state) {
                try {
                    angular.copy(obj, result);
                } catch (e) {}
            }
        });
        return result;
    }

    function getTabSet () {
        var navItem = getNavItem($state.current.name.split('.')[2]);
        return navItem.subs || [];
    }
}]);