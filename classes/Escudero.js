import { Luchador } from "./Luchador.js";
import { Personaje } from "./Personaje.js";

export class Escudero extends Personaje {
  personajeQueSirve;
  pelotismo;

  constructor(nombre, familia, edad, personajeQueSirve, pelotismo) {
    super(nombre, familia, edad);
    if (this.checkPersonajeQueSirve(personajeQueSirve)) {
      this.personajeQueSirve = personajeQueSirve;
    }
    this.pelotismo = this.checkPelotismo(pelotismo);
  }
  checkPersonajeQueSirve(personajeQueSirve) {
    return personajeQueSirve instanceof Luchador;
  }
  checkPelotismo(pelotismo) {
    if (!Number.isInteger(pelotismo)) return 0;
    if (pelotismo < 0) return 0;
    if (pelotismo > 10) return 10;
    return pelotismo;
  }
  comunicar() {
    return `${super.comunicar()} Soy un loser`;
  }
}
