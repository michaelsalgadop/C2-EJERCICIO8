import { Personaje } from "./Personaje.js";

export class Rey extends Personaje {
  anyosReinado;
  constructor(nombre, familia, edad, anyosReinado) {
    super(nombre, familia, edad);
    this.anyosReinado = anyosReinado;
  }
  comunicar() {
    return `${super.comunicar()} Vais a morir todos`;
  }
}
