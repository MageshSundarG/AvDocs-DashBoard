$( document ).ready(function() {

  // Initialise Quill Editor
  var editor = new Quill('#editor', {
    modules: { toolbar: '#toolbar' },
    theme: 'snow'
  });

});
