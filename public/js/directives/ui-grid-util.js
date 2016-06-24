/**
 * Created by user on 24.06.2016.
 */
app.directive('uiGridUtil', function () {
    function link (scope, element, attrs) {
        var parent = element.parent();
        var top = element[0].offsetTop;
        var bottom = parent[0].offsetTop + parent[0].offsetHeight;
        var height = bottom - top;

        angular.element(document).ready(function () {
            element.removeAttr('style');
            element.css({height: height + 'px'});
            console.log(top, bottom, height);
            console.log(element);
            console.log(parent);
        });
    }
    return {
        restrict: 'A',
        link: link
    }
});