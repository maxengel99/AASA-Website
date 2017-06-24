$('.parent').hover (
  function() {
    $('img',this).addClass('hover');
    $('.image-medium').addClass('gray');
  },
  function() {
    $('img',this).removeClass('hover');
    $('.image-medium').removeClass('gray');
  }
)
