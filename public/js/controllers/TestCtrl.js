app.controller('TestController', ['$scope', function ($scope) {
    $scope.menu_items = [
        {name: 'item1', func: null},
        {name: 'item2', func: null},
        {name: 'item3', func: null}
    ];
    $scope.myData = [
        {
            "firstName": "Cox",
            "lastName": "Carney",
            "company": "Enormo",
            "employed": true
        },
        {
            "firstName": "Lorraine",
            "lastName": "Wise",
            "company": "Comveyer",
            "employed": false
        },
        {
            "firstName": "Nancy",
            "lastName": "Waters",
            "company": "Fuelton",
            "employed": false
        }
    ];
    $scope.pbConfig = {
        saved: 18,
        step: 20,
        goal: 35
    }
}]);