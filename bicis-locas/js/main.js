function validateForm(){
	/* Escribe tú código aquí */
var elNombre = document.getElementById("name").value;
var elApellido = document.getElementById("lastname").value;
var elEmail = document.getElementById("input-email");
var elPassword = document.getElementById("input-password").value;

if(elNombre == null || elNombre.length == 0 || /^\s+$/.test(elNombre)){
			alert('ERROR: El campo nombre no debe ir vacío');
			return false;
		}
if(elApellido == null || elApellido.length == 0 || /^\s+$/.test(elApellido)){
			alert('ERROR: El campo Apellido no debe ir vacío');
			return false;
			elApellido.toUpperCase(0);
		}

/* Ya no pude validar el correo 
if(!(/\S+@\S+\.\S+/.test(elEmail))){
 			alert('ERROR: Debe escribir un correo válido');
 			return false;
		}
*/

if (elPassword == 123456 || elPassword.length < 6 || elPassword == "password" || elPassword= 0987654) {
	alert('La contraseña no es minimo de 6 caracteres o no es valida');
		return false;
			}


}

