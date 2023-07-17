import { Router } from "express";
import {
  postInsidenciaController,
  postEquipoController,
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
  return router;
};

export { postInitRoute };
