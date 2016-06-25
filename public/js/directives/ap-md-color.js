/**
 * Created by pastor on 6/25/2016.
 */
app.directive('apMdColor', ['$mdTheming', '$mdColorPalette', function ($mdTheming, $mdColorPalette) {
    function link (scope, element, attrs) {
        var style = {};

        var intentions = ['primary', 'accent', 'warn', 'background'];
        angular.forEach(scope.mdColor, function (value, key) {
            var colorInput = value.split('-');
            var colorDef = {};
            var intent, resColor;
            if (colorInput[0] == 'palette') {
                colorDef.palette = colorInput[1];
                colorDef.variant = colorInput[2];

            } else {
                if (intentions.indexOf(colorInput[0]) > -1) {
                    colorInput.unshift('default');
                }
                if (!colorInput[2]) {
                    colorInput[2] = 'default';
                } else {
                    colorInput[2] = 'hue-' + colorInput[3];
                }
                intent = $mdTheming.THEMES[colorInput[0]].colors[colorInput[1]];
                colorDef.palette = intent.name;
                colorDef.variant = intent.hues[colorInput[2]]
            }
            console.log(intent);
            console.log(colorInput);
            console.log(colorDef);
            resColor = $mdColorPalette[colorDef.palette][colorDef.variant].value;
            style[key] = 'rgba(' + resColor.join(', ') + ', 1)';
        });

        element.css(style);
    }
    return {
        restrict: 'A',
        scope: {
            mdColor: '=apMdColor'
        },
        link: link
    }
}]);