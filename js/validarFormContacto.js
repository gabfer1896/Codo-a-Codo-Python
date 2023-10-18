function validarFormulario() {
    var nombreApellido = document.getElementById("nombreApellido").value;
    var email = document.getElementById("email").value;

    if (nombreApellido.trim() === "") {
        alert("Por favor, complete el campo Nombre y Apellido.");
        return false;
    }

    if (!validarEmail(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    return true;
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}