app.directive('vGrid', function (dataService, $lstore) {
    if (!$) {
        var $ = angular.element
    }

    var grid_header = addElement('grid-header', 'grid-header');
    var grid_body = addElement('grid-body', 'grid-body');
    var grid_footer = addElement('grid-footer', 'grid-footer');
    var data = dataService.data2;

    function findItem (id) {
        return data.reduce(function (a, b) {return a.id == id ? a : b});
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

    function addGroupHeader (id, value, parent_id) {
        var group_header = addElement(id + '_header', 'vgrid-vblock');
        var group_title = addElement(id + '_title', 'vgrid-title');
        var group_container = addElement(id + '_container', 'vgrid-hblock');
        var parent = parent_id ? getElement(parent_id + '_container') : grid_header;
        group_title.text(value);
        group_header.append(group_title).append(group_container);
        parent.append(group_header);

        group_title.on('dblclick', {elem_id: id}, function(event) {
            event.stopPropagation();
            var elem = $(event.target);
            var elem_id = event.data.elem_id;
            console.log('Clicked ' + event.data.elem_id);
            elem.toggleClass('vgrid-title--collapsed');
            getElement(elem_id + '_container').toggleClass('vgrid-column-hidden');
            getElement(elem_id + '_body_container').toggleClass('vgrid-column-hidden');
            getElement(elem_id + '_total').toggleClass('vgrid-column-hidden');
        });

        return group_header;
    }

    function addSimpleHeader (id, value, parent_id) {
        var header = addElement(id + '_header', 'vgrid-simple-title');
        var parent = parent_id ? getElement(parent_id + '_container') : grid_header;
        header.text(value);
        parent.append(header);

        return header;
    }

    function addGroupBody (id, parent_id) {
        var group_body = addElement(id + '_body', 'vgrid-hblock');
        var total = addElement(id + '_total', 'vgrid-column');
        var parent = parent_id ? getElement(parent_id + '_body_container') : grid_body;
        var values = getGroupedValues(id);

        for (var i = 0; i < values.length; i++) {
            var cell_id = id + '_total_' + i;
            total.append(addElement(cell_id, 'vgrid-cell', values[i]));
        }
        total.addClass('vgrid-column-hidden');
        group_body.append(total).append(addElement(id + '_body_container', 'vgrid-hblock'));
        parent.append(group_body);

        return group_body;
    }

    function addSimpleBody (id, values, parent_id) {
        var column = addElement(id + '_body', 'vgrid-column');
        var parent = parent_id ? getElement(parent_id + '_body_container') : grid_body;

        for (var i = 0; i < values.length; i++) {
            var cell_id = id + '_' + i;
            column.append(addElement(cell_id, 'vgrid-cell', values[i]));
        }
        parent.append(column);

        return column;
    }

    function getGroupedValues (group_id) {
        var results = [];
        parseGroup(group_id);

        function parseGroup (id) {
            var item = findItem(id);
            if (item.values) {
                results.push(item.values);
            } else {
                for (var i = 0; i < item.children.length; i++) {
                    parseGroup(item.children[i]);
                }
            }
        }

        return results.reduce(function (a, b) { return sumArrays(a, b)});
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

    function buildGrid (id) {
        var item = findItem(id);

        if (item.values) {
            console.log('Single: ' + item.id);
            addSimpleHeader(item.id, item.name, item.parent);
            addSimpleBody(item.id, item.values, item.parent);
        } else {
            console.log('Group: ' + item.id + ' : ' + item.children);
            addGroupHeader(item.id, item.name, item.parent);
            addGroupBody(item.id, item.parent);
            for (var i = 0; i < item.children.length; i++) {
                buildGrid(item.children[i]);
                console.log(item.children[i]);
            }
        }

    }

    function renderGridD (element) {
        var _data = data.reduce(function (obj, col) {
            obj[col.id] = col;
            return obj;
        }, {});
        var totals = data.filter(function (column) { return !column.parent });

        element.append(grid_header).append(grid_body).append(grid_footer);
        for (var i = 0; i < totals.length; i++) {
            buildGrid(totals[i].id, data);
        }
    }

    function link (scope, element) {
        renderGridD(element);
    }

    return {
        restrict: 'A',
        link: link
    }
});