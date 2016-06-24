/**
 * Created by user on 24.06.2016.
 */
app.directive('fixMdAutocomplete', ['$timeout', function ($timeout) {
    function link (scope, element, attrs) {
        var wrap = element.find('md-autocomplete-wrap');
        var input = wrap.find('input');

        element.ready(function () {
            $timeout(function () {
                console.log(input);
                wrap.removeClass('md-whiteframe-z1');
                element.addClass('md-autocomplete-flat');
                input.addClass('md-autocomplete-flat--input');
            }, 200);
        });
    }
    return {
        restrict: 'A',
        link: link
    }
}]);