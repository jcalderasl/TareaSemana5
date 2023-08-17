function sumarArreglo() {
    // Obtener el valor del input de números
    const inputElement = document.getElementById("numbersInput");
    const inputText = inputElement.value;
  
    // Obtener el valor de las posiciones inicial y final
    const startPosition = parseInt(document.getElementById("startPosition").value);
    const endPosition = parseInt(document.getElementById("endPosition").value);
  
    // Dividir el texto en números separados por coma
    const numbersArray = inputText.split(",").map(number => parseFloat(number.trim()));
  
    // Validar las posiciones
    if (startPosition < 0 || startPosition >= numbersArray.length ||
        endPosition < 0 || endPosition >= numbersArray.length ||
        startPosition > endPosition) {
      const resultElement = document.getElementById("result");
      resultElement.textContent = "Las posiciones ingresadas son inválidas.";
      return;
    }
  
    // Calcular la suma de los números en el rango
    const sumInRange = numbersArray.slice(startPosition, endPosition + 1).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    // Mostrar el resultado
    const resultElement = document.getElementById("result");
    resultElement.textContent = `La suma de los números en el rango es: ${sumInRange}`;
  }
  