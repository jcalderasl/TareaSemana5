document.addEventListener("DOMContentLoaded", function () {
  const printButton = document.getElementById("printButton");
  printButton.addEventListener("click", imprimirArreglo);
});

function imprimirArreglo() {
  const items = [1, "Hola", 2, "Mundo"];
  const outputList = document.getElementById("outputList");
  outputList.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${String.fromCharCode(97 + i)}. ${items[i]}`;
    outputList.appendChild(listItem);
  }
}
