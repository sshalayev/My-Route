/**
 * Created by user on 22.06.2016.
 */
app.controller('ArcherReportsController', ['$scope', '$rootScope', '$state', '$q', '$timeout', '$interval', 'uiGridConstants', 'gridData', function ($scope, $rootScope, $state, $q, $timeout, $interval, uiGridConstants, gridData) {
    $scope.gridWidth = 0;
    $scope.gridDim = {};
    $scope.showBottomPanel = false;
    $scope.spinners = {
        dailyReportsGrid: false
    };
    $scope.filterData = {};
    $scope.dailyReports = {
        data: gridData.dailyReportsData,
        columnDefs: gridData.dailyReportsColumnDefs,
        enableHorizontalScrollbar: 0,
        enableColumnMenus: false,
        enableRowSelection: true,
        enableFullRowSelection: true,
        enableRowHeaderSelection: false,
        minRowsToShow: 30,
        //rowHeight: 48,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            gridResizeHandler().then(function () {
                var elem = angular.element(document.getElementById($scope.gridApi.grid.id + '-grid-container'));
                $scope.gridDim = elem[0];
            }).catch(function (reason) { console.log(reason); });
        }
    };
    $scope.unpubReports = {
        data: [],
        columnDefs: gridData.dailyReportsColumnDefs,
        enableHorizontalScrollbar: 0,
        enableColumnMenus: false,
        enableRowSelection: true,
        enableFullRowSelection: true,
        enableRowHeaderSelection: false,
        minRowsToShow: 5,
        //rowHeight: 48,
        onRegisterApi: function(gridApi) {
            $scope.smallGridApi = gridApi;
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
    $scope.$watchCollection('filterData', function (newData) {
        if (newData) {
            $scope.spinners.dailyReportsGrid = true;
            $timeout(function () {
                $scope.spinners.dailyReportsGrid = false;
            }, 2000)
        }
    });
    $scope.hideInactiveProjects = true;
    $scope.newReport = {};
    $scope.filterData = {};


    $scope.projects = [
        "Agreewithme","Archer Admin","Aria","B2Lead 2.0.", "BaDoun", "Bankaroo", "Dscopesystems",
        "Earn", "GetPackage", "HealthOutcome", "Lots Sprint 1", "LottoSend", "Matan iPhone Server", "Medasense",
        "MHO Support", "MoxiMethod", "MRB+ clones", "Musketeers TM", "Photo app", "PixCell", "Psychographic",
        "Recruitment System", "room2care", "SAP Kiev", "Schneps", "Spider", "Varian", "Varian WPF", "VOS", "WebLiveView", "Welpy"
    ];
    $scope.tasks = ['Analysis', 'Development', 'DevOps', 'Management', 'QA'];

    $scope.getForm = function (form) {
        $scope.localForm = form;
    };

    $scope.saveNewReport = function () {
        $scope.unpubReports.data.push(angular.copy($scope.newReport, {}));
        $scope.smallGridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
        $scope.newReport = {};
        $scope.localForm.$setPristine();
    };
    $scope.clearNewReport = function () {
        angular.copy({}, $scope.newReport);
    };
    $scope.publishReports = function () {
        angular.extend($scope.dailyReports.data, $scope.unpubReports.data);
        $scope.unpubReports.data = [];
    };

    $scope.toggleBottomPanel = function () {
        $scope.showBottomPanel = !$scope.showBottomPanel;
    };

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