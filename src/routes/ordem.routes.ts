import express from "express";
import OrdemController from "../controllers/OrdemController";

const router = express.Router();

const ordemController = new OrdemController();

router.post("/criarOrdem", ordemController.criarOrdem);

router.post("/finalizarOrdem", ordemController.finalizarOrdem);

router.post("/enviarOrdem", ordemController.enviarOrdem);

router.post("/cancelarOrdem", ordemController.cancelarOrdem);

router.get("/selectOrdem", ordemController.listarSelect);

export default router;