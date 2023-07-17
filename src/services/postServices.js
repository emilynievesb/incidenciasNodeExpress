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

export { postInsidencia };
