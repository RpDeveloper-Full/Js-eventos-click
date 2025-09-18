// Selección de elementos
const titulo = document.querySelector("#titulo");
const parrafo = document.querySelector("#parrafo");
const btnColor = document.querySelector("#btnColor");
const btnTexto = document.querySelector("#btnTexto");
const btnOcultar = document.querySelector("#btnOcultar");

// Evento click para cambiar color del título
btnColor.addEventListener("click", () => {
  titulo.style.color = titulo.style.color === "blue" ? "red" : "blue";
});

// Evento click para cambiar texto del párrafo
btnTexto.addEventListener("click", () => {
  parrafo.textContent = "¡El texto fue cambiado con un evento click!";
});

// Evento click para ocultar/mostrar párrafo
btnOcultar.addEventListener("click", () => {
  if (parrafo.style.display === "none") {
    parrafo.style.display = "block";
  } else {
    parrafo.style.display = "none";
  }
});