function guardarDatos(regUser){
    for(const key of Object.keys(regUser)){
        sessionStorage.setItem(key, regUser[key]);
    }
}

function recargar(){
    let dni = sessionStorage.getItem('dni');
    let name = sessionStorage.getItem('name');
    let fecha = sessionStorage.getItem('fecha');
    let email = sessionStorage.getItem('email');
    let web = sessionStorage.getItem('web');
    let contra = sessionStorage.getItem('contra');

    document.getElementById("dni").value=dni;
    document.getElementById("name").value=name;
    document.getElementById("fecha").value=fecha;
    document.getElementById("email").value=email;
    document.getElementById("web").value=web;
    document.getElementById("contra").value=contra;

}