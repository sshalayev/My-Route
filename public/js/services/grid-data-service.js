/**
 * Created by user on 22.06.2016.
 */
app.service('gridData', ['$filter', function ($filter) {
    var _self = this;

    Object.defineProperties(this, {
        dailyReportsData: {
            get: function () {
                return dailyReportsData.map(function (obj) {
                    obj.dateString = new Date(obj.dateString);
                    return obj;
                });
            }
        }
    });

    this.dailyReportsColumnDefs = [
        {
            name: 'date',
            displayName: 'Date',
            field: 'dateString',
            cellFilter: 'date',
            cellClass: 'md-datagrid-cell',
            headerCellClass: 'md-datagrid-header',
            type: 'date',
            minWidth: 160,
            width: 160
        },
        {
            name: 'project',
            displayName: 'Project',
            type: 'string',
            cellClass: 'md-datagrid-cell',
            headerCellClass: 'md-datagrid-header',
            minWidth: 160
        },
        {
            name: 'task',
            displayName: 'Task',
            type: 'string',
            cellClass: 'md-datagrid-cell',
            headerCellClass: 'md-datagrid-header',
            minWidth: 160
        },
        {
            name: 'hours',
            displayName: 'Hrs',
            type: 'number',
            cellClass: 'md-datagrid-cell md-datagrid-number',
            headerCellClass: 'md-datagrid-header',
            minWidth: 80,
            width: 80
        },
        {
            name: 'body',
            displayName: 'Report',
            type: 'string',
            cellClass: 'md-datagrid-cell',
            headerCellClass: 'md-datagrid-header',
            minWidth: 160
        }
        //{
        //    name: 'spud',
        //    type: 'number',
        //    displayName: '',
        //    cellClass: 'md-datagrid-cell',
        //    headerCellClass: 'md-datagrid-header',
        //    minWidth: 20,
        //    width: '2%'
        //}
    ];
    var dailyReportsData = [
        {
            'dateString': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Анализ выполнимости и составление предложений',
            'hours': 2,
            'body': 'Новый проект по ветке Бадун - многооборотка. обсуждение'
        },
        {
            'dateString': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Анализ выполнимости и составление предложений',
            'hours': 3,
            'body': 'Новый проект по ветке Бадун - многообороткаю оценка и обсуждение'
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 2,
            'body': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'project': 'WebLiveView',
            'task': 'PM and SA',
            'hours': 1,
            'body': 'call an tasks review'
        },
        {
            'dateString': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Барри'
        },
        {
            'dateString': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Анализ выполнимости и составление предложений',
            'hours': 2,
            'body': 'Даниель металон'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Анализ выполнимости и составление предложений',
            'hours': 1,
            'body': 'Бадун, таможня'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Барри'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Accinta, Bud'
        },
        {
            'dateString': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'project': 'MRB+ clones',
            'task': 'PM',
            'hours': 1,
            'body': 'new scope review'
        },
        {
            'dateString': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Барри'
        },
        {
            'dateString': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Wed Feb 10 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Wed Feb 10 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Wed Feb 10 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Барри'
        },
        {
            'dateString': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 2,
            'body': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Accinta, Bud'
        },
        {
            'dateString': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'project': 'MRB+ clones',
            'task': 'PM',
            'hours': 1,
            'body': 'data review'
        },
        {
            'dateString': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Барри'
        },
        {
            'dateString': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Tue Feb 16 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Tue Feb 16 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Tue Feb 16 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Анализ выполнимости и составление предложений',
            'hours': 3,
            'body': 'Fade таск. анализ и оценка'
        },
        {
            'dateString': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Анализ выполнимости и составление предложений',
            'hours': 2,
            'body': 'Fade согласование'
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Барри'
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Acinta, bud'
        },
        {
            'dateString': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'project': 'MRB+ clones',
            'task': 'PM',
            'hours': 2,
            'body': 'data review with dev'
        },
        {
            'dateString': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Барри'
        },
        {
            'dateString': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Development',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Development',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Development',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'project': 'WebLiveView',
            'task': 'PM and SA',
            'hours': 1,
            'body': 'call and tasks review'
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'project': 'WebLiveView',
            'task': 'PM and SA',
            'hours': 1,
            'body': 'call and tasks review'
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Барри'
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Development',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'project': 'room2care',
            'task': 'PM',
            'hours': 2,
            'body': '\ttask review, status meeting, SA'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Dscopesystems',
            'task': 'PM',
            'hours': 2,
            'body': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Запуск проектов',
            'task': 'Беспилотники',
            'hours': 1,
            'body': 'Acinta, bud'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Development',
            'hours': 2,
            'body': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'project': 'BaDoun',
            'task': 'Management',
            'hours': 2,
            'body': 'Next week planning'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'project': 'Lots Sprint 1',
            'task': 'PM',
            'hours': 2,
            'body': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'project': 'MRB+ clones',
            'task': 'PM',
            'hours': 2,
            'body': 'task review and Plans'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'project': 'VOS',
            'task': 'project Management',
            'hours': 1,
            'body': 'Jira, tasks review, team meeting '
        }
    ];
}]);