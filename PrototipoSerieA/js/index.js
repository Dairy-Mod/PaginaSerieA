function cargarContenidoInicio(){
    let contenedorPrincipal = document.getElementById('panelPrincipal');

    fetch("../inyectar/inicio.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(cargar){
            console.log(cargar);
            contenedorPrincipal.innerHTML = cargar;
        }
    )
}

function cargarContenidoClubs(){
    let contenedorPrincipal = document.getElementById('panelPrincipal2');

    fetch("../inyectar/clubs.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(cargar){
            console.log(cargar);
            contenedorPrincipal.innerHTML = cargar;
        }
    )
}

function cargarContenidoDuelos(){
    let contenedorPrincipal = document.getElementById('panelPrincipal3');

    fetch("../inyectar/duelos.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(cargar){
            console.log(cargar);
            contenedorPrincipal.innerHTML = cargar;
        }
    )
}

function cargarContenidoLeyendas(){
    let contenedorPrincipal = document.getElementById('panelPrincipal4');

    fetch("../inyectar/leyendas.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(cargar){
            console.log(cargar);
            contenedorPrincipal.innerHTML = cargar;
        }
    )
}

function cargarContenidoNoticias(){
    let contenedorPrincipal = document.getElementById('panelPrincipal5');

    fetch("../inyectar/noticias.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(cargar){
            console.log(cargar);
            contenedorPrincipal.innerHTML = cargar;
        }
    )
}

function cargarContenidoVideos(){
    let contenedorPrincipal = document.getElementById('panelPrincipal6');

    fetch("../inyectar/videos.html").then(
        function(info){
            return info.text();
        }
    ).then(
        function(cargar){
            console.log(cargar);
            contenedorPrincipal.innerHTML = cargar;
        }
    )
}