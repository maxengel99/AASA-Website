$('.parent').hover (
  function() {
    $('.bio-pic',this).addClass('hover');
    $('.image-medium').addClass('gray');
  },
  function() {
    $('img',this).removeClass('hover');
    $('.image-medium').removeClass('gray');
  }
)
