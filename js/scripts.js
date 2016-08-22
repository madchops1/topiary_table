$(function() {

  // Body Click...
  $('body')
  // collapse
  .on('click','[data-toggle="collapse"]',function(e) {
    if($(e.target).hasClass('glyphicon-minus')) {
      $(e.target).removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
      $(e.target).removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
  })
  // add row
  .on('click','.add-row',function(e){
    var cloneTarget = $(e.target).attr('data-target');

  });

  // Date Picker
  $('.datepicker').datetimepicker({
    format : 'MM/DD/YYYY'
  });

  // Time Picker
  $('.timepicker').datetimepicker();

  // Date + Time Picker
  $('.datetimepicker').datetimepicker({
    sideBySide: true
  });

  // Select Menu
  $('.selectpicker').selectpicker();

  //

});
