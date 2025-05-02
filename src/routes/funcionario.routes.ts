import express from "express";
import FuncionarioController from "../controllers/FuncionarioController";

const router = express.Router();

console.log("funcionario routes rodando");

const funcionarioController = new FuncionarioController();

router.post("/cadastrar", funcionarioController.cadastrar);

export default router;