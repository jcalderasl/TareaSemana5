function validarClave() {
    var usuarioInput = document.getElementById("usuario");
    var contrasenaInput = document.getElementById("contrasena");
    var resultadoElemento = document.getElementById("resultado");

    var usuario = usuarioInput.value;
    var contrasena = contrasenaInput.value;

    // Método para la comparación de contraseñas (mayúsculas y minúsculas)
    var contrasenaCorrecta = "JesusAntonio";

    if (contrasena === contrasenaCorrecta) {
        resultadoElemento.textContent = "Bienvenido, " + usuario + ".";
    } else {
        resultadoElemento.textContent = "Usuario o contraseña incorrectos.";
    }

    // Limpiar los campos después de la validación
    usuarioInput.value = "";
    contrasenaInput.value = "";
}
