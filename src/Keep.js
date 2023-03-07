import Nota from "./Nota.js";
class Keep {
  constructor() {
    this.notas = [];
  }
  anotar(titulo,descripcion) {
    const nota = new Nota(titulo.toUpperCase(),descripcion);
    if (this.validarNota(nota)){
      this.notas.push(nota);
    }
    return nota;
  }
  getNotasHtml() {
    this.listadenotas ="";
    for (let i = 0; i <  this.notas.length; i++) {
      this.listadenotas = "<div class='nota'>" + "<div class='tituloNota'>"+this.notas[i].titulo+"</div><button class='botonEliminarNota' id='"+this.notas[i].titulo+ "'>Eliminar</button> <div class='descripcionNota'>"+ this.notas[i].descripcion + "</div>"+ "</div>" + this.listadenotas;
    }
    return this.listadenotas;
  }
  validarNota(nota) {
    if (nota.titulo == "") {
      alert("El titulo no puede estar vacio");
      return false;
    }
    for (let i = 0; i < this.notas.length; i++) {
      if (this.notas[i].titulo == nota.titulo) {
        alert("El titulo ya existe");
        return false;
      }
    }
    return true;
  }
  ELiminarNota(titulo,confirmacion) {
    if (confirmacion == "eliminarModal"){
      for (let i = 0; i < this.notas.length; i++) {
        if (this.notas[i].titulo == titulo) {
          this.notas.splice(i, 1);
        }
      }
    }
  }
  BuscarPorTitulo(titulo) {
    for (let i = 0; i < this.notas.length; i++) {
      if (this.notas[i].titulo == titulo) {
        return this.notas[i];
      }
    }
    return null;
  }
  BuscarPorDescripcion(descripcion) {
    let nota = new Nota("No se encontro la nota","");
    let coincidencias = 0;
    for (let i = 0; i < this.notas.length; i++) {
      if (this.notas[i].descripcion.includes(descripcion)) {
        if (this.notas[i].descripcion.length > coincidencias){
          coincidencias = this.notas[i].descripcion.length;
          nota = this.notas[i];
        }
      }
    }
    if(coincidencias == 0){
      return null;
    }
    return nota;
  }
  Buscar(contexto,opcion){
    if (!opcion){
      return this.BuscarPorTitulo(contexto.toUpperCase());
    }else{
      return this.BuscarPorDescripcion(contexto);
    }
  }
}export default Keep;