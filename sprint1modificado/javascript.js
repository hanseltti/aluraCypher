
function encriptarTexto() {
    x = document.getElementById("txtarea").value;
    x = x.toString();
    x = x.replaceAll("a", "4");
    x = x.replaceAll("e", "3");
    x = x.replaceAll("i", "1");
    x = x.replaceAll("o", "0");
    x = x.replaceAll("t", "7");
    x = x.replaceAll("b", "8");
    x = x.replaceAll("s", "$");
    let textoEncriptado = document.getElementById("textoEncriptado");
    textoEncriptado.innerHTML = x;
}

function desencriptarTexto(){
    x = document.getElementById("txtarea").value;
    x = x.toString();
    x = x.replaceAll("4", "a");
    x = x.replaceAll("3", "e");
    x = x.replaceAll("1", "i");
    x = x.replaceAll("0", "o");
    x = x.replaceAll("7", "t");
    x = x.replaceAll("8", "b");
    x = x.replaceAll("$", "s");
    let textoDesencriptado = document.getElementById("textoEncriptado");
    textoDesencriptado.innerHTML = x;
}












