const $form = document.getElementById("ej1");
const $dni = document.getElementById("dni");
const $name = document.getElementById("nombre");
const $apellido = document.getElementById("apellido");
const $telefono = document.getElementById("telefono");
const $comentario = document.getElementById("comentario");
const $hora = document.getElementById("hora");

function handleSubmit(e) {
    e.preventDefault();
    const name = $name.value;
    const apellido = $apellido.value;
    const dni = $dni.value;
    const telefono = $telefono.value;
    const comentario = $comentario.value;
    const hora = $hora.value;

    if (isValidDni(dni) == false) {
        alert('El dni debe tener 9 carácteres y una letra mayúscula al final')
    } else if (name == false || isValidName(name) == false) {
        alert('El nombre debe ser un valor válido : \n -Debe estar relleno\
                        n - Debe estar compuesto por 1 o 2 palabras ');
    } else if (apellido == false || isValidApellido(apellido) == false) {
        alert('El apellido debe ser un valor válido');
    } else if (telefono == false || isValidTelefono(telefono) == false) {
        alert('El telefono debe tener una longitud mínima de 9 caracteres');
    } else if (comentario == false || isValidComentario(comentario) == false) {
        alert('El comentario tiene que tener un formato válido : \n - Debe estar relleno\ n - Debe de tener un total de' +
            '250 caracteres como máximo');
    } else if (hora == false || isValidHora(hora) == false) {
        alert('La hora esta mal introducida')
    } else {
        alert("Usuario correcto registrado.");

        var regUsuario = {
            dni: dni,
            name: name,
            apellido: apellido,
            comentario: comentario,
            telefono: telefono,
            hora: hora
        };

        console.log(regUsuario);
        var newUser = JSON.stringify(regUsuario);
        console.log(newUser);

    }
    validarCookie();
}

function isValidDni(dni) {
    const validacion = /^\d{8}[A-Z]$/;
    return validacion.test(dni);
}

function isValidName(name) {
    const validacion =
        /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    return validacion.test(name);
}

function isValidApellido(apellido) {
    const validacion =
        /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    return validacion.test(apellido);
}

function isValidTelefono(telefono) {
    if (!(/^\+\d{2,3}\s\d{9}$/.test(telefono))) {
        return false;
    }
}

function isValidComentario(comentario) {
    const validacion = /^[\s\S]{1,250}$/;
    return validacion.test(comentario);
}

function isValidHora(hora) {
    const validacion = /^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/;
    return validacion.test(hora);
}

$form.addEventListener('submit', handleSubmit);