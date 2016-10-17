var elTitulo = document.getElementById("form-signin-heading");
elTitulo.innerHTML = "Por favor inicia sesión";

var elEmail = document.getElementById("inputEmail");
elEmail.setAttribute('placeholder', 'Correo Electrónico');

var elPassword = document.getElementById("inputPassword");
elPassword.setAttribute('placeholder', 'Contraseña');

var elRemember = document.getElementsByTagName('span')[0];
elRemember.innerHTML=("Recordar datos");

var elButton = document.getElementsByTagName('button')[0];
elButton.innerHTML=("Iniciar Sesión");
