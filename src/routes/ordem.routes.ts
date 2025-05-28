import express from "express";
import OrdemController from "../controllers/OrdemController";

const router = express.Router();

const ordemController = new OrdemController();

router.post("/criarOrdem", ordemController.criarOrdem);

export default router;