function sumarArreglo() {
    // Obtener el valor del input
    const inputElement = document.getElementById("numbersInput");
    const inputText = inputElement.value;
  
    // Dividir el texto en números separados por coma
    const numbersArray = inputText.split(",").map(number => parseFloat(number.trim()));
  
    // Calcular la suma de los elementos del arreglo
    const suma = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    // Mostrar el resultado
    const resultElement = document.getElementById("result");
    resultElement.textContent = `La suma de los números es: ${suma}`;
  }
  