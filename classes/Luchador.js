import { Personaje } from "./Personaje.js";

export class Luchador extends Personaje {
  arma;
  destreza;
  constructor(nombre, familia, edad, arma, destreza) {
    super(nombre, familia, edad);
    this.arma = arma;
    this.destreza = this.checkDestreza(destreza);
  }
  checkDestreza(destreza) {
    if (!Number.isInteger(destreza)) return 0;
    if (destreza < 0) return 0;
    if (destreza > 10) return 10;
    return destreza;
  }
  comunicar() {
    return `${super.comunicar()} Primero pego y luego pregunto`;
  }
}
