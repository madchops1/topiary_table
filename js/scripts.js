$(function() {
  $('body').on('click','[data-toggle="collapse"]',function(e) {
    if($(e.target).hasClass('glyphicon-minus')) {
      $(e.target).removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
      $(e.target).removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
  });
});