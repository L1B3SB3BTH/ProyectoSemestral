function ingresar(){
    let correo = document.getElementById("Correo").value;
    let clave = document.getElementById("Clave").value;

    if (correo === "" || clave === "") {
        alert("Debe completar todos los campos");
        return;
    }   

    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!formatoCorreo.test(correo)) {
        alert("El correo no es válido");
        return;
    }
    if(clave.length !==4) {
        alert("La contraseña debe tener 4 caracteres")
        return;
    }
    if(correo ==="" || clave ===""){
        alert("Debe completar todos los campos");
        return;
    }


}