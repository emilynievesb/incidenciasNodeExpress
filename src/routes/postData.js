import { Router } from "express";
import {
  postInsidenciaController,
  postEquipoController,
  postTrainerController,
} from "../controllers/postDataCampus.js";
import {
  postInsidenciaDTO,
  postEquipoDTO,
  postTrainerDTO,
} from "./DTO/postDTO.js";
const postInitRoute = () => {
  const router = Router();
  router.post(
    "/agregarInsidencia",
    postInsidenciaDTO,
    postInsidenciaController
  );
  router.post("/agregarEquipo", postEquipoDTO, postEquipoController);
  router.post("/agregarTrainer", postTrainerDTO, postTrainerController);
  return router;
};

export { postInitRoute };
