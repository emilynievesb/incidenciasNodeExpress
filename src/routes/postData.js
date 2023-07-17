import { Router } from "express";
import {
  postInsidenciaController,
  postEquipoController,
  postTrainerController,
} from "../controllers/postDataCampus.js";
import { postInsidenciaDTO } from "./DTO/postDTO.js";
const postInitRoute = () => {
  const router = Router();
  router.post(
    "/agregarInsidencia",
    postInsidenciaDTO,
    postInsidenciaController
  );
  router.post("/agregarEquipo", postEquipoController);
  router.post("/agregarTrainer", postTrainerController);
  return router;
};

export { postInitRoute };
