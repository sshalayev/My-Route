app.directive('aGrid', function (dataService, $lstore) {
    if (!$) {var $ = angular.element}

    var levels = [];
    var headers = [];

    function parseHeaders (data, level) {
        level = level || 1;
        headers[level-1] = headers[level-1] || [];
        for (var i = 0; i < data.length; i++) {
            headers[level-1].push(data[i].name);
            if (data[i].subs && data[i].subs.length > 0) {
                parseHeaders(data[i].subs, level + 1);
            } else {
                levels.push(level);
            }
            console.log(levels);
        }
    }

    function addBlock (parent, arr, idx, css_class) {
        if (!angular.isArray(arr) || !arr) return;
        arr[idx] = $('<div>');
        arr[idx].addClass(css_class);
        parent.append(arr[idx]);
    }

    function addElement (id, css_class, value) {
        var cell = $('<div>');
        cell.addClass(css_class);
        cell.attr('id', id);
        cell.text(value);

        return cell;
    }

    function getElement (id) {
        return $(document.getElementById(id));
    }

    function addHeaderColumn (id, span) {
        var column = addElement(id, 'grid-column');

        for (var i = 0; i < span; i++) {
            var cell_id = id + '_' + i;

            column.append(addElement(cell_id, 'grid-vcell grid-column-header'));
        }

        return column;
    }

    function addBodyColumn (id, values) {
        var column = addElement(id, 'grid-column');

        for (var i = 0; i < values.length; i++) {
            var cell_id = id + '_' + i;
            column.append(addElement(cell_id, 'grid-vcell', values[i]));
        }

        return column;
    }

    function getGroupedValues (group, data) {
        return data
            .filter(function (column) { return column.group == group.id })
            .map(function (v) { return v.values})
            .reduce(function (a, b) { return sumArrays(a, b)});
    }

    function addRange (id, range, css_class, value) {
        console.log('Range: ' + range);
        var range_elem = addElement(id, css_class, value);
        var points = getRangeDimension(range);

        range_elem.css({
            width: (points.right - points.left) + 'px',
            height: (points.bottom - points.top - 1) + 'px'
        });
        return range_elem;
    }

    function getRangeDimension (range) {
        var points = {
            top: [], left: [], bottom: [], right: []
        };

        for (var i = 0; i < range.length; i++) {
            var cell = getElement(range[i]);
            if (cell) {
                points.top.push(cell[0].offsetTop);
                points.left.push(cell[0].offsetLeft);
                points.bottom.push(cell[0].offsetTop + cell[0].offsetHeight);
                points.right.push(cell[0].offsetLeft + cell[0].offsetWidth);
            }
        }
        angular.forEach(points, function (values, key) {
            if (key == 'top' || key == 'left') {
                this[key] = values.reduce(function (a, b) { return a > b ? b : a });
            } else {
                this[key] = values.reduce(function (a, b) { return a <= b ? b : a });
            }
        }, points);

        return points;
    }

    function sumArrays(arr1, arr2) {
        var results = [];
        var max = arr1.length > arr2.length ? arr1.length : arr2.length;
        for (var i = 0; i < max; i++) {
            if (!angular.isNumber(arr1[i])) arr1[i] = 0;
            if (!angular.isNumber(arr2[i])) arr2[i] = 0;
            results.push(arr1[i] + arr2[i]);
        }
        return results;
    }

    function sumRects(rect1, rect2) {
        var extr = {};
        angular.forEach(rect1, function (val, key) {
            if (key == 'top' || key == 'left') {
                this[key] = val < rect2[key] ? val : rect2[key];
            } else {
                this[key] = val >= rect2[key] ? val : rect2[key];
            }
        }, extr);

        return {
            width: extr.right - extr.left,
            height: extr.bottom - extr.top
        };
    }

    function findFirstVisibleChild (values) {
        if (!angular.isArray(values)) return null;

        for (var i = 0; i < values.length; i++) {
            var elem = getElement(values[i] + '_header');
            if (!elem.hasClass('grid-column-hidden')) {
                return values[i];
            }
        }
        return null;
    }

    function toggleGroup (group, total) {
        var expanded = $lstore.get(group.id);
        var struct = $lstore.get('struct');

        var title = getElement(group.id + '_title_header');
        var row_num = title.parent().attr('id').replace(/^.+(\d+)$/i, '$1');

        var childs = group.values.slice(1);
        var selectors = childs.filter(function (v) {
            var elem_expanded = 1;
            var elem = getElement(v + '_header');
            var elem_state = $lstore.get(v);
            if (elem.hasClass('grid-column-hidden')) {
                elem_expanded = 0;
            }
            if (struct[v].type == 'group') {
                elem_state = angular.isDefined(elem_state) ? elem_state : 1;
                struct[v].expanded = elem_state == 0 ? 1 : 0;
            }

            if (expanded == 0) {
                return expanded !== elem_expanded;
            } else {
                return struct[v].expanded !== 1;
            }


        }).map(function (v) {
            return '#' + v + '_header, #' + v + '_body'
        }).join(', ');
        console.log(selectors);

        $(document.querySelectorAll(selectors)).toggleClass('grid-column-hidden');
        getElement(group.id + '_header').toggleClass('grid-column-hidden');
        getElement(group.id + '_body').toggleClass('grid-column-hidden');

        getElement(group.id + '_header').on('transitionend', function (event) {
            var range = group.values.map(function (v) {return v + '_header_' + row_num});
            var points = getRangeDimension(range);
            title.removeAttr('style');
            title.css({
                width: (points.right - points.left - 1 + expanded) + 'px',
                height: (points.bottom - points.top - 1) + 'px'
            });
            title.detach();
            getElement(findFirstVisibleChild(group.values) + '_header_' + row_num).append(title);

            if (Object.keys(total).length > 0) {
                var total_title = getElement(total.id + '_title_header');
                range = total.values.map(function (v) {return v + '_header_0'});
                points = getRangeDimension(range);
                total_title.removeAttr('style');
                total_title.css({
                    width: (points.right - points.left - 1 + expanded) + 'px',
                    height: (points.bottom - points.top - 1) + 'px'
                });
                total_title.detach();
                getElement(findFirstVisibleChild(total.values) + '_header_0').append(total_title);
            }
        });
    }

    function renderGridC (element, data) {
        var span = 1;
        var _data = data.reduce(function (obj, col) {
            obj[col.id] = col;
            return obj;
        }, {});
        var struct = angular.copy(_data, {});
        var stored_struct = $lstore.get('struct') || {};

        angular.forEach(struct, function (column, key) {
            if (column.type != 'group' && column.type != 'total') {
                delete column.values;
            }
            if (!this.hasOwnProperty(key)) {
                console.log('Adding key for storage: ' + key);
                struct[key].expanded = 1;
                this[key] = {};
                angular.copy(struct[key], this[key]);
            } else {
                struct[key].expanded = angular.isDefined(this[key].expanded) ? this[key].expanded : 1;
            }
            $lstore.set('struct', this);
            console.log(this);
            console.log(struct[key]);
        }, stored_struct);

        var groups = data.filter(function (column) { return column.type == 'group'})
            .map(function (group) {
                _data[group.id].values.unshift(group.id);
                return group.id;
            });

        var totals = data.filter(function (column) { return column.type == 'total'})
            .map(function (total) {
                total.values.unshift(total.id);
                total.values = total.values.map(function (val) {
                    if (_data[val].type == 'group') {
                        return _data[val].values;
                    } else {
                        return [val];
                    }
                }).reduce(function (a, b) {return a.concat(b)});
                return total.id;
            });

        span = totals.length > 0 ? 3 : groups.length > 0 ? 2 : 1;

        var grid_header = addElement('grid-header', 'grid-header');
        var grid_body = addElement('grid-body', 'grid-body');
        var grid_footer = addElement('grid-footer', 'grid-footer');
        element.append(grid_header).append(grid_body).append(grid_footer);

        for (var i = 0; i < data.length; i++) {
            var range = [];
            var expanded;

            if (data[i].type !== 'group' && data[i].type !== 'total') {
                grid_header.append(addHeaderColumn(data[i].id + '_header', span));
                grid_body.append(addBodyColumn(data[i].id + '_body', data[i].values));
                if (!data[i].group) {
                    for (var j = 0; j < span; j++) {
                        range.push(data[i].id + '_header_' + j);
                    }
                    getElement(data[i].id + '_header_0').append(addRange(data[i].id + '_header', range, 'grid-group-header grid-centered', data[i].name));
                } else {
                    getElement(data[i].id + '_header_' + (span-1)).append(addRange(data[i].id + '_header', [data[i].id + '_header_' + (span-1)], 'grid-group-header grid-centered', data[i].name));
                }

            } else {
                if ($lstore.get(data[i].id)) {
                    expanded = $lstore.get(data[i].id);
                } else {
                    expanded = 1;
                    $lstore.set(data[i].id, 1);
                }

                getElement(data[i].values[1] + '_header').before(addHeaderColumn(data[i].id + '_header', span).addClass('grid-column-hidden'));
                getElement(data[i].values[1] + '_body').before(addBodyColumn(data[i].id + '_body', getGroupedValues(data[i], data)).addClass('grid-column-hidden'));

                var row_num = data[i].type == 'group' ? (span - 2) : 0;
                for (var j = 0; j < data[i].values.length; j++) {
                    range.push(data[i].values[j] + '_header_' + row_num);
                }

                var group_header = addRange(data[i].id + '_title_header', range, 'grid-group-header grid-centered', data[i].name);
                getElement(findFirstVisibleChild(data[i].values) + '_header_' + row_num).append(group_header);


                group_header.on('dblclick',
                    {
                        group: angular.merge({}, data[i]),
                        total: angular.merge({}, _data[data[i].group])
                    },
                    function (event) {
                        var elem = $(event.currentTarget);
                        var struct = $lstore.get('struct');
                        var childs = struct[event.data.group.id].values.slice(0);

                        var expanded = $lstore.get(event.data.group.id);
                        struct[event.data.group.id].expanded = expanded;
                        expanded = expanded == 0 ? 1 : 0;
                        $lstore.set(event.data.group.id, expanded);

                        childs.map(function (v) { struct[v].expanded = expanded; return v; });
                        $lstore.set('struct', struct);
                        toggleGroup(event.data.group, event.data.total);
                });
            }
        }
    }

    function renderGridD (element, data) {
        var _data = data.reduce(function (obj, col) {
            obj[col.id] = col;
            return obj;
        }, {});

        var groups = data.filter(function (column) { return column.type == 'group' });
        var totals = data.filter(function (column) { return column.group == null });

        var grid_header = addElement('grid-header', 'grid-header');
        var grid_body = addElement('grid-body', 'grid-body');
        var grid_footer = addElement('grid-footer', 'grid-footer');
        element.append(grid_header).append(grid_body).append(grid_footer);

        for (var i = 0; i < totals.length; i++) {
            addElement(totals.id + '_header', 'grid-vblock')
        }
    }

    function link (scope, element) {

        renderGridD(element, dataService.data2);
    }

    return {
        restrict: 'A',
        link: link
    }
});