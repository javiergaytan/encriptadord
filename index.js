var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var buscador = document.querySelector(".buscador");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".contenedor-resultado");
var botonCopiar = document.querySelector(".btn-copiar");
var textoEncriptado = document.querySelector(".textoEncriptado");
var contenido = textoEncriptado.textContent;
const btnCopiar = document.querySelector(".btn-copiar");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

btnCopiar.addEventListener("click", copiar = () =>{
	var contenido = document.querySelector(".contenedor-resultado").textContent;
	navigator.clipboard.writeText(contenido);
})

function encriptar() {
    /*alert("presiono Encriptar");*/
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
}

function desencriptar(){
    /*alert("presiono Desencriptar");*/
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante(){
    buscador.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i< texto.length; i++){
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}


function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";

    for(var i = 0; i< texto.length; i++){
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i=i+3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i=i+3
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i=i+3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}