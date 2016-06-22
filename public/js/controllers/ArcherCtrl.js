/**
 * Created by pastor on 6/18/2016.
 */
app.controller('ArcherController', ['$scope', '$rootScope', '$state', '$mdSidenav', 'dataService', function ($scope, $rootScope, $state, $mdSidenav, dataService) {
    console.log('Main Archer controller init');
    $scope.navigation = dataService.archerNav;
    $scope.tabSet = getTabSet($state.current.name);
    $scope.activeTabIndex = getTabIndex($state.current.name);
    $scope.sidenavId = 'archerMainNav';


    $scope.sidenavOpen = function() {
        return $mdSidenav($scope.sidenavId).open();
    };

    $scope.sidenavClose = function() {
        return $mdSidenav($scope.sidenavId).close();
    };

    $scope.navigateTo = function (parentState) {
        var navItem = getNavItem(parentState);
        var target = 'main.archer.';

        if (navItem.subs) {
            target += navItem.subs[0].state;
        } else {
            target += parentState;
        }
        //console.log('Navigating to ' + target);
        $state.go(target);
        $mdSidenav($scope.sidenavId).close();
    };

    $scope.switchTab = function (childState) {
        var target = 'main.archer.' + childState;
        $state.go(target);
    };

    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
        var fromParent = from.name.split('.')[2];
        var toParent = to.name.split('.')[2];
        //console.log('Transition from <' + fromParent + '> to <' + toParent + '>');

        if (fromParent !== toParent) {
            $scope.tabSet = getTabSet(to.name);
        }
        $scope.activeTabIndex = getTabIndex(to.name);
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

    function getTabSet (fullState) {
        var navItem = getNavItem(fullState.split('.')[2]);
        return navItem.subs || [];
    }

    function getTabIndex (fullState) {
        var arrayState = fullState.split('.');
        var navItem = getNavItem(arrayState[2]);
        var childState = arrayState.slice(2).join('.');

        for (var i = 0; i < navItem.subs.length; i++) {
            if (navItem.subs[i].state == childState) {
                return i;
            }
        }
        return 0;
    }
}]);