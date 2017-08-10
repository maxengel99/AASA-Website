$(document).ready(function() {
    if (/Mobi/.test(navigator.userAgent)) {
        $('.social-media img').addClass('color');
    } else {
        $('.parent').hover(function() {
            $('.bio-pic', this).addClass('hover');
            $('.image-medium').addClass('gray');
        }, function() {
            $('.bio-pic', this).removeClass('hover');
            $('.image-medium').removeClass('gray');
        })

        $('.instagram').hover(function() {
            $(this).attr('id', 'color');
        }, function() {
            $(this).removeAttr('id', 'color');
        })

        $('.twitter').hover(function() {
            $(this).attr('id', 'color');
        }, function() {
            $(this).removeAttr('id', 'color');
        })

        $('.email-button').hover(function() {
            $(this).attr('id', 'color');
        }, function() {
            $(this).removeAttr('id', 'color');
        })
    }
});
