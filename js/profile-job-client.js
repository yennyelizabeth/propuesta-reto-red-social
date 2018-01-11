$(document).ready(function() {
  /* calid*/
  $('#preview').hover(function() {
    /* aparece el btn de subir foto*/
    $(this).find('a').fadeIn();
  }, function() {
    /* desaparece el btn de subir foto*/
    $(this).find('a').fadeOut();
  });
  $('#file-select').on('click', function(event) {
    event.preventDefault();
    $('#file').click();
  });
  $('#first-name, #last-name').keyup(function() {
  /* obteniendo el valor*/
    var $inputName = $(this).val();
    /* expresion para numeros*/
    var $expresion1 = /[1-9]/;
    /*  se valida para que solo se ingrese letras y no numeros*/
    if ($inputName.match($expresion1)) {
      alert('Solo se ingresa letras');
      $(this).val('');
    }
  });
  $('#email').blur(function() {
    var $inputEmail = $(this).val();
    /* expresión para validar el @ del correo*/
    var $expresion2 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    /* si es incorrecto, se manda un mensaje de alerta*/
    if ($expresion2.test($inputEmail) === false) {
      alert('Ingresar un correo válido');
      /* vaciando la entrada*/
      $(this).val('');
    }
  });
  $('#login').click(function() {
    /* var $name = $('#first-name').val();
    var $lastName = $('#last-name').val() ;
    var mail =  $('#email').val();*/
    /* se ejecuta si se cumple todos los campos*/
    if ($('#first-name').val() && $('#last-name').val() && $('#email').val()) {
      event.preventDefault();
      /* se dirige a la vista end*/
      $('#number').removeClass('hide');
      $('#call').addClass('hide');
    } else {
      /* alerta para rellenar todos los campos*/
      alert('Todos los campos son obligatorios');
      event.preventDefault();
    }
  });
  var $idName = $('#dates');

  var name = $idName.append('<div id="name">Nombre:</div>');
  $('#name').append('<span></span>');
  $('#name span').text(dataPeople[0, 1]);
  var email = $idName.append('<div id="email">Email:</div>');
  $('#dates #email').append('<span></span>');
  $('#email span ').text(dataPeople[0, 4]);
  var experience = $idName.append('<div id="resumen">Experiencia:</div>');
  $('#dates #resumen').append('<span></span>');
  $('#resumen span ').text(dataPeople[0, 5]);

  /* seccion para las estrellas*/
  $('#star-responsability').raty({
    targetKeep: true
  });
  $('#star-puntuality').raty({
    targetKeep: true
  });
  $('#star-quality').raty({
    targetKeep: true
  });
});
