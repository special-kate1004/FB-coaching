$(document).ready(() => {
  $('.summernote').summernote({
    height: 80,
    width: '100%',
    placeholder: 'Start typing...',
    callbacks: {
      onInit: function () {
        $('.note-editor').addClass('error');
      }
    },
    toolbar: [
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['fontsize', 'color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['codeview', 'help']]
    ]
  });
}).summernote('reset');