app.directive('aGrid', function (dataService) {
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

    function addColumn (id, values, span) {
        var column = addElement(id, 'grid-column');

        for (var i = 0; i < span; i++) {
            var cell_id = id + '_header' + i;

            column.append(addElement(cell_id, 'grid-vcell grid-column-header'));
        }

        for (var i = 0; i < values.length; i++) {
            var cell_id = id + '_cell' + i;
            column.append(addElement(cell_id, 'grid-vcell', values[i]));
        }

        return column;
    }

    function addRange (id, range, css_class, value) {
        console.log(range);
        var range_elem = addElement(id, css_class, value);
        //[top, left, bottom, right]
        var points = {
            top: [], left: [], bottom: [], right: []
        };

        for (var i = 0; i < range.length; i++) {
            var cell = $(document.getElementById(range[i]));
            points.top.push(cell[0].offsetTop);
            points.left.push(cell[0].offsetLeft);
            points.bottom.push(cell[0].offsetTop + cell[0].offsetHeight);
            points.right.push(cell[0].offsetLeft + cell[0].offsetWidth);
        }

        angular.forEach(points, function (values, key) {
            if (key == 'top' || key == 'left') {
                this[key] = values.reduce(function (a, b) { return a > b ? b : a });
            } else {
                this[key] = values.reduce(function (a, b) { return a > b ? a : b });
            }
        }, points);
        range_elem.css({
            width: (points.right - points.left - 7) + 'px',
            height: (points.bottom - points.top - 7) + 'px'
        });
        return range_elem;
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

    function collapseGroup (data, group_id) {
        var group = findGroup(data, group_id)[0];
        var group_columns = findGroup(data, group.values);
        var group_values = group_columns.map(function (column) { return column.values }).reduce(function (a, b) { return sumArrays(a, b)});


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
                    var child_column = $(document.getElementById(child_id));
                    group_width += child_column[0].offsetWidth;
                }
                group_headers[l].addClass('grid-group-header');
                group_headers[l].css({width: (group_width-7)+'px'});
                group_headers[l].attr('id', data[i].id);
                group_headers[l].text(data[i].name);

                if (data[i].type == 'total') {
                    container = $(document.getElementById(data[i].values[0] + '_header0'))
                } else {
                    container = $(document.getElementById(data[i].values[0] + '_header' + (span-2)));
                }

                container.append(group_headers[l]);
            }
        }
    }

    function renderGridC (element, data) {
        var groups = data.filter(function (column) { return column.type == 'group'});
        var span = groups.length > 1 ? 3 : groups.length == 1 ? 2 : 1;

        for (var i = 0; i < data.length; i++) {
            var range = [];
            if (data[i].type !== 'group' && data[i].type !== 'total') {
                element.append(addColumn(data[i].id, data[i].values, span));
                if (!data[i].group) {
                    for (var j = 0; j < span; j++) {
                        range.push(data[i].id + '_header' + j);
                    }
                    $(document.getElementById(data[i].id + '_header0')).append(addRange(data[i].id + 'header', range, 'grid-group-header grid-centered', data[i].name));
                } else {
                    $(document.getElementById(data[i].id + '_header' + (span-1))).text(data[i].name).addClass('grid-centered');
                }

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