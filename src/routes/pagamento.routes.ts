import express from "express";
import PagamentoController from "../controllers/PagamentoController";

const router = express.Router();

const pagamentoController = new PagamentoController();

router.post("/cadastrar", pagamentoController.cadastrar);

router.get("/select", pagamentoController.listarSelect);

export default router;