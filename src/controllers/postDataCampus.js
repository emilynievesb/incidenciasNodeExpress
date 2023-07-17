import { postEquipo, postInsidencia } from "../services/postServices.js";

const postInsidenciaController = async (req, res, next) => {
  try {
    const {
      trainer,
      idEquipo,
      idCategoriaInsidencia,
      idTipoInsidencia,
      descripcion,
      fechaInsidencia,
    } = req.body;
    const result = await postInsidencia(
      trainer,
      idEquipo,
      idCategoriaInsidencia,
      idTipoInsidencia,
      descripcion,
      fechaInsidencia
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
const postEquipoController = async (req, res, next) => {
  try {
    const { idTipoEquipo, serialEquipo, idSala } = req.body;
    const result = await postEquipo(idTipoEquipo, serialEquipo, idSala);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { postInsidenciaController, postEquipoController };
