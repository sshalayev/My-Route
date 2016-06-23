/**
 * Created by user on 22.06.2016.
 */
app.controller('ArcherReportsController', ['$scope', '$rootScope', '$state', '$q', '$timeout', '$interval', 'uiGridConstants', 'gridData', function ($scope, $rootScope, $state, $q, $timeout, $interval, uiGridConstants, gridData) {
    $scope.gridWidth = 0;
    $scope.gridDim = {};
    $scope.dailyReports = {
        data: gridData.dailyReportsData,
        columnDefs: gridData.dailyReportsColumnDefs,
        enableHorizontalScrollbar: 0,
        enableColumnMenus: false,
        minRowsToShow: 30,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            gridResizeHandler().then(function () {
                var elem = angular.element(document.getElementById($scope.gridApi.grid.id + '-grid-container'));
                $scope.gridDim = elem[0];
            }).catch(function (reason) { console.log(reason); });
        }
    };

    $scope.$watch('gridDim.offsetWidth', function (width) {
        console.log('Watcher report: ' + width);
        if (width && width > 0) {
            $scope.dailyReports.columnDefs[2].visible = width > 600;
            $scope.gridWidth = width;
            $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
        }
    });

    $scope.projects = loadAll();


    $scope.querySearch = function (query) {
        var results = query ? $scope.projects.filter( createFilterFor(query) ) : $scope.projects;
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve( results );
        }, Math.random() * 1000, false);

        return deferred.promise;
    };

    function loadAll() {
        var projects = gridData.projects;
        return projects.map( function (project) {
            return {
                value: project.toLowerCase(),
                display: project
            };
        });
    }

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(project) {
            return (project.value.indexOf(lowercaseQuery) === 0);
        };
    }

    function gridResizeHandler () {
        return $q(function (resolve, reject) {
            var elem, poll, width, counter = 0;
            poll = $interval(function () {
                counter++;
                if (counter > 100) {
                    stopPolling(false);
                } else {
                    elem = angular.element(document.getElementById($scope.gridApi.grid.id + '-grid-container'));
                    try {
                        width = elem[0].offsetWidth;
                    } catch (e) {}
                    if (width && width > 0) {
                        stopPolling(true);
                    }
                }

            }, 200);

            function stopPolling (flag) {
                $interval.cancel(poll);
                flag ? resolve(width) : reject('No element found');
            }
        });
    }
}]);