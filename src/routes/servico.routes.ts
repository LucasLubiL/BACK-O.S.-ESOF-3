import express from "express";
import ServicoController from "../controllers/ServicoController";

const router = express.Router();

const servicoController = new ServicoController();

router.post("/cadastrar", servicoController.cadastrar);

router.get("/select", servicoController.listarSelect);

export default router;