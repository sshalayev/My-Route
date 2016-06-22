/**
 * Created by user on 22.06.2016.
 */
app.service('gridData', [function () {
    this.projects = [
        "Agreewithme","Archer Admin","Aria","B2Lead 2.0.", "BaDoun", "Bankaroo", "Dscopesystems",
        "Earn", "GetPackage", "HealthOutcome", "Lots Sprint 1", "LottoSend", "Matan iPhone Server", "Medasense",
        "MHO Support", "MoxiMethod", "MRB+ clones", "Musketeers TM", "Photo app", "PixCell", "Psychographic",
        "Recruitment System", "room2care", "SAP Kiev", "Schneps", "Spider", "Varian", "Varian WPF", "VOS", "WebLiveView", "Welpy"
    ];

    this.dailyReportsColumnDefs = [
        {
            name: 'Date',
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
            type: 'number',
            minWidth: 100,
            width: '5%'
        },
        {
            name: 'Report',
            type: 'string',
            minWidth: 100,
            width: '40%'
        },
        {
            name: 'spud',
            type: 'number',
            displayName: '',
            minWidth: 20,
            width: '5%'
        }
    ];
    this.dailyReportsData = [
        {
            'Date': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 2,
            'Report': 'Новый проект по ветке Бадун - многооборотка. обсуждение'
        },
        {
            'Date': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Mon Feb 01 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'Date': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 3,
            'Report': 'Новый проект по ветке Бадун - многообороткаю оценка и обсуждение'
        },
        {
            'Date': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 2,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'Date': 'Tue Feb 02 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'WebLiveView',
            'Task': 'PM and SA',
            'Hours': 1,
            'Report': 'call an tasks review'
        },
        {
            'Date': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'Date': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Wed Feb 03 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'Date': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 2,
            'Report': 'Даниель металон'
        },
        {
            'Date': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 1,
            'Report': 'Бадун, таможня'
        },
        {
            'Date': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'Date': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Thu Feb 04 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'Date': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Accinta, Bud'
        },
        {
            'Date': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Fri Feb 05 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'MRB+ clones',
            'Task': 'PM',
            'Hours': 1,
            'Report': 'new scope review'
        },
        {
            'Date': 'Mon Feb 08 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'Date': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'Date': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Tue Feb 09 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Wed Feb 10 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Wed Feb 10 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Wed Feb 10 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'Date': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Thu Feb 11 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 2,
            'Report': 'general tasks review, work with Jira, team meetings'
        },
        {
            'Date': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Accinta, Bud'
        },
        {
            'Date': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Fri Feb 12 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'MRB+ clones',
            'Task': 'PM',
            'Hours': 1,
            'Report': 'data review'
        },
        {
            'Date': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'Date': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Mon Feb 15 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'Date': 'Tue Feb 16 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Tue Feb 16 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Tue Feb 16 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 3,
            'Report': 'Fade таск. анализ и оценка'
        },
        {
            'Date': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Wed Feb 17 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Анализ выполнимости и составление предложений',
            'Hours': 2,
            'Report': 'Fade согласование'
        },
        {
            'Date': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'Date': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Thu Feb 18 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'Date': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Acinta, bud'
        },
        {
            'Date': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Fri Feb 19 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'MRB+ clones',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'data review with dev'
        },
        {
            'Date': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'Date': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Development',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Mon Feb 22 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'Date': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Development',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Tue Feb 23 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'Date': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Development',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'Date': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'WebLiveView',
            'Task': 'PM and SA',
            'Hours': 1,
            'Report': 'call and tasks review'
        },
        {
            'Date': 'Wed Feb 24 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'WebLiveView',
            'Task': 'PM and SA',
            'Hours': 1,
            'Report': 'call and tasks review'
        },
        {
            'Date': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Барри'
        },
        {
            'Date': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Development',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        },
        {
            'Date': 'Thu Feb 25 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'room2care',
            'Task': 'PM',
            'Hours': 2,
            'Report': '\ttask review, status meeting, SA'
        },
        {
            'Date': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Dscopesystems',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'Team meeting, tasks review and planning'
        },
        {
            'Date': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Запуск проектов',
            'Task': 'Беспилотники',
            'Hours': 1,
            'Report': 'Acinta, bud'
        },
        {
            'Date': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Development',
            'Hours': 2,
            'Report': 'team coordination. tasks review, SA'
        },
        {
            'Date': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'BaDoun',
            'Task': 'Management',
            'Hours': 2,
            'Report': 'Next week planning'
        },
        {
            'Date': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'Lots Sprint 1',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'meetings, Jira, SA, tasks review '
        },
        {
            'Date': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'MRB+ clones',
            'Task': 'PM',
            'Hours': 2,
            'Report': 'task review and Plans'
        },
        {
            'Date': 'Fri Feb 26 2016 00:00:00 GMT+0200 (EET)',
            'Project': 'VOS',
            'Task': 'Project Management',
            'Hours': 1,
            'Report': 'Jira, tasks review, team meeting '
        }
    ];
}]);