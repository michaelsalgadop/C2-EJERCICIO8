export class Personaje {
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  // eslint-disable-next-line class-methods-use-this
  comunicar() {
    return `${this.nombre} dice:`;
  }

  morir() {
    this.vivo = false;
  }
}
