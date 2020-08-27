var max_content_height = 0;
var previous_html = "";
$(function () {
    Shadowbox.init();

    $('.part_tab_container').show();
    $('#part_container').find('.part_content').hide();
    $('#part_container').find('.part_content:first').show();

    $('.tab a').click(function () {
        $('.tab').removeClass('active');
        $(this).parent().addClass('active');

        var tab = $(this).attr('id').split(':')[1];
        $('#part_container').find('.part_content').hide();
        setTimeout(function () { $('#part_container').find('#' + tab).show() }, 100);
    });

    $('.part').each(function (i, obj) {
        $(this).find('ul.attributeTabs li:first').addClass('active');
        $(this).find('div.attributeContent').hide();
        $(this).find('div.attributeContent:first').show();
    });

    $('ul.attributeTabs a').click(function () {
        var partid = $(this).data('partid');
        $('ul#attribtabs_' + partid + ' li').removeClass('active');
        $(this).parent().addClass('active');

        var tab = $(this).attr('id').split(':')[1];
        var partid = $(this).data('partid');
        $('#attribs_' + partid).find('.attributeContent').hide();
        setTimeout(function () { $('#' + tab + '_' + partid).show() }, 250);
    });

    $('.part').each(function (i, part) {
        $(part).find('.left_col .image_array a.main').hide();
        $(part).find('.left_col .image_array a.main:first').show();
        $(part).find('.left_col .image_array a.sub:first').addClass("active");
    });

    $(document).on('click', '.image_array a.sub', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            var sort = $(this).data('sort');
            var partid = $(this).data('partid');
            $(this).parent().find('a.sub').removeClass('active');
            $(this).addClass('active');
            $(this).parent().find('a.main').hide();
            $('#' + partid + '_' + sort).show();
        }

    });

    $.each($('.part_content'), function (i, content) {
        var parts = $(content).find('.part');
        if ((parts.length * 450) > max_content_height) {
            max_content_height = (parts.length * 430);
        }
    });
});