import { Equipo } from "../entities/equipo.js";
import { Insidencia } from "../entities/insidencia.js";

const postInsidencia = async (
  id_trainer,
  id_equipo,
  id_categoria_insidencia,
  id_tipo_insidencia,
  descripcion,
  fecha_insidencia
) => {
  const insidencia = new Insidencia();
  insidencia.id_trainer = id_trainer;
  insidencia.id_equipo = id_equipo;
  insidencia.id_categoria_insidencia = id_categoria_insidencia;
  insidencia.id_tipo_insidencia = id_tipo_insidencia;
  insidencia.descripcion = descripcion;
  insidencia.fecha_insidencia = fecha_insidencia;
  const query = await insidencia.agregarInsidencias();
  if (query.affectedRows === 1) {
    return "Insidencia agregada con éxito";
  }
};

const postEquipo = async (id_tipo_equipo, serial_equipo, id_sala) => {
  const equipo = new Equipo();
  equipo.id_tipo_equipo = id_tipo_equipo;
  equipo.serial_equipo = serial_equipo;
  equipo.id_sala = id_sala;
  const query = await equipo.agregarEquipo();
  if (query.affectedRows === 1) {
    return "Equipo agregado con éxito";
  }
};

export { postInsidencia, postEquipo };
