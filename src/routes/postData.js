import { Router } from "express";
import { postInsidenciaController } from "../controllers/postDataCampus.js";
import { postInsidenciaDTO } from "./DTO/postDTO.js";
const postInitRoute = () => {
  const router = Router();
  router.post(
    "/agregarInsidencia",
    postInsidenciaDTO,
    postInsidenciaController
  );
  return router;
};

export { postInitRoute };
