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

    if(nombre.length < 10) {
        alert("El nombre debe tener al menos 10 caracteres");
        return;
    }

    if(mensaje.length< 10){
        alert("El mensaje debe tener al menos 10 caracteres");
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
    console.log("Nombre: " + nombre + "\nCorreo: " + correo + "\nMensaje: " + mensaje);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);
    localStorage.setItem("mensaje", mensaje);    
    alert("Formulario enviado correctamente.");
});