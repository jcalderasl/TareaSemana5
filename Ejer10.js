
/*
function encontrarMaximo() {
    const inputElement = document.getElementById("numbersInput");
    const inputText = inputElement.value;
    const numbersArray = inputText.split(",").map(number => parseFloat(number.trim()));
  
    let max = numbersArray[0];
  
    for (let i = 1; i < numbersArray.length; i++) {
      if (numbersArray[i] > max) {
        max = numbersArray[i];
      }
    }
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `El número máximo es: ${max}`;
  }
  */

  function encontrarMaximo() {
    const inputElement = document.getElementById("numbersInput");
    const inputText = inputElement.value;
    const numbersArray = inputText.split(",").map(number => parseFloat(number.trim()));
  
    const max = Math.max(...numbersArray);
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `El número máximo es: ${max}`;
  }
  