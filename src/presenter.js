import Keep from "./Keep.js";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#keep-form");
const div = document.querySelector("#resultado-div");
const keep = new Keep();
const modalE = document.querySelector("#modalE");
const idNota = document.querySelector("#TitulonotaParaEliminar"); 
const botonBuscar = document.querySelector("#buscar-button");
const modalNota = document.querySelector("#modalNota");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  keep.anotar(titulo.value,descripcion.value);
  div.innerHTML = keep.getNotasHtml();
});
div.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (isButton) {
    idNota.innerHTML=event.target.id;
    window.modalE.showModal();
  }
});
modalE.addEventListener("click", (event) => {
  keep.ELiminarNota(idNota.innerHTML,event.target.id);
  window.modalE.close();
  div.innerHTML = keep.getNotasHtml();
});
botonBuscar.addEventListener("click", (event) => {
  const nota = keep.Buscar(document.querySelector("#ContenidoBuscar").value,document.querySelector("#checkboxBuscarDescripcion").checked);
  if (nota != null){
    document.querySelector("#tituloModalNota").innerHTML = nota.titulo;
    document.querySelector("#descripcionModalNota").innerHTML = nota.descripcion;
    window.modalNota.showModal();
  }else{
    alert("No se encontro la nota");
  }
});
modalNota.addEventListener("click", (event) => {
  window.modalNota.close();
});



