import { Request, Response } from "express";
import PagamentoBO from "../bo/PagamentoBO";
import Pagamento from "../models/Pagamento";

class PagamentoController {

  async cadastrar(req: Request, res: Response) {
    
  }

  async listarSelect(req: Request, res: Response){

    const pagamentoBO = new PagamentoBO();

    const pagamentos = await pagamentoBO.listarSelect();

    if (pagamentos) {
       res.status(200).json(pagamentos);
    }else {
       res.status(500).json({ error: "Erro ao listar pagamentos" });
    }

  }

}

export default PagamentoController;
