import { Luchador } from "../classes/Luchador.js";
import { Rey } from "../classes/Rey.js";
import { Asesor } from "../classes/Asesor.js";
import { Escudero } from "../classes/Escudero.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const personajes = [joffrey, jaime, tyrion, daenerys, bronn];

const getMensajesLuchadores = (personajes) =>
  personajes
    .filter((personaje) => personaje instanceof Luchador)
    .map((personaje) => personaje.comunicar());

console.log(personajes[0].serie);

for (const mensaje of getMensajesLuchadores(personajes)) {
  console.log(mensaje);
}

jaime.morir();
tyrion.morir();
