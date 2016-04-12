/**
 * Created by user on 12.04.2016.
 */
app.constant('$lstoreConfig', {
    storageType: 'localStorage'
});
app.provider('$lstore', ['$lstoreConfig', function (config) {
    Object.defineProperties(this, {
        storageType: {
            get: function() { return config.storageType; },
            set: function(value) { config.storageType = value; }
        }
    });

    this.$get = ['$lstoreConfig', '$window', '$log', function (config, $window, $log) {
        var $lstore = {};
        var bkpstore = {};

        // Check if localStorage or sessionStorage is available or enabled
        var isStorageAvailable = (function() {
            try {
                var supported = config.storageType in $window && $window[config.storageType] !== null;

                if (supported) {
                    var key = Math.random().toString(36).substring(7);
                    $window[config.storageType].setItem(key, '');
                    $window[config.storageType].removeItem(key);
                }

                return supported;
            } catch (e) {
                return false;
            }
        })();

        if (!isStorageAvailable) {
            $log.warn(config.storageType + ' is not available.');
        }

        $lstore.setStorageType = function(type) {
            config.storageType = type;
        };

        $lstore.get = function(key) {
            var result;
            if (isStorageAvailable) {
                result = $window[config.storageType].getItem(key);
                if (!angular.isDefined(result)) return null;
                if (angular.isDate(result)) return new Date(result);
                if (angular.isArray(result) || angular.isObject(result)) return result;
                if (angular.isString(result)) {
                    try {
                        result = angular.fromJson(result);
                        return result;
                    } catch (e) {
                        return result;
                    }
                }
            } else {
                return result = bkpstore[key];
            }
        };
        $lstore.set = function(key, value) {
            if (isStorageAvailable) {
                if (angular.isObject(value) || angular.isArray(value)) {
                    value = angular.toJson(value);
                }
                return $window[config.storageType].setItem(key, value);
            } else {
                return bkpstore[key] = value;
            }
        };
        $lstore.remove = function(key) {
            return isStorageAvailable ? $window[config.storageType].removeItem(key): delete bkpstore[key];
        };
        $lstore.clear = function() {
            return isStorageAvailable ? $window[config.storageType].clear(): bkpstore = {};
        };
        $lstore.key = function(num) {
            return isStorageAvailable ? $window[config.storageType].key(num): bkpstore[Object.keys(bkpstore)[num]];
        };
        $lstore.allKeys = function() {
            if (isStorageAvailable) {
                var length = $window[config.storageType].length;
                var results = [];
                for (var i = 0; i < length; i++) {
                    results.push($window[config.storageType].key(i));
                }
            } else {
                results = Object.keys(bkpstore);
            }
            return results;
        };
        $lstore.findKeys = function(regexp) {
            var all_keys = $lstore.allKeys();
            return all_keys.filter(function (v) { return regexp.test(v) });
        };

        return $lstore;
    }];

}]);