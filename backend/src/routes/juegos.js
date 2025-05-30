import express from "express";
import juegosController from "../controllers/juegosController.js";

const router = express.Router();

router
  .route("/")
  .get(juegosController.getJuegos)
  .post(juegosController.createJuegos);

router
  .route("/:id")
  .put(juegosController.updateJuegos)
  .delete(juegosController.deleteJuegos);

export default router;
