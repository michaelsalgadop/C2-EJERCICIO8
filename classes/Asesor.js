import { Personaje } from "./Personaje.js";

export class Asesor extends Personaje {
  personajeAsesorado;

  constructor(nombre, familia, edad, personajeAsesorado) {
    super(nombre, familia, edad);
    if (this.checkPersonaje(personajeAsesorado)) {
      this.personajeAsesorado = this.checkPersonaje(personajeAsesorado);
    }
  }
  checkPersonaje(personajeAsesorado) {
    return personajeAsesorado instanceof Personaje;
  }
  comunicar() {
    return `${super.comunicar()} No sé por qué, pero creo que voy a morir pronto`;
  }
}
