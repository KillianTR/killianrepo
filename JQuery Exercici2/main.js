// JQuery
$().ready(() => {
    $("#cambiarColorRojo").click(() => {
        $("#texto").toggleClass("rojo");
    });
});

// JavaScript
const boton = document.getElementById("cambiarColorAzul");
const parrafo = document.getElementById("texto");

boton.addEventListener("click", function() {
  if (parrafo.style.color === "blue") {
    parrafo.style.color = ""; // Revertir al color original
  } else {
    parrafo.style.color = "blue";
  }
});