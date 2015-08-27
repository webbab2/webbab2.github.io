(function($){

    // Handle toggle menu
    var toggleMenu = function() {
        $('#menu-toggle').toggleClass('active');
        $('html').toggleClass('menu-is-open');
        $('.menu').toggleClass('open');
    };

    // Click on menu toggle
    $('#menu-toggle, .menu-close').on('click', function(){
        toggleMenu();
    });

    // Click on menu icon
    $('.js-menu-item').on('click', function() {
        var id = $(this).attr('href').split('#')[1],
            $el = $('#' + id);

        toggleMenu();

        $('html, body').animate({
            scrollTop: $el.offset().top
        }, 1000);
    });

    // Hide menu when scrolling too far down
    (function(){
        var $header = $('.intro'),
            $menuToggle = $('#menu-toggle'),
            height = $header.height();

        $(window).scroll(function(){
            if ($(this).scrollTop() > height) {
                $menuToggle.addClass('scrolled');
            }
            else {
                $menuToggle.removeClass('scrolled');
            }
        });
    })();

})(jQuery);