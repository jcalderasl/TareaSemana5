function numeroDeCaracteres(texto, caracter) {
    let count = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) === caracter) {
            count++;
        }
    }
    return count;
}

function calcularConteo() {
    const inputString = document.getElementById("inputString").value;
    const inputCharacter = document.getElementById("inputCharacter").value;
    
    const conteo = numeroDeCaracteres(inputString, inputCharacter);
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `El caracter '${inputCharacter}' aparece ${conteo} veces en el texto.`;
}
