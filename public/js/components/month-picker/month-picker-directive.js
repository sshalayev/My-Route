/**
 * Created by user on 22.06.2016.
 */
app.directive('monthPicker', [function () {
    var full_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function link (scope, element, attrs, ctrl) {
        var current = new Date();
        var year = current.getFullYear();
        var month = current.getMonth();
        scope.monthDate = {
            year: year.toString().substr(2),
            month: months[month]
        };

        scope.shiftMonth = function (sign) {
            var day = 24 * 3600 * 1000;
            month += sign;
            if (month == -1) {
                month = 11;
                year--;
            }
            if (month == 12) {
                month = 0;
                year++;
            }
            scope.monthDate.year = year.toString().substr(2);
            scope.monthDate.month = months[month];
            var startDate = new Date(year, month, 1);
            var endDate = new Date(new Date(year, month + 1, 1) - day);

            scope.filterData.timeframe = [startDate, endDate];
        }
    }

    return {
        restrict: 'E',
        templateUrl: '/js/components/month-picker/month-picker.tpl.html',
        require: '?ngModel',
        link: link
    }
}]);