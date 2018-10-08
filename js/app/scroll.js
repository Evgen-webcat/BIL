$(document).ready(function () {
    var screens = $('.screen');
    var current = 0;
    var dot = '<a href="#" class="dot"></a>';
    var number = true;

    for (var i = 0; i < screens.length; i++) {
        $('.dots').append(dot);
    };

    $('.dot').eq(0).addClass('active');
    $('.dots').data('index', '1');

    $('.dot').click(function () {
        var index = $(this).index();
        scrollTo(index);
    });

    function bindWheel(event) {
        $(window).bind('mousewheel', function (event) {
            event.preventDefault();
            Wheel(event);
        });
        $(window).swipe({
            swipe: function (event, direction) {
                tuoch(direction);
            }
        });
    };

    function Wheel(event) {
        if (event.originalEvent.wheelDelta < 0) {
            if (current !== screens.length - 1) {
                var next = current + 1;
                scrollTo(next);
            }
        } else {
            if (current !== 0) {
                var prev = current - 1;
                scrollTo(prev);
            }
        }
    };

    function tuoch(direction) {
        if (direction == 'down') {
            if (current !== 0) {
                var prev = current - 1;
                scrollTo(prev);
            }
        } else if (direction == 'up') {
            if (current !== screens.length - 1) {
                var next = current + 1;
                scrollTo(next);
            }
        }
    }

    bindWheel();

    function numberOff() {
        number = false
    };

    function scrollTo(screen) {
        $(window).unbind('mousewheel');
        $(window).swipe('disable');
        $('.locker').css('display', 'block');
        $('.fade').css('opacity', '0');
        setTimeout(function () {
            if (current !== screen) {
                screen_active = $('.screen_active');

                $('.screen_prev_up').removeClass('screen_prev_up');
                $('.screen_prev_down').removeClass('screen_prev_down');
                $('.screen_current_up').removeClass('screen_current_up');
                $('.screen_current_down').removeClass('screen_current_down');
                $('.dots').css('transform', 'translateY(-' + 40 * screen + 'px)');
                $('.dot.active').removeClass('active');
                $('.dot').eq(screen).addClass('active');

                if (current < screen) {
                    screen_active.addClass('screen_prev_up');
                    setTimeout(function () {
                        screen_active.removeClass('screen_active');
                        screens.eq(screen).addClass('screen_current_up');
                        screens.eq(screen).addClass('screen_active');
                    }, 500);
                } else if (current > screen) {
                    screen_active.addClass('screen_prev_down');
                    setTimeout(function () {
                        screen_active.removeClass('screen_active');
                        screens.eq(screen).addClass('screen_current_down');
                        screens.eq(screen).addClass('screen_active');
                    }, 500);
                }

                if (screen === 0 || screen === 5) {
                    setTimeout(function () {
                        $('.social_links, .dots, .mouse_img').removeClass('white');
                    }, 2000);
                } else if (screen === 4) {
                    $(window).on('resize', function () {
                        if ($(window).width() > 1024) {
                            $('.social_links').removeClass('white');
                            $('.dots, .mouse_img').addClass('white');
                        } else {
                            $('.social_links').addClass('white');
                            $('.dots, .mouse_img').addClass('white');
                        }
                    });
                } else {
                    $('.social_links, .dots, .mouse_img').addClass('white');
                }

                if (screen === 2 && number === true) {
                    setTimeout(function () {
                        $('.number').spincrement({
                            thousandSeparator: '',
                            //                            fade: null,
                            leeway: 0,
                            duration: 10000,
                            easing: '',
                            complete: numberOff
                        });
                    }, 1000);
                }
            };
        }, 500);
        setTimeout(function () {
            current = screen;
            bindWheel();
            $(window).swipe('enable');
            $('.fade').css('opacity', '1');
        }, 2500);
        setTimeout(function () {
            $('.locker').css('display', 'none');
        }, 3000);
    };
});
