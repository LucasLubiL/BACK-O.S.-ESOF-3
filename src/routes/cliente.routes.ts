import express from "express";
import ClienteController from "../controllers/ClienteController";

const router = express.Router();

const clienteController = new ClienteController();

router.post("/cadastrarCliente", clienteController.cadastrar);

router.get("/select", clienteController.listarSelect);

export default router;