// Validar campos vacíos
function validarNoVacio(texto) {
    return texto.trim() !== "";
}

// Validar correo electrónico
function validarEmail(correo) {

    if (!correo.includes("@")) {
        alert("El correo debe contener @");
        return false;
    }

    if (!correo.includes(".")) {
        alert("El correo debe contener un punto");
        return false;
    }

    let expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!expresion.test(correo)) {
        alert("Ingresa un correo válido");
        return false;
    }

    return true;
}

// Validar teléfono peruano
function validarTelefono(telefono) {

    if (!telefono.startsWith("9")) {
        alert("El teléfono debe comenzar con 9");
        return false;
    }

    let expresion = /^9\d{8}$/;

    if (!expresion.test(telefono)) {
        alert("El teléfono debe tener 9 dígitos");
        return false;
    }

    return true;
}

// Validar todo el formulario
function validarFormulario() {

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

    // Comprobar campos vacíos
    if (!validarNoVacio(nombre) ||
        !validarNoVacio(correo) ||
        !validarNoVacio(telefono) ||
        !validarNoVacio(mensaje)) {

        alert("Completa todos los campos");
        return false;
    }

    // Validar que el nombre no tenga números
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(nombre)) {
        alert("El nombre no debe contener números");
        return false;
    }

    // Validar correo
    if (!validarEmail(correo)) {
        return false;
    }

    // Validar teléfono
    if (!validarTelefono(telefono)) {
        return false;
    }

    return true;
}

// Obtener el formulario
const formulario = document.getElementById("formulario");

// Evento para enviar el formulario
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (validarFormulario()) {
        alert("Consulta enviada");
        formulario.reset();
    }

});