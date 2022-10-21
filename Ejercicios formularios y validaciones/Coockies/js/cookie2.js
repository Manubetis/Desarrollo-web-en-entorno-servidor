
function crearCookie(cName, cValue){
    document.cookie = cName + "=" + cValue + ";";
}


function getCookie(cName){
    let nombre = cName + "=";
    let ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if(c.indexOf(nombre) == 0)
            return c.substring(nombre.length, c.length)
    }

    return "";
}

function validarCookie(){
    let contador = getCookie("contadorErrores");

    (contador != "" && contador != null) ? crearCookie("contadorErrores", ++contador) : crearCookie("contadorErrores", 1);
    alert(contador);
    document.getElementById("contador").innerHTML = "Número de errores: " + getCookie("contadorErrores");
}
