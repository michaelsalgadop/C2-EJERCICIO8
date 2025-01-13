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

const pintarPersonajes = () =>
  personajes
    .reduce((acumulador, personaje) => {
      const tipoPersonaje = personaje.constructor.name;
      const categoriaPersonaje = acumulador.find(
        (personajeAcumulador) => tipoPersonaje === personajeAcumulador.tipo
      );
      if (categoriaPersonaje) {
        categoriaPersonaje.personajes.push(personaje);
        return acumulador;
      } else {
        return [
          ...acumulador,
          {
            tipo: tipoPersonaje,
            personajes: [personaje],
          },
        ];
      }
    }, [])
    .map(({ tipo: tipoCategoria, personajes: personajesCategoria }) => ({
      tipo: tipoCategoria,
      personajes: personajesCategoria
        .map((personaje) => ({
          nombre: `${personaje.nombre} ${personaje.familia}`,
          estado: personaje.vivo ? "vivo" : "muerto",
          edad: personaje.edad,
        }))
        .sort(({ edad: edadA }, { edad: edadB }) => edadA - edadB),
    }));
console.log(JSON.stringify(pintarPersonajes(), null, 2));
