/* funcionalidad */
$(document).ready(function() {
  $('.nav li').on('click', function() {
    $('nav').find('.activa').removeClass('activa') ;
    $(this).addClass('activa');
  });
  /*
  var url = dataPeople[0,3];

  var $idName = $('#name');
  var $idResum = $('#resum');

  /* extraer data */
  /*
  $idName.text(dataPeople[0, 1]);
  $idResum.text(dataPeople[0, 5]);
  $('#imagen').attr('src', url);
  $('#imagen').attr('alt', 'Imagen no disponible');
  $('#imagen').attr('title', 'Imagen de carga');
*/

  /* publicaciones */
  var btn = $('#btn');
  //   btn.prop("disabled", true);
  var textarea = $('#textarea');

	textarea.keyup(function(e){
		validation();
	});

	function validation(){
		var long = textarea.val().length;
		var onlyText = textarea.val().replace(/\s/g,'');
		if (long == 0 || onlyText == 0) {
			// btn.removeAttr('disabled');
		}
		else {
			// btn.prop("disabled", true);
		}
  }

	btn.click(function() {
		addTask();
		textarea.val('');
		//  btn.prop("disabled", true);
	});
	function addTask() {
		var taskContent = textarea.val();
		var containerToDo = $('#container-to-do');
    var newTask = $('<div>');
    var label = $('<label>');
		/*var check = $('<input>');*/
    var text = $(document.createTextNode(taskContent));
    var icon = $('<i>');

		newTask.addClass('new');
		newTask.addClass('checkbox');
		containerToDo.append(newTask);
	/*	check.attr('type','checkbox');*/
/*		label.append(check);*/
		newTask.append(label);
		label.append(text);
		icon.addClass('glyphicon glyphicon-point icon');
		newTask.append(icon);
    textarea.val('')

		/*check.click(function() {
			labeledTask();
		});*/
		function labeledTask(){
			label.toggleClass('labeled');
		}
		icon.click( function() {
			deleteTask();
    });

		function deleteTask(){
			newTask.remove()
		}
	}
});
