import executeQuery from "../utils/db.js";

class Equipo {
  id_tipo_equipo;
  serial_equipo;
  id_sala;
  constructor() {}
  async agregarEquipo() {
    let sql = /*sql*/ `
        INSERT INTO equipos (id_tipo_equipo,
            serial_equipo,
            id_sala)
        VALUES
          (${this.id_tipo_equipo},
            \'${this.serial_equipo}\', ${this.id_sala});
        `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Equipo };
