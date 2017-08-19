$(document).ready(function() {
  if(/Mobi/.test(navigator.userAgent) && (screen.availWidth < 500)) {
    $('.mb8').css({'font-size': '30px', 'margin-bottom':'13px'});
    $('.subtitle').css({'font-size':'27px'});
    $('.instagram').css({height: '34px'});
    $('.email-button').css({height: '40px'});
    $('.bio-link').css({display: 'block'});
  }
});
