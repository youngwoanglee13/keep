import Keep from "./Keep.js";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const form = document.querySelector("#keep-form");
const div = document.querySelector("#resultado-div");
const keep = new Keep();
const idNota = document.querySelector("#TitulonotaParaEliminar"); 
const botonBuscar = document.querySelector("#buscar-button");
const modalNota = document.querySelector("#modalNota");
const modalE = document.querySelector("#modalE");
const modalEditar = document.querySelector("#modalEditar");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  keep.anotar(titulo.value,descripcion.value);
  div.innerHTML = keep.getNotasHtml();
  titulo.value = "";
  descripcion.value = "";
});
div.addEventListener("click", (event) => {
  idNota.innerHTML=event.target.id;
  if (event.target.className=="botonEliminarNota") {
    window.modalE.showModal();
  }
  if (event.target.className=="botonEditarNota") {
    document.querySelector("#tituloEditar").value=idNota.innerHTML.substring(0,idNota.innerHTML.length-1);
    document.querySelector("#descripcionEditar").value=keep.BuscarPorTitulo(idNota.innerHTML.substring(0,idNota.innerHTML.length-1)).descripcion;
    window.modalEditar.showModal();
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
modalEditar.addEventListener("click", (event) => {
  if (event.target.id=="editarNotaModal"){
    keep.ELiminarNota(idNota.innerHTML.substring(0,idNota.innerHTML.length-1),"eliminarModal");
    if(keep.anotar(document.querySelector("#tituloEditar").value,document.querySelector("#descripcionEditar").value)!=null){
      window.modalEditar.close();
      div.innerHTML = keep.getNotasHtml();
    }
  }
  if (event.target.id=="cerrarEditarNota"){
    window.modalEditar.close();
  }
});


