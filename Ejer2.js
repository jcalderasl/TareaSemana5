

function likes(numero) {
    if (numero < 1000) {
        return numero.toString();
    } else if (numero < 1000000) {
        return (numero / 1000).toString() + "K";
    } else {
        return (numero / 1000000).toString() + "M";
    }
}
function mostrarLikes() {
    const numero = document.getElementById("numero").value.replace(/,/g, "");
    const resultado = likes(numero);
    document.getElementById("resultado").innerHTML = resultado;
}
