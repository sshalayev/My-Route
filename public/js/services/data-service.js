/**
 * Created by user on 07.04.2016.
 */
app.service('dataService', function () {
    this.data0 = {
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
    //NB! Groups definitions should go after columns definitions
    this.data1 = [
        {id: 'col0', name: 'Day', type: 'rowheader', group: null, values: ['day 1', 'day 2', 'day 3', 'day4', 'day5', 'day6']},
        {id: 'col1', name: 'Date', type: 'date', group: null, values: ['02-feb-2016', '14-feb-2016', '03-mar-2016', '10-mar-2016', '28-mar-2016', '03-apr-2016']},
        {id: 'col2', name: 'par 1', type: 'normal', group: 'group0', values: [10, 12, 15, 18, 14, 15]},
        {id: 'col3', name: 'par 2', type: 'normal', group: 'group0', values: [56, 64, 58, 60, 66, 58]},
        {id: 'col4', name: 'par 3', type: 'normal', group: 'group0', values: [45, 47, 32, 36, 34, 40]},
        {id: 'col5', name: 'par 1', type: 'normal', group: 'group1', values: [23, 21, 45, 36, 38, 30]},
        {id: 'col6', name: 'par 2', type: 'normal', group: 'group1', values: [13, 10, 16, 12, 13, 15]},
        {id: 'col7', name: 'par 3', type: 'normal', group: 'group1', values: [9, 11, 8, 7, 9, 12]},
        {id: 'col8', name: 'index', type: 'normal', group: null, values: ['abc', 'dev', 'stg', 'prg', 'com', 'pst']},
        {id: 'group0', name: 'Group 1', type: 'group', group: 'total', values: ['col2', 'col3', 'col4']},
        {id: 'group1', name: 'Group 2', type: 'group', group: 'total', values: ['col5', 'col6', 'col7']},
        {id: 'total', name: 'Total', type: 'total', group: null, values: ['group0', 'group1']}
    ];

    this.data2 = [
        {id: 'col0', name: 'Day', type: 'rowheader', parent: null, values: ['day 1', 'day 2', 'day 3', 'day4', 'day5', 'day6']},
        {id: 'col1', name: 'Date', type: 'date', parent: null, values: ['02-feb-2016', '14-feb-2016', '03-mar-2016', '10-mar-2016', '28-mar-2016', '03-apr-2016']},
        {id: 'total0', name: 'Total 1', type: 'group', parent: null, children: ['group0', 'group1']},
        {id: 'group0', name: 'Group 1', type: 'group', parent: 'total0', children: ['col2', 'col3', 'col4']},
        {id: 'col2', name: 'par 1', type: 'normal', parent: 'group0', values: [10, 12, 15, 18, 14, 15]},
        {id: 'col3', name: 'par 2', type: 'normal', parent: 'group0', values: [56, 64, 58, 60, 66, 58]},
        {id: 'col4', name: 'par 3', type: 'normal', parent: 'group0', values: [45, 47, 32, 36, 34, 40]},
        {id: 'group1', name: 'Group 2', type: 'group', parent: 'total0', children: ['col5', 'col6', 'col7']},
        {id: 'col5', name: 'par 1', type: 'normal', parent: 'group1', values: [23, 21, 45, 36, 38, 30]},
        {id: 'col6', name: 'par 2', type: 'normal', parent: 'group1', values: [13, 10, 16, 12, 13, 15]},
        {id: 'col7', name: 'par 3', type: 'normal', parent: 'group1', values: [9, 11, 8, 7, 9, 12]},
        {id: 'total1', name: 'Total 2', type: 'group', parent: null, children: ['group2', 'group3']},
        {id: 'group2', name: 'Group 3', type: 'group', parent: 'total1', children: ['col8', 'col8', 'col10']},
        {id: 'col8', name: 'par 1', type: 'normal', parent: 'group2', values: [23, 21, 45, 36, 38, 30]},
        {id: 'col9', name: 'par 2', type: 'normal', parent: 'group2', values: [13, 10, 16, 12, 13, 15]},
        {id: 'col10', name: 'par 3', type: 'normal', parent: 'group2', values: [9, 11, 8, 7, 9, 12]},
        {id: 'group3', name: 'Group 4', type: 'group', parent: 'total1', children: ['col11', 'col12', 'col13']},
        {id: 'col11', name: 'par 1', type: 'normal', parent: 'group3', values: [23, 21, 45, 36, 38, 30]},
        {id: 'col12', name: 'par 2', type: 'normal', parent: 'group3', values: [13, 10, 16, 12, 13, 15]},
        {id: 'col13', name: 'par 3', type: 'normal', parent: 'group3', values: [9, 11, 8, 7, 9, 12]},
        {id: 'col14', name: 'index', type: 'normal', parent: null, values: ['abc', 'dev', 'stg', 'prg', 'com', 'pst']}
    ];

    this.archerNav = [
        {
            state: 'reports',
            name: 'Reports',
            icon: 'description',
            subs: [
                {
                    state: 'reports.daily',
                    name: 'Daily reports'
                },
                {
                    state: 'reports.status',
                    name: 'Status report'
                }
            ]
        },
        {
            state: 'pm',
            name: 'Project Management',
            icon: 'assessment',
            subs: [
                {
                    state: 'pm.projects',
                    name: 'Projects'
                },
                {
                    state: 'pm.control',
                    name: 'Control'
                },
                {
                    state: 'pm.csi',
                    name: 'Client Satisfaction'
                }
            ]
        },
        {
            state: 'hrm',
            name: 'HR Management',
            icon: 'supervisor_account',
            subs: [
                {
                    state: 'hrm.userProfile',
                    name: 'Projects'
                }
            ]
        },
        {
            state: 'finances',
            name: 'Finances',
            icon: 'attach_money',
            subs: [
                {
                    state: 'finances.flows',
                    name: 'Flows'
                },
                {
                    state: 'finances.wires',
                    name: 'Wires'
                }
            ]
        },
        {
            state: 'analytics',
            name: 'Analytics',
            icon: 'multiline_chart',
            subs: [
                {
                    state: 'analytics.E1',
                    name: 'Utilization Effectiveness'
                },
                {
                    state: 'analytics.E2',
                    name: 'Cost Effectiveness'
                },
                {
                    state: 'analytics.E3',
                    name: 'Dev. Effectiveness (CPI)'
                },
                {
                    state: 'analytics.E4',
                    name: 'A/R Effectiveness'
                }
            ]
        }
    ];

});
