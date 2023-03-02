import nota from "./notas.js";

const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#keep-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML += "<p>" + nota(descripcion.value) + "</p>";
});
