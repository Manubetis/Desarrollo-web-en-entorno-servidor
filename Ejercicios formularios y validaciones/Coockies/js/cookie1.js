// Comprobar que el navegador tiene las cookies activadas 
if(navigator.cookieEnabled == true){
    alert("El uso de cokkies está activado")
}else{
    alert("El uso de cookies está desactivado");
}

// Funcion para crear cookies
function crearCookie(Cname, Cvalue){
    document.cookie = Cname + "=" + Cvalue + ";";
}

// Creo una cookie con su nombre y valor:
crearCookie("nombre", "Manuel");
crearCookie("user", "Tortilla");

// Leer Cookie
alert(document.cookie);

// Actualizar cookie
document.cookie = "nombre = Manuel Jaén";
alert(document.cookie);

// Borrar cookie
document.cookie = "Jaén = apellido1; expires = Thu, 01 Jan 1970 00:00:01 GMT";
alert(document.cookie);

document.cookie = "user = Tortilla; expires = Thu, 01 Jan 1970 00:00:01 GMT";
alert(document.cookie);

document.cookie = " = Manuel; expires = Thu, 01 Jan 1970 00:00:01 GMT";
alert(document.cookie);