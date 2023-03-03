import Nota from "./Nota.js";
class Keep {
  constructor() {
    this.notas = [];
  }
  anotar(titulo,descripcion) {
    const nota = new Nota(titulo,descripcion);
    this.notas.push(nota);
    return nota;
  }
  getNotasHtml() {
    this.listadenotas ="";
    for (let i = 0; i <  this.notas.length; i++) {
        this.listadenotas = "<p>" + this.notas[i].titulo +"<br>"+ this.notas[i].descripcion + "</p>" + this.listadenotas;
    }
    return this.listadenotas;
  }
  
}
export default Keep;