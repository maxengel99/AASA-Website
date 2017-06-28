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

$('.instagram').hover (
  function(){
    $(this).attr('id','color');
  },
  function() {
    $(this).removeAttr('id','color');
  }
)

$('.twitter').hover (
  function(){
    $(this).attr('id','color');
  },
  function() {
    $(this).removeAttr('id','color');
  }
)
