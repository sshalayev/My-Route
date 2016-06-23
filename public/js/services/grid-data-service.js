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
    this.projects = [
        "Agreewithme","Archer Admin","Aria","B2Lead 2.0.", "BaDoun", "Bankaroo", "Dscopesystems",
        "Earn", "GetPackage", "HealthOutcome", "Lots Sprint 1", "LottoSend", "Matan iPhone Server", "Medasense",
        "MHO Support", "MoxiMethod", "MRB+ clones", "Musketeers TM", "Photo app", "PixCell", "Psychographic",
        "Recruitment System", "room2care", "SAP Kiev", "Schneps", "Spider", "Varian", "Varian WPF", "VOS", "WebLiveView", "Welpy"
    ];

    this.dailyReportsColumnDefs = [
        {
            name: 'date',
            field: 'dateString',
            cellFilter: 'date',
            type: 'date',
            minWidth: 100,
            width: '10%'
        },
        {
            name: 'Project',
            type: 'string',
            minWidth: 100,
            width: '20%'
        },
        {
            name: 'Task',
            type: 'string',
            minWidth: 100,
            width: '20%'
        },
        {
            name: 'Hours',
            displayName: 'Hrs',
            type: 'number',
            minWidth: 50,
            width: '3%'
        },
        {
            name: 'Report',
            type: 'string',
            minWidth: 100,
            width: '45%'
        },
        {
            name: 'spud',
            type: 'number',
            displayName: '',
            minWidth: 20,
            width: '2%'
        }
    ];
    var dailyReportsData = [
        {
            'dateString': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 2,
            'Report': 'Новый проект по ветке Бадун - многооборотка. обсуждение'
        },
        {
            'dateString': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 3,
            'Report': 'Новый проект по ветке Бадун - многообороткаю оценка и обсуждение'
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 2,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'WebLiveView',
            'Task': 'PM and SA',
            'Hours': 1,
            'Report': 'call an tasks review'
        },
        {
            'dateString': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'dateString': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 2,
            'Report': 'Даниель металон'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 1,
            'Report': 'Бадун, таможня'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Accinta, Bud'
        },
        {
            'dateString': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'MRB+ clones',
            'Task': 'PM',
            'Hours': 1,
            'Report': 'new scope review'
        },
        {
            'dateString': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'dateString': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Wed Feb 10 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Wed Feb 10 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Wed Feb 10 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'dateString': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 2,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'dateString': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Accinta, Bud'
        },
        {
            'dateString': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'MRB+ clones',
            'Task': 'PM',
            'Hours': 1,
            'Report': 'data review'
        },
        {
            'dateString': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'dateString': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Tue Feb 16 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Tue Feb 16 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Tue Feb 16 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 3,
            'Report': 'Fade таск. анализ и оценка'
        },
        {
            'dateString': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 2,
            'Report': 'Fade согласование'
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Acinta, bud'
        },
        {
            'dateString': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'MRB+ clones',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'data review with dev'
        },
        {
            'dateString': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'dateString': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Development',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Development',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Development',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'WebLiveView',
            'Task': 'PM and SA',
            'Hours': 1,
            'Report': 'call and tasks review'
        },
        {
            'dateString': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'WebLiveView',
            'Task': 'PM and SA',
            'Hours': 1,
            'Report': 'call and tasks review'
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Development',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'dateString': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'room2care',
            'Task': 'PM',
            'Hours': 2,
            'Report': '\ttask review, status meeting, SA'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Acinta, bud'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Development',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'Next week planning'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'MRB+ clones',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'task review and Plans'
        },
        {
            'dateString': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        }
    ];
}]);