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
            width: (points.right - points.left - 6) + 'px',
            height: (points.bottom - points.top - 7) + 'px'
        });
        return range_elem;
    }

    function getRangeDimension (range) {
        var points = {
            top: [], left: [], bottom: [], right: []
        };

        for (var i = 0; i < range.length; i++) {
            var cell = getElement(range[i]);
            points.top.push(cell[0].offsetTop);
            points.left.push(cell[0].offsetLeft);
            points.bottom.push(cell[0].offsetTop + cell[0].offsetHeight);
            points.right.push(cell[0].offsetLeft + cell[0].offsetWidth);
        }
        console.log(angular.copy(points, {}));
        angular.forEach(points, function (values, key) {
            if (key == 'top' || key == 'left') {
                this[key] = values.reduce(function (a, b) { return a > b ? b : a });
            } else {
                this[key] = values.reduce(function (a, b) { return a > b ? a : b });
            }
        }, points);

        //var selectors = range.map(function (v) {return '#' + v}).join(', ');
        //var dimensions = document.querySelectorAll(selectors).getBoundingClientRect();
        for (var i = 0; i < range.length; i++) {
            var e = document.getElementById(range[i]);
            var dim = e.getBoundingClientRect();
            console.log(dim);
        }


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

    function findGroup (data, group_id) {
        var results = [];

        if (!angular.isArray(group_id)) {
            group_id = [group_id];
        }
        for (var i = 0; i < data.length; i++) {
            if (group_id.indexOf(data[i].id) > -1) {
                results.push(data[i]);
            }
        }
        return results;
    }

    function toggleGroup (group, total) {
        var expanded = $lstore.get(group.id);

        var title = getElement(group.id + '_title_header');
        var row_num = title.parent().attr('id').replace(/^.+(\d+)$/i, '$1');
        var parent = getElement(group.values[expanded] + '_header_' + row_num);

        var range = group.values.map(function (v) {return v + '_header_' + row_num});
        var points = getRangeDimension(range);

        var childs = group.values.slice(1);
        var selectors = childs.map(function (v) { return '#' + v + '_header, #' + v + '_body' }).join(', ');

        $(document.querySelectorAll(selectors)).toggleClass('grid-column-hidden');
        getElement(group.id + '_header').toggleClass('grid-column-hidden');
        getElement(group.id + '_body').toggleClass('grid-column-hidden');

        title.removeAttr('style');
        title.css({
            width: (points.right - points.left - 6) + 'px',
            height: (points.bottom - points.top - 7) + 'px'
        });
        title.detach();
        parent.append(title);

        if (total) {
            var total_title = getElement(total.id);
            range = total.values.map(function (v) {return v + '_header_0'});
            points = getRangeDimension(range);
            total_title.removeAttr('style');
            total_title.css({
                width: (points.right - points.left - 6) + 'px',
                height: (points.bottom - points.top - 7) + 'px'
            });
        }
    }

    function renderGridA(element) {
        var data = dataService.data0;
        parseHeaders(data.columns);
        //element.text('parsed data: ' + JSON.stringify(levels));
        console.log(headers);

        var max_level = levels.reduce(function (a,b) { return a > b ? a : b });
        console.log(max_level);
        var columns = levels.length;
        var rows = [];

        for (var i = 0; i < max_level; i++) {
            rows.push({elem: $('<div>'), cells: []});
            rows[i].elem.addClass('grid-row');
            element.append(rows[i].elem);
            rows[i].elem.append($('<div>'));

            for (var j = 0; j < headers[i].length; j++) {
                rows[i].cells.push($('<div>'));
                rows[i].cells[j].addClass('grid-cell');
                rows[i].cells[j].text(headers[i][j]);
                rows[i].elem.append(rows[i].cells[j]);
            }
        }
    }

    function renderGridB (elem) {
        var data = dataService.data1;
        var groups = data.filter(function (column) { return column.type == 'group'});
        var span = groups.length > 1 ? 3 : groups.length == 1 ? 2 : 1;
        var cols = [];
        var col_headers = [];
        var group_headers = [];

        for (var i = 0; i < data.length; i++) {
            var cells = [];

            if (data[i].type !== 'group' && data[i].type !== 'total') {
                addBlock(elem, cols, i, 'grid-column');
                cols[i].attr('id', data[i].id);
                console.log('Adding column: ' + data[i].name);

                var css_class = data[i].group ? 'grid-column-header grid-vcell' : 'grid-column-header grid-vcell rowspan' + span;
                if (data[i].group) {
                    for (var n = 0; n < span - 1; n++) {
                        console.log('Adding header cell for column: ' + data[i].name);
                        addBlock(cols[i], cells, n, 'grid-vcell');
                        cells[n].attr('id', data[i].id + '_header' + n);
                    }
                }
                addBlock(cols[i], col_headers, i, css_class);
                col_headers[i].text(data[i].name);
                col_headers[i].attr('id', data[i].id + '_header_text');

                for (var cl = cells.length, j = cl; j < data[i].values.length + cl; j++) {
                    console.log('Adding cell: ' + data[i].values[j - cl] + ' to column: ' + data[i].name);
                    addBlock(cols[i], cells, j, 'grid-vcell');
                    cells[j].attr('id', data[i].id + '_cell' + (j - cl));
                    cells[j].text(data[i].values[j - cl]);
                }
            } else {
                group_headers.push($('<div>'));
                var l = group_headers.length - 1;
                var group_width = 0;
                var container;

                for (var n = 0; n < data[i].values.length; n++) {
                    var child_id = data[i].values[n];
                    var child_column = getElement(child_id);
                    group_width += child_column[0].offsetWidth;
                }
                group_headers[l].addClass('grid-group-header');
                group_headers[l].css({width: (group_width-7)+'px'});
                group_headers[l].attr('id', data[i].id);
                group_headers[l].text(data[i].name);

                if (data[i].type == 'total') {
                    container = getElement(data[i].values[0] + '_header0');
                } else {
                    container = getElement(data[i].values[0] + '_header' + (span-2));
                }

                container.append(group_headers[l]);
            }
        }
    }

    function renderGridC (element, data) {
        var span = 1;
        var _data = data.reduce(function (obj, col) {
            obj[col.id] = col;
            return obj;
        }, {});
        var totals = data.filter(function (column) { return column.type == 'total'})
            .map(function (total) { return total.id });
        var groups = data.filter(function (column) { return column.type == 'group'})
            .map(function (group) { return group.id });

        span = totals.length > 0 ? 3 : groups.length > 0 ? 2 : 1;

        var grid_header = addElement('grid-header', 'grid-header');
        var grid_body = addElement('grid-body', 'grid-body');
        var grid_footer = addElement('grid-footer', 'grid-footer');
        element.append(grid_header).append(grid_body).append(grid_footer);

        for (var i = 0; i < data.length; i++) {
            var range = [];
            var expanded;
            var total_full = [];
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
                data[i].values.unshift(data[i].id);
                if (data[i].type == 'total') {
                    data[i].values = data[i].values.map(function (val) {
                        if (_data[val].type == 'group') {
                            return _data[val].values;
                        } else {
                            return [val];
                        }
                    }).reduce(function (a,b) {return a.concat(b)});

                }
                getElement(data[i].values[1] + '_header').before(addHeaderColumn(data[i].id + '_header', span).addClass('grid-column-hidden'));
                getElement(data[i].values[1] + '_body').before(addBodyColumn(data[i].id + '_body', getGroupedValues(data[i], data)).addClass('grid-column-hidden'));

                var row_num = data[i].type == 'group' ? (span - 2) : 0;
                for (var j = 0; j < data[i].values.length; j++) {
                    range.push(data[i].values[j] + '_header_' + row_num);
                }
                var group_header = addRange(data[i].id + '_title_header', range, 'grid-group-header grid-centered', data[i].name);
                getElement(data[i].values[expanded] + '_header_' + row_num).append(group_header);


                group_header.on('dblclick',
                    {
                        group: angular.merge({}, data[i]),
                        total: angular.merge({}, _data[data[i].group])
                    },
                    function (event) {
                        var elem = $(event.currentTarget);
                        var expanded = $lstore.get(event.data.group.id);
                        $lstore.set(event.data.group.id, (expanded == 0 ? 1 : 0));
                        toggleGroup(event.data.group, event.data.total);
                });
            }
        }
    }

    function link (scope, element) {
        //renderGridA(element);
        //renderGridB(element);
        renderGridC(element, dataService.data1);
    }

    return {
        restrict: 'A',
        link: link
    }
});