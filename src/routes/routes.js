import { Router } from "express";
import { postInitRoute } from "./postData.js";

const initAPIRoutes = () => {
  const router = Router();
  router.use("/post", postInitRoute());
  return router;
};

export { initAPIRoutes };
