import express from "express";
import UsuarioController from "../controllers/UsuarioController";

const router = express.Router();

router.post("/login", UsuarioController.login);

export default router;