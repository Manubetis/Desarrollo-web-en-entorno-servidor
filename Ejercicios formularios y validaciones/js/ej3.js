const $form = document.getElementById("ej3");
const $dni = document.getElementById("dni");
const $name = document.getElementById("name");
const $fecha = document.getElementById("fecha");
const $email = document.getElementById("email");
const $web = document.getElementById("web");
const $contra = document.getElementById("contra");

function handleSubmit(e) {
    e.preventDefault();

    const dni = $dni.value;
    const name = $name.value;
    const fecha = $fecha.value;
    const email = $email.value;
    const web = $web.value;
    const contra = $contra.value;

    if (dni == false || isValidDni(dni) == false) {
        alert("Error. (99.999.999-X)");
    } else if (name == false || isValidName(name) == false) {
        alert("Error. (Mínimo 1 nombre, Máximo 2 nombres)");
    } else if (fecha == false || isValidFecha(fecha) == false) {
        alert("Error. (dd/mm/yyyy)");
    } else if (email == false || isValidEmail(email) == false) {
        alert("Error. (xxxxxx@yyyyy.zzz)");
    } else if (web == false || isValidWeb(web) == false) {
        alert("Error. (http://www.xxxx.yyy)");
    } else if (contra == false || isValidContra(contra) == false) {
        alert("Error. (Entre 8 y 10 carácteres)");
    } else {
        var regUser = {
            dni: dni,
            name: name,
            fecha: fecha,
            email: email,
            web: web,
            contra: contra
        }
        alert("Usuario correcto introducido");

        console.log(regUser);
        var newUser = JSON.stringify(regUser);
        console.log(newUser);
        guardarDatos(regUser);
    }
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

function isValidFecha(fecha){
    const validacion = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    return validacion.test(fecha);
}

function isValidEmail(email) {
    const validacion =
        /^(.+\@.+\..+)$/;
    return validacion.test(email);
}

function isValidWeb(web) {
    const validacion =
        /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/;
    return validacion.test(web);
}

function isValidContra(contra) {
    const validacion =
        /^\d{8,10}$/;
    return validacion.test(contra);
}

$form.addEventListener('submit', handleSubmit);