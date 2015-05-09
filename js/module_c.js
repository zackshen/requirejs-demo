(function($) {
    'use strict';

    $.fn.larger = function() {
        return $(this).each(function() {
            $(this).css("font-size", '20px');
        });
    };

    $.fn.smaller = function() {
        return $(this).each(function() {
            $(this).css("font-size", '13px');
        });
    };

})(jQuery);
