function validateForm(){
	var elNombre = document.getElementById("name").value;
	var elApellido = document.getElementById("lastname").value;
	var elEmail = document.getElementById("input-email").value;
	var elPassword = document.getElementById("input-password").value;
  var elSelec = document.getElementsByTagName("select")[0];
  var reexp = /^[A-Z]/;


	if(elNombre == null || elNombre.length == 0 || reexp.test (elNombre) == false){
				alert('Debe ingresar un nombre,  1ra letra en mayúscula');
				return false;
			}

	if(elApellido == null || elApellido.length == 0 || reexp.test (elNombre) == false){
				alert('Debe ingresar su apellido, 1ra letra en mayúscula');
				return false;
			}

  var expemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (elEmail == null || expemail.test(elEmail) == false) {
	 			alert('Debe escribir un correo válido');
	 			return false;
			}
	
	if (elPassword.length < 6 ) {
		alert('La contraseña debe ser minimo de 6 caracteres');
			return false;
				}
    else if(elPassword == 123456){
      alert('La contraseña no puede ser 123456');
      return false;
    }
    else if(elPassword == 098765){
      alert('La contraseña no puede ser 098765');
      return false;
    }
    else if(elPassword == "password"){
      alert('La contraseña no puede ser password');
      return false;
    }

  if (elSelec.value == "0") {
    alert('Debes seleccionar al menos una opción');
    return false;
  }

}
