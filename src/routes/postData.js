import { Router } from "express";
import { postInsidenciaController } from "../controllers/postDataCampus.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarInsidencia", postInsidenciaController);
  return router;
};

export { postInitRoute };
