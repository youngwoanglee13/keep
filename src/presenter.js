import Keep from "./Keep.js";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#keep-form");
const div = document.querySelector("#resultado-div");
const keep = new Keep();
const modalE = document.querySelector("#modalE");
idNota="idNota";
form.addEventListener("submit", (event) => {
  event.preventDefault();
  keep.anotar(titulo.value,descripcion.value);
  div.innerHTML = keep.getNotasHtml();
});
div.addEventListener("click", (event) => {
  event.preventDefault();
  idNota=event.target.id;
  window.modalE.showModal();
});
modalE.addEventListener("click", (event) => {
  event.preventDefault();
  keep.ELiminarNota(idNota,event.target.id);
  window.modalE.close();
  div.innerHTML = keep.getNotasHtml();
});

