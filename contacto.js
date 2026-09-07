let formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Los campos no pueden estar vacíos");
        return;
    }

    if(nombre.length < 100) {
        alert("El nombre debe tener al menos 100 caracteres");
        return;
    }

    if(mensaje.length<500){
        alert("El mensaje debe tener al menos 500 caracteres");
    }

    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!formatoCorreo.test(correo)) {
        alert("El correo no es válido");
        return;
    }

    if(mensaje.length > 500) {
        alert("El mensaje no puede superar los 500 caracteres");
        return;
    }
});