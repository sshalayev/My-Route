app.directive('inlineEdit', function ($timeout) {
    if (!$) { var $ = angular.element; }

    function link (scope, element, attr, ngModel) {
        var toggle = false;
        var original = element.contents();
        var base_width = element.offsetWidth;
        var base_height = element.offsetHeight;
        var original_wrapped = $('<div>');
        var controls = {
            ined_trigger: {
                elem: $('<div>'),
                class: 'ined-button--white',
                html: '<i class="icon-chevron-down icon-12"></i>'
            },
            ined_save: {
                elem: $('<div>'),
                class: 'ined-button--white',
                html: '<i class="icon-chevron-down icon-12"></i>'
            },
            ined_del: {
                elem: $('<div>'),
                class: 'ined-button--white',
                html: '<i class="icon-chevron-down icon-12"></i>'
            }
        };

        var control = $('<div>');
        var del = $('<div>');
        var save = $('<div>');
        var edit_div = $('<div>');
        var edit_input = $('<input>');
        var bcontrol = $('<div>');
        var bdel = $('<div>');
        var bsave = $('<div>');

        element.clear();
        element.addClass('ined-flex');
        original_wrapped.css({'flex': 'auto'});
        original_wrapped.append(original);
        element.append(original_wrapped);

        bcontrol.html('<i class="icon-chevron-down icon-12"></i>').addClass('ined-button').addClass('ined-button--white');
        bdel.html('<i class="icon-reject icon-12"></i>').addClass('ined-button').addClass('ined-button--del');
        bsave.html('<i class="icon-check icon-12"></i>').addClass('ined-button').addClass('ined-button--ok');
        control.addClass('ined-control').append(bcontrol);
        control.addClass('ined-control').append(bdel);
        control.addClass('ined-control').append(bcontrol);
        edit_div.addClass('opaque');
        edit_div.addClass('ined-container');
        edit_input.addClass('inline-edit-input');
        edit_input.val(scope.inlineEdit);
        bdel.addClass('round-button');
        bdel.addClass('round-button--red');
        bdel.html('<i class="icon-reject icon-12"></i>');
        bsave.addClass('round-button');
        bsave.addClass('round-button--green');
        bsave.html('<i class="icon-check icon-12"></i>');

        element.on('click', function (e) {
            toggle = !toggle;

            if (toggle) {
                element.addClass('round-button__active');
                element.parent().append(edit_div);
                edit_div.removeClass('opaque');
                edit_div.append(edit_input);
                edit_div.append(bsave);
                edit_div.append(bdel);

            } else {
                edit_div.addClass('opaque');
                element.removeClass('round-button__active');
                $timeout(function () {
                   edit_div.detach();
                }, 300);

            }
        });
    }

    return {
        restrict: 'A',
        require: '?ngModel',
        scope: {
            inlineEdit: '='
        },
        link: link
    }
});