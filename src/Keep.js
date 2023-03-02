import Nota from "./Nota.js";
class Keep {
  constructor() {
    this.notas = [];
  }
  anotar(descripcion) {
    const nota = new Nota(descripcion);
    this.notas.push(nota);
    return nota;
  }
  getNotasHtml() {
    this.listadenotas ="";
    for (let i = 0; i < this.notas.length; i++) {
        this.listadenotas = "<p>" + this.notas[i].descripcion + "</p>" + this.listadenotas;
    }
    return this.listadenotas;
  }
  
}
export default Keep;