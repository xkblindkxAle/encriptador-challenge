const entrada = document.querySelector("#texto-entrada");
const salida = document.querySelector("#texto-salida");
const copiar = document.querySelector("#btn-copiar");
const aviso = document.querySelector("#aviso");
const aviso_ = document.querySelector("#aviso-");
copiar.style.visibility = "hidden";

function validarString(){
    let textoEntrada = document.querySelector("#texto-entrada").value;
    let validar = textoEntrada.match(/^[a-z\s]*$/);

    if(!validar || validar === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btn_encriptar(){
    if(!validarString()) {
        const encriptado = encriptar(entrada.value);
        salida.value = encriptado;
        salida.style.backgroundImage = "none";
        entrada.value = "";
        copiar.style.visibility = "visible";
        aviso.style.visibility = "hidden";
        aviso_.style.visibility = "hidden";
    
    }
}


function encriptar(encriptar_){
    let llavesCodificacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encriptar_ = encriptar_.toLowerCase();

    for(let i = 0; i < llavesCodificacion.length; i++){
        if(encriptar_.includes(llavesCodificacion[i][0])){
            encriptar_ = encriptar_.replaceAll(llavesCodificacion[i][0], llavesCodificacion[i][1]);
        }

    }
    return encriptar_;
}



function btn_desencriptar(){
    const encriptado = desencriptar(entrada.value);
    salida.value = encriptado;
    salida.style.backgroundImage = "none";
    entrada.value = "";
    copiar.style.visibility = "visible";
    aviso.style.visibility = "hidden";
    aviso_.style.visibility = "hidden";
    
}


function desencriptar(desencriptar_){
    let llavesCodificacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    desencriptar_ = desencriptar_.toLowerCase();

    for(let i = 0; i < llavesCodificacion.length; i++){
        if(desencriptar_.includes(llavesCodificacion[i][1])){
            desencriptar_ = desencriptar_.replaceAll(llavesCodificacion[i][1] , llavesCodificacion[i][0]);
        }

    }
    return desencriptar_;
}


function btn_copiar(){
    salida.select();
    navigator.clipboard.writeText(salida.value);
    salida.value = "";
    alert("Texto Copiado");
}
