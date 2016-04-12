/**
 * Created by pastor on 4/13/2016.
 */
app.service('$e6', function ($q) {
    //private section
    function findIndex () {
        if (!Array.prototype.findIndex) {
            Array.prototype.findIndex = function (predicate) {
                if (this === null) {
                    throw new TypeError('Array.prototype.findIndex called on null or undefined');
                }
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }
                var list = Object(this);
                var length = list.length >>> 0;
                var thisArg = arguments[1];
                var value;

                for (var i = 0; i < length; i++) {
                    value = list[i];
                    if (predicate.call(thisArg, value, i, list)) {
                        return i;
                    }
                }
                return -1;
            };
        }
    }

    function find () {
        if (!Array.prototype.find) {
            Array.prototype.find = function(predicate) {
                if (this === null) {
                    throw new TypeError('Array.prototype.find called on null or undefined');
                }
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }
                var list = Object(this);
                var length = list.length >>> 0;
                var thisArg = arguments[1];
                var value;

                for (var i = 0; i < length; i++) {
                    value = list[i];
                    if (predicate.call(thisArg, value, i, list)) {
                        return value;
                    }
                }
                return undefined;
            };
        }
    }
    //public section
    this.init = function () {
        findIndex();
        find();
    }

});

