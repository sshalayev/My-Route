/**
 * Created by pastor on 6/30/2016.
 */
app.directive('earnProgressBar', [function () {
    if (!$) { var $ = angular.element; }
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");

    return {
        restrict: 'AE',
        scope: {
            pbConfig: '='
        },
        link: link
    };

    function link (scope, element, attr) {
        var w = element[0].offsetWidth;
        var h = element[0].offsetHeight;
        var segments = 4;
        var height = (h - w);
        var stepBonus = 10;
        canvas.width = w;
        canvas.height = h;
        var colors = {
            primary: '#00E676',
            accent: '#FFC107',
            bg: '#EEEEEE'
        };

        var goalWidth, goalTop, goalLeft, goalText;
        var goalFAB = $('<div>');

        goalFAB.addClass('earn-progress-goal');
        element.append(goalFAB);

        scope.$watchCollection('pbConfig', function (config) {

            if (config) {

                if (config.saved <= config.step) {
                    height = (config.saved / config.step) * (h - w);
                    segments = 4;
                    redraw(height, segments);
                    goalWidth = w - 4;
                    goalTop = (w / 2) - (goalWidth/2);
                    goalLeft = 4;
                    goalText = '<p>Get</p><p>$' + stepBonus + '</p>';
                    console.log(goalWidth);

                } else {
                    height = (config.saved / config.goal) * (h - w);
                    segments = 6;
                    redraw(height, segments);
                    goalWidth = w - 24;
                    goalTop = yPos - (goalWidth/2);
                    goalLeft = (w - goalWidth) / 2;
                    goalText = '<p>$' + stepBonus + '</p><p><i class="material-icons">done</i></p>';
                    console.log(goalWidth);
                }
                //goalFAB.removeAttr('style');
                goalFAB.css({
                    'width': goalWidth + 'px',
                    'height': goalWidth + 'px',
                    'top': goalTop + 'px',
                    'left': goalLeft + 'px'
                });
                goalFAB.html(goalText);
            }
        });

        function redraw (height, segments) {
            ctx.clearRect(0, 0, w, h);
            drawArrow(w, h, (h - w), colors.bg);
            drawArrow(w, h, height, colors.primary);
            drawStripes(w, h, segments);
        }
    }

    function drawArrow (w, h, height, color) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, h);
        ctx.lineTo(0, h - height);
        ctx.lineTo(w / 2, (h - height) - (w / 5));
        ctx.lineTo(w, h - height);
        ctx.lineTo(w, h);
        ctx.fill();
        ctx.restore();
    }

    function drawStripes (w, h, segments) {
        var seg = (h - w) / segments;
        ctx.save();
        ctx.strokeStyle = 'rgba(1, 1, 1, 0.7)';
        ctx.lineWidth = 2;

        for (var i = 1; i < segments; i++) {
            if (seg * i > (h - w)) {
                break;
            } else {
                ctx.beginPath();
                ctx.moveTo(0, h - (seg * i));
                ctx.lineTo(w, h - (seg * i));
                ctx.stroke();
            }
        }
        ctx.restore();
    }

    function getBWColor(hexrgb) {
        var avg = hexrgb.replace(/^\#(\w\w)(\w\w)(\w\w)$/, '$1,$2,$3').split(',').map(function(v) { return parseInt(v,16); }).reduce(function(a,b) { return a+b; })/3;
        return avg < 128 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.7)';
    }
}]);