const inputText = document.querySelector("#input-texto");
const btnEncriptador = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const mensajeSalida = document.querySelector("#mensajeSalida");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputText.value)
    mensajeSalida.value = textoEncriptado
    mensajeSalida.style.backgroundImage="none"
    inputText.value = ""
    btnCopiar.style.display = "block"

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;
}

function btDesencriptar() {
    const textoEncriptado = desencriptar(inputText.value)
    mensajeSalida.value = textoEncriptado
    document.getElementById("mensajeSalida").value = textoEncriptado;
    inputText.value = ""  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


function copiar() {
    
    mensajeSalida.select();
    navigator.clipboard.writeText(mensajeSalida.value)
    mensajeSalida.value = "";
    alert("Texto Copiado")
}

