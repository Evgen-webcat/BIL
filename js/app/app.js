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

    $('.project').hover(function () {
        var background = $(this).find('.project_background');
        var src = background.attr('src');

        $('.project_background').css('opacity', '0');
        $(this).find('.project_content_paragraph').slideDown();
        $('.projects').css('background-image', 'url(' + src + ')');

    });

    $('.project').mouseout(function () {
        $('.project_background').css('opacity', '.7');
        $(this).find('.project_content_paragraph').slideUp();
        $('.projects').css('background-image', '');
    });

    if ($(window).width() > 1024) {
        var src = $('.screen_video_background').data('src');
        $('.screen_video_background').vide(src);
    }
});
