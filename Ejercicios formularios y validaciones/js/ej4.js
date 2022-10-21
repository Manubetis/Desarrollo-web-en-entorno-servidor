const $form = document.getElementById("ej4");
const $fecha = document.getElementById("fecha");
const $name = document.getElementById("name");
const $destinatario = document.getElementById("destinatario");
const $gramos = document.getElementById("gramos");
const $composicion = document.getElementById("composicion");
const $cuenta = document.getElementById("cuenta");

function handleSubmit(e){
    e.preventDefault();

    const fecha = $fecha.value;
    const name = $name.value;
    const destinatario = $destinatario.value;
    const gramos = $gramos.value;
    const composicion = $composicion.value;
    const cuenta = $cuenta.value;

    if (fecha == false || isValidFecha(fecha) == false) {
        alert("Error. (99.999.999-X)");
    } else if (name == false || isValidName(name) == false) {
        alert("Error. (Mal introducido el nombre del cocinero)");
    } else if (destinatario == false || isValidDestinatario(destinatario) == false) {
        alert("Error. (Mal introducido el destinatarios)");
    } else if (gramos == false || isValidGramos(gramos) == false) {
        alert("Error. (Mal introducido los gramos)");
    } else if (composicion == false || isValidComposicion(composicion) == false) {
        alert("Error. (Mal introducido la composición)");
    } else {
        var regUser = {
            fecha: fecha,
            name: name,
            destinatario: destinatario,
            gramos: gramos,
            composicion: composicion,
            cuenta: cuenta
        };
        alert("Usuario correcto introducido");

        console.log(regUser);
        var newUser = JSON.stringify(regUser);
        console.log(newUser);
        guardarDatos(regUser);
    }
}

function isValidFecha(fecha){
    const validacion = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    return validacion.test(fecha);
}

function isValidName(name){
    const validacion = /[A-Z][A-Z]\W\d{4}$/;
    return validacion.test(name);
}

function isValidDestinatario(destinatario){
    const validacion = /([A-Z]{2,3})+([_])+([a-z])+([:])+(\d{4})$/;
    return validacion.test(destinatario);
}

function isValidGramos(gramos){
    const validacion = /\d{3,4}/;
    return validacion.test(gramos);
}

function isValidComposicion(composicion){
    const validacion = /([0-9])+([g])+([A-Z]{1,2})+([0-9]{0,1})+([A-Z]{1,2})+([0-9]{0,1})$/;
    return validacion.test(composicion);
}

function isValidCuenta(cuenta){
    //const validacion = /noTengoNiIdea/;
    return validacion.test(cuenta);
}

$form.addEventListener('submit', handleSubmit);