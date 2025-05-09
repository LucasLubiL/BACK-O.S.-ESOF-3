import express from "express";
import ClienteController from "../controllers/ClienteController";

const router = express.Router();

const clienteController = new ClienteController();

router.post("/cadastrarCliente", clienteController.cadastrar);

export default router;