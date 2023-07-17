import executeQuery from "../utils/db.js";

class Insidencia {
  id_trainer;
  id_equipo;
  id_categoria_insidencia;
  id_tipo_insidencia;
  descripcion;
  fecha_insidencia;
  constructor() {}
  async agregarInsidencias() {
    let sql = /*sql*/ `
    INSERT INTO insidencias (
        id_trainer, id_equipo, id_categoria_insidencia,
        id_tipo_insidencia, descripcion,
        fecha_insidencia)
    VALUES (${this.id_trainer},${this.id_equipo}, ${this.id_categoria_insidencia},
        ${this.id_tipo_insidencia}, \"${this.descripcion}\", \"${this.fecha_insidencia}\")
    `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Insidencia };
