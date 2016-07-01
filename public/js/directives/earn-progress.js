/**
 * Created by pastor on 6/30/2016.
 */
app.directive('earnProgressBar', ['$window', function ($window) {
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
            primary: '#2fb62f',
            accent: '#ff8d01',
            bg: '#FFE0B2'
        };
        var goalWidth, goalTop, goalLeft, goalText;
        var goalFAB = $('<div>');
        var savedText = $('<div>');

        element.append(canvas);

        goalFAB.addClass('earn-progress-goal');
        element.append(goalFAB);

        savedText.addClass('earn-progress-saved');
        element.append(savedText);

        scope.$watchCollection('pbConfig', function (config) {
            if (config) {
                //goalFAB.removeAttr('style');
                recalc(config.saved, config.step, config.goal);
                redraw(height, segments);
            }
        });
        $window.onresize = function (e) {
            w = element[0].offsetWidth;
            h = element[0].offsetHeight;
            console.log('resize event fired: ' + w);
            canvas.height = h;
            canvas.width = w;
            recalc(scope.pbConfig.saved, scope.pbConfig.step, scope.pbConfig.goal);
            redraw(height, segments);
        };

        function redraw (height, segments) {
            ctx.clearRect(0, 0, w, h);
            drawArrow(w, h, (h - w), colors.bg);
            drawArrow(w, h, height, colors.primary);
            drawStripes(w, h, segments);
            goalFAB.css({
                'width': goalWidth + 'px',
                'height': goalWidth + 'px',
                'top': goalTop + 'px',
                'left': goalLeft + 'px'
            });
            goalFAB.html(goalText);
            savedText.html('<span>$' + scope.pbConfig.saved + '</span><span>saved</span>');
        }
        function recalc (saved, step, goal) {

            if (saved <= step) {
                height = (saved / step) * (h - w);
                segments = 4;
                goalWidth = w - 4;
                goalLeft = (w - goalWidth) / 2;
                goalTop = (w / 2) - (goalWidth/2);
                goalText = '<span>Get</span><span>$' + stepBonus + '</span>';
                console.log(goalWidth);

            } else {
                height = (saved / goal) * (h - w);
                segments = 6;
                goalWidth = w - 24;
                goalLeft = (w - goalWidth) / 2;
                goalTop = w + (height / 2) - (goalWidth/2);
                goalText = '<span>$' + stepBonus + '</span><i class="material-icons">done</i>';
                console.log(goalWidth);
            }
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
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
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