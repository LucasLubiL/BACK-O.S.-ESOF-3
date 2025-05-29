import express from "express";
import ServicoController from "../controllers/ServicoController";

const router = express.Router();

const servicoController = new ServicoController();

router.post("/cadastrarServico", servicoController.cadastrar);

router.get("/select", servicoController.listarSelect);

export default router;