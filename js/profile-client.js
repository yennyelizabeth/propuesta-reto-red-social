$(document).ready(function() {
  /* seccion para subir las fotos*/
  alert('en construccion');
  $('#file').change(function() {
    var file = (this.files[0].name).toString();
    var reader = new FileReader();
    reader.onload = function(event) {
      var newim = $('#preview img').attr('src', event.target.result);
      $('#imagen').append('<img src= \'' + event.target.result + '\' />');
    };
    /* muestra la imagen*/
    reader.readAsDataURL(this.files[0]);
  });
  
  
  var $name = client[0, 0];
  var $email = client[0, 1];
  var $busca = client[0, 2];
  $('.description').append('<p>' + 'Nombre: ' + $name + '</p>' + '<br>');
  $('.description').append('<p>' + 'Correo: ' + $email + '</p>');
  $('.description').append('<p>' + 'Busco: ' + $search + '</p>');
});
