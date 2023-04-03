function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Nombre no puede estar vacío";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email no puede estar vacío";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email formato inválido";
            return false;
        }
    }
    var apellido =  document.getElementById('apellido').value;
    if (apellido == "") {
        document.querySelector('.status').innerHTML = "El apellido no puede ir vacío";
        return false;
    }
    var contraseña =  document.getElementById('password').value;
    if (contraseña == "") {
        document.querySelector('.status').innerHTML = "Contraseña no puede estar vacío";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  } 
