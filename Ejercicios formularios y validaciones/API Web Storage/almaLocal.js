function guardarDatos(regUser){
    for(const key of Object.keys(regUser)){
        localStorage.setItem(key, regUser[key]);
    }
}

function recargar(){
    let fecha = localStorage.getItem('fecha');
    let name = localStorage.getItem('name');
    let destinatario = localStorage.getItem('destinatario');
    let gramos = localStorage.getItem('gramos');
    let composicion = localStorage.getItem('composicion');
    let cuenta = localStorage.getItem('cuenta');

    document.getElementById("fecha").value=fecha;
    document.getElementById("name").value=name;
    document.getElementById("destinatario").value=destinatario;
    document.getElementById("gramos").value=gramos;
    document.getElementById("composicion").value=composicion;
    document.getElementById("cuenta").value=cuenta;

}