$("#session_tags").tagsinput('items');

$('#session_tags_3').tagsinput({
  focusClass: 'session_tags_3'
});

$('#session_tags_3').on('beforeItemAdd', function(event) {
  var items = $(this).tagsinput('items');
  if (items.length >= 3) {
    event.cancel = true;
    $('#session_tags_max_msg').text('You can only add up to 3 tags.').show();
  } else {
    $('#session_tags_max_msg').hide();
  }
});

$('#session_tags_3').on('itemRemoved', function() {
  $('#session_tags_max_msg').hide();
});