app.directive('aGrid', function () {
    if (!$) {var $ = angular.element}
    var data = {
        rows: ['day 1', 'day 2', 'day 3'],
        columns: [
            {
                name: 'all',
                subs: [
                    {
                        name: 'total1',
                        subs: [
                            {name: 'col1', subs: []},
                            {name: 'col2', subs: []},
                            {name: 'col3', subs: []}
                        ]
                    },
                    {
                        name: 'total2',
                        subs: [
                            {name: 'col4', subs: []},
                            {name: 'col5', subs: []},
                            {name: 'col6', subs: []}
                        ]
                    }
                ]
            }
        ],
        data: [
            [10,56,45,23,13,9],
            [12,64,47,21,10,11],
            [15,58,32,45,16,8]
        ]
    };
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

    //function renderGrid() {
    //
    //}

    function link (scope, element) {
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

    return {
        restrict: 'A',
        link: link
    }
});