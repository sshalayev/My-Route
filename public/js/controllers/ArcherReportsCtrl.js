/**
 * Created by user on 22.06.2016.
 */
app.controller('ArcherReportsController', ['$scope', '$rootScope', '$state', '$q', '$timeout', 'gridData', function ($scope, $rootScope, $state, $q, $timeout, gridData) {
    $scope.dailyReports = {
        data: gridData.dailyReportsData,
        columnDefs: gridData.dailyReportsColumnDefs,
        enableHorizontalScrollbar: 0,
        enableColumnMenus: false,
        minRowsToShow: 30
    };
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
}]);