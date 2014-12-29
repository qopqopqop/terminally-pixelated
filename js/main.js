// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

(function($){

    // We have JavaScript!
    $('html').removeClass('no-js');

    // Squishy navigation
    if(TerminallyPixelated.classes.nav){
        var $nav = $('.' + TerminallyPixelated.classes.nav);
        $nav.naver({
            labels: {
                closed: 'Menu',
                open: 'Close'
            },
            maxWidth: TerminallyPixelated['large-break']
        });
    }

    // Custom checkboxes / radios
    $('input[type=radio], input[type=checkbox]').picker();

    // Custom selects
    $('select').selecter();

    // Lazy load images
    $('main img').unveil();

    // Smooth scrolling
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

})(jQuery);