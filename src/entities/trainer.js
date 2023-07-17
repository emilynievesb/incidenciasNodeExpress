import executeQuery from "../utils/db.js";

class Trainer {
  nombre_trainer;
  email_personal;
  email_corporativo;
  telefono_movil;
  telefono_residencia;
  telefono_empresa;
  telefono_movil_empresarial;
  constructor() {}
  async agregarTrainer() {
    let sql = /*sql*/ `
    INSERT INTO trainers (nombre_trainer, email_personal,
        email_corporativo, telefono_movil, telefono_residencia,
        telefono_empresa, telefono_movil_empresarial)
        VALUES
          (\'${this.nombre_trainer}\', \'${this.email_personal}\', \'${this.email_corporativo}\',
           ${this.telefono_movil}, ${this.telefono_residencia}, ${this.telefono_empresa},
           ${this.telefono_movil_empresarial})
    `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
export { Trainer };
