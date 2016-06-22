/**
 * Created by user on 21.06.2016.
 */
app.directive('navItem', ['$rootScope', '$mdTheming', '$mdColorPalette', function ($rootScope, $mdTheming, $mdColorPalette) {
    function link (scope, element, attrs) {
        var reg = new RegExp(scope.navState);
        var defaultColors = $mdTheming.THEMES.default.colors;
        var color = getColor(defaultColors.primary.name, defaultColors.primary.hues.default, 1);
        //console.log($mdColorPalette.grey);
        //console.log($mdTheming.THEMES['archerInverted']);

        if (reg.test($rootScope.$state.current.name)) {
            console.log('initial coloring');
            element.children().contents().css({color: color});
        }

        $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {

            if (reg.test(to.name)) {
                element.children().contents().css({color: color});
            } else {
                element.children().contents().removeAttr('style');
            }
        });
    }

    function getColor (palette, hue, alpha) {
        var objColor = $mdColorPalette[palette][hue];
        var rgba = objColor.value;

        return 'rgba(' + rgba.join(', ') + ', ' + alpha + ')';
    }
    return {
        restrict: 'E',
        templateUrl: '/js/components/navigation/nav-item.tpl.html',
        scope: {
            navState: '=',
            navIcon: '=',
            navText: '='
        },
        link: link
    }
}]);