$(document).ready(function () {
    var screens = $('.screen');
    var current = 0;
    var dot = '<a href="#" class="dot"></a>';

    for (var i = 0; i < screens.length; i++) {
        $('.dots').append(dot);
    };

    $('.dot').eq(0).addClass('active');

    $('.dot').click(function () {
        var dot = $(this);
        var index = dot.index();
        $('.dot.active').removeClass('active');
        dot.addClass('active');
        current = index;
        scrollTo(current);
    });

    function scrollTo(screen) {
        $('.screen_active').removeClass('screen_active').addClass('screen_prev');
        $('.screen_prev').removeClass('screen_prev');
        screens.eq(screen).addClass('screen_active');
        if (screen === 0 || screen === 5) {
            $('.social_links, .dots, .mouse_img').removeClass('white');
        } else if (screen === 4) {
            $('.social_links').removeClass('white');
            $('.dots, .mouse_img').addClass('white');
        } else {
            $('.social_links, .dots, .mouse_img').addClass('white');
        }

        if (screen === 2) {
            $('.number').spincrement({
                thousandSeparator: '',
                duration: 2000,
                easing: ''
            });
        }
    };
});
