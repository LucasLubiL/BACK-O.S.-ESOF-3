import express from "express";
import UsuarioController from "../controllers/UsuarioController";

const router = express.Router();

const usuarioController = new UsuarioController();

router.post("/login", usuarioController.login);

router.post("/cadastrarUser", usuarioController.cadastrar);

export default router;