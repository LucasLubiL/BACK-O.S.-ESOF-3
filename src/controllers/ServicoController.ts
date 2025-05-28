import { Request, Response } from "express";
import ServicoBO from "../bo/ServicoBO";
import Servico from "../models/Servico";

class ServicoController {

  async cadastrar(req: Request, res: Response) {
    
  }

  async listarSelect(req: Request, res: Response){

    const servicoBO = new ServicoBO();

    const servico = await servicoBO.listarSelect();

    if (servico) {
       res.status(200).json(servico);
    }else {
       res.status(500).json({ error: "Erro ao listar servicos" });
    }

  }

}

export default ServicoController;
