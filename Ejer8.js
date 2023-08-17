
  function multiplicarArreglo() {
    // Obtener el valor del input
    const inputElement = document.getElementById("numbersInput");
    const inputText = inputElement.value;
  
    // Dividir el texto en números separados por coma
    const numbersArray = inputText.split(",").map(number => parseFloat(number.trim()));
  
    // Calcular la multiplicación de los elementos del arreglo
    const multiplicacion = numbersArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  
    // Mostrar el resultado
    const resultElement = document.getElementById("result");
    resultElement.textContent = `El resultado de la multiplicación es: ${multiplicacion}`;
  }
  