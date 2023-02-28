//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Ocultar menu una vez que se selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barras internas de una barra identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=9;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Selecciono las barras de la sección habilidades
let html = document.getElementById("html");
crearBarra(html);
let css = document.getElementById("css");
crearBarra(css);
let javascript = document.getElementById("javascript");
crearBarra(javascript);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barra
//para eso utilizo un arreglo, cada posición pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//Función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 9, 0, intervalHtml);
        },100);
        const intervalCss = setInterval(function(){
            pintarBarra(css, 8, 1, intervalCss);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 7, 2, intervalJavascript);
        },100);
    }
}    

//Lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "rgb(148, 241, 94)";
    }else{
        clearInterval(interval)
    }
}

//Detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}
