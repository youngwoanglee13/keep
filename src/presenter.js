import Keep from "./Keep.js";

const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#keep-form");
const div = document.querySelector("#resultado-div");
const keep = new Keep();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  keep.anotar(descripcion.value);
  div.innerHTML = keep.getNotasHtml();
});
