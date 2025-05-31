import express from "express";
import PagamentoController from "../controllers/PagamentoController";

const router = express.Router();

const pagamentoController = new PagamentoController();

router.post("/cadastrarPagamento", pagamentoController.cadastrar);

router.post("/atualizarPagamento", pagamentoController.atualizar);

router.post("/excluirPagamento", pagamentoController.excluir);

router.get("/select", pagamentoController.listarSelect);

export default router;