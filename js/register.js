$(document).ready(function() {
  // declaracion de variables
  var $txtEmail = $('#txtEmail');
  var $txtPassword = $('#txtPassword');
  var $txtNewEmail = $('#txtNewEmail');
  var $txtNewPassword = $('#txtNewPassword');
  var $txtName = $('#txtName');
  var $txtLastName = $('#txtLastName');
  var $btnLogin = $('#btnLogin');
  var $btnNew = $('#btnNew');
  var $txtNameModal = $('#txtNameModal');
  var $txtLastNameModal = $('#txtLastNameModal');
  var $txtEmailModal = $('#txtEmailModal');
  var $txtPasswordModal = $('#txtPasswordModal');
  var $btnCreate = $('#btnCreateModal');
  var $validateNameModal = false;
  var $validateLastNameModal = false;
  var $validateEmailModal = false;
  var $validatePasswordModal = false;
  var $validateEmail = false;
  var $validatePassword = false;
  var $validateNewEmail = false;
  var $validateNewPassword = false;
  var $validateName = false;
  var $validateLastName = false;
  var $txtEmail1 = $('#txtEmail1');
  var $txtPassword1 = $('#txtPassword1');
  var $btnLogin1 = $('#btnLogin1');
  var $validateEmail1 = false;
  var $validatePassword1 = false;


  $btnLogin.attr('disabled', true);
  $btnLogin1.attr('disabled', true);
  $btnCreate.attr('disabled', true);

  // eventos para el login
  $txtEmail.on('input', function(event) {
    event.preventDefault();
    var regExpre = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (regExpre.test($(this).val())) {
      $validateEmail = true;
      // almacenando el email
      active();
    } else {
      $validateEmail = false;
      $btnLogin.attr('disabled', true);
    }
  });
	
  $txtPassword.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length > 6) {
      $validatePassword = true;
      active();
    } else {
      $validatePassword = false;
      $btnLogin.attr('disabled', true);
    }
  });

  $btnLogin.on('click', function(event) {
    event.preventDefault();
    window.location.href = '../views/profile-job.html';
  });
	
  // vista desktop
  $txtEmail1.on('input', function(event) {
    event.preventDefault();
    var regExpre = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (regExpre.test($(this).val())) {
      $validateEmail1 = true;
      active1();
    } else {
      $validateEmail1 = false;
      $btnLogin1.attr('disabled', true);
    }
  });
	
  $txtPassword1.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length > 6) {
      $validatePassword1 = true;
      active1();
    } else {
      $validatePassword1 = false;
      $btnLogin1.attr('disabled', true);
    }
  });

  $btnLogin1.on('click', function(event) {
    event.preventDefault();
    window.location.href = '../views/profile-job.html';
  });
	

  // eventos para el register
  $txtName.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length > 2) {
      $validateName = true;
      NewActive();
    } else {
      $validateName = false;
      $btnNew.attr('disabled', true);
    }
  });
	
  $txtLastName.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length > 3) {
      $validateLastName = true;
      NewActive();
    } else {
      $validateLastName = false;
      $btnNew.attr('disabled', true);
    }
  });
	
  $txtNewEmail.on('input', function(event) {
    event.preventDefault();
    var regExpre = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (regExpre.test($(this).val())) {
      $validateNewEmail = true;
      NewActive();
    } else {
      $validateNewEmail = false;
      $btnNew.attr('disabled', true);
    }
  });
	
  $txtNewPassword.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length > 6) {
      $validateNewPassword = true;
      NewActive();
    } else {
      $validateNewPassword = false;
      $btnNew.attr('disabled', true);
    }
  });

  $btnNew.on('click', function(event) {
    event.preventDefault();
    window.location.href = '../views/list-services.html';
  });

  // registro modal
  $txtNameModal.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length > 2) {
      $validateNameModal = true;
      NewActive();
    } else {
      $validateNameModal = false;
      $btnCreate.attr('disabled', true);
    }
  });
	
  $txtLastNameModal.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length > 3) {
      $validateLastNameModal = true;
      activeModal();
    } else {
      $validateLastNameModal = false;
      $btnCreate.attr('disabled', true);
    }
  });
	
  $txtEmailModal.on('input', function(event) {
    event.preventDefault();
    var regExpre = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (regExpre.test($(this).val())) {
      $validateEmailModal = true;
      // revisar
      localStorage.setItem = ('email', $txtEmailModal);
      console.log(localStorage.email);
      activeModal();
    } else {
      $validateEmailModal = false;
      $btnCreate.attr('disabled', true);
    }
  });
	
  $txtPasswordModal.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length > 6) {
      $validatePasswordModal = true;
      activeModal();
    } else {
      $validatePasswordModal = false;
      $btnCreate.attr('disabled', true);
    }
  });

  $btnCreate.on('click', function(event) {
    event.preventDefault();
    window.location.href = '../views/list-services.html';
  });

  // funciones reutilizables
  function active() {
    if ($validateEmail && $validatePassword) {
      $btnLogin.attr('disabled', false);
    }
  }
	
  function active1() {
    if ($validateEmail1 && $validatePassword1) {
      $btnLogin1.attr('disabled', false);
    }
  }
	
  function NewActive() {
    if ($validateName && $validateLastName && $validateNewEmail && $validateNewPassword) {
      $btnNew.attr('disabled', false);
    }
  }
  
  function activeModal() {
    if($validateNameModal && $validateLastNameModal && $validateEmailModal && $validatePasswordModal) {
      $btnCreate.attr('disabled', false);
    }
  }

});

