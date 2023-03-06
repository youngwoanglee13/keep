import Nota from "./Nota.js";
class Keep {
  constructor() {
    this.notas = [];
  }
  anotar(titulo,descripcion) {
    const nota = new Nota(titulo,descripcion);
    if (this.validarNota(nota)){
      this.notas.push(nota);
    }
    return nota;
  }
  getNotasHtml() {
    this.listadenotas ="";
    for (let i = 0; i <  this.notas.length; i++) {
      this.listadenotas = "<div class='nota'>" + "<div =class'titulo'>"+this.notas[i].titulo+"<button id='"+this.notas[i].titulo+ "'>Eliminar</button></input></div> <div class='descripcion'>"+ this.notas[i].descripcion + "</div>"+ "</div>" + this.listadenotas;
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
  ELiminarNota(titulo) {
    for (let i = 0; i < this.notas.length; i++) {
      if (this.notas[i].titulo == titulo) {
        this.notas.splice(i, 1);
      }
    }
  }
  
}
export default Keep;