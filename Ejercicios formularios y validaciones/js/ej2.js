const $form = document.getElementById("ej2");
const $name = document.getElementById("name");
const $apellidos = document.getElementById("apellidos");
const $email = document.getElementById("email");
const $web = document.getElementById("web");

function handleSubmit(e) {
    e.preventDefault();

    const name = $name.value;
    const apellidos = $apellidos.value;
    const email = $email.value;
    const web = $web.value;

    if (name == false || isValidName(name) == false) {
        alert("Error. (Mínimo 1 nombre, Máximo 2 nombres)");
    } else if (apellidos == false || isValidApellido(apellidos) == false) {
        alert("Error. (Mínimo 1 apellido, Máximo 2 apellidos)");
    } else if (email == false || isValidEmail(email) == false) {
        alert("Error. (xxxxxx@yyyyy.zzz)");
    } else if (web == false || isValidWeb(web) == false) {
        alert("Error. (http://www.xxxx.yyy)")
    } else {
        var regUser = {
            name: name,
            apellidos: apellidos,
            email: email,
            web: web
        };
        alert("Usuario correcto introducido");

        console.log(regUser);
        var newUser = JSON.stringify(regUser);
        console.log(newUser);
    }
}

function isValidName(name) {
    const validacion =
        /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    return validacion.test(name);
}

function isValidApellido(apellidos) {
    const validacion =
        /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    return validacion.test(apellidos);
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

$form.addEventListener('submit', handleSubmit);