import Keep from "./Keep.js";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#keep-form");
const div = document.querySelector("#resultado-div");
const keep = new Keep();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  keep.anotar(titulo.value,descripcion.value);
  div.innerHTML = keep.getNotasHtml();
});
