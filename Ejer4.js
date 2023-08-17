

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;  // 40% de impuestos
    } else {
        return 0;
    }
}

function calcularYMostrarImpuestos() {
    var inputEdad = document.getElementById("inputEdad");
    var inputIngresos = document.getElementById("inputIngresos");
    var resultadoElemento = document.getElementById("resultado");

    var edad = parseInt(inputEdad.value);
    var ingresos = parseFloat(inputIngresos.value);

    var impuestos = calcularImpuestos(edad, ingresos);

    resultadoElemento.textContent = "Impuestos a pagar: $" + impuestos.toFixed(2);
}
