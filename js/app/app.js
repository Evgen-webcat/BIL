$(document).ready(function () {
    $('.services').hover(function () {
        var background = $(this).find('.services_background');
        var src = background.attr('src');

        $('.services_background').css('opacity', '0');
        $('.screen_2_content').addClass('hover');
        $('.screen_2_content').css('background-image', 'url(' + src + ')');

    });

    $('.services').mouseout(function () {
        $('.services_background').css('opacity', '1');
        $('.screen_2_content').removeClass('hover');
        $('.screen_2_content').css('background-image', '');
    });
});
