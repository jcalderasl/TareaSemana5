window.onload = iniciar;
function iniciar() {
    var calcular = document.getElementById("btnCalcular");
    calcular.addEventListener("click", clickBtnCalcular);
}
  
function clickBtnCalcular() {
    const resultElement = document.getElementById("result");

    var txtPeso = document.getElementById("txtPeso");
    var peso = parseFloat(txtPeso.value);

    var txtAltura = document.getElementById("txtAltura");
    var altura = parseFloat(txtAltura.value);

    var imc = peso / (altura * altura);
    var resultado = bmi(imc);
   
    resultElement.textContent = "Su IMC es: " + Math.round(imc) +"  →   " + "Estado: " + resultado;
}

function bmi(imc) {
    if (imc < 18.5) {
        return "Bajo de peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidad I";
    } else if (imc >= 35 && imc <= 39.9) {
        return "Obesidad II";
    } else {
        return "Obeso III";
    }
}

// Llamar la función para inicializar
iniciar();