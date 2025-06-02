import { Request, Response } from "express";
import OrdemBO from "../bo/OrdemBO";
import Ordem from "../models/Ordem";

class OrdemController {

  async criarOrdem(req: Request, res: Response) {

    console.log("Entrando no método criarOrdem OrdemController.ts");

    const ordemData = req.body;
    const ordemBO = new OrdemBO();
    const usuarioLogado = req.session.funcionarioId;

    const ordem = new Ordem()

    ordem.valor = ordemData.valor;
    ordem.descriptionCliente = ordemData.descricao;
    ordem.idFunc = Number(usuarioLogado);
    ordem.idCliente = ordemData.cliente;
    ordem.idService = ordemData.servico;
    ordem.idPag = ordemData.pagamento;

    const resultado = await ordemBO.criarOrdem(ordem);

    if (resultado) {

      res.status(201).json({ message: "Funcionário cadastrado com sucesso!" });

    } else {

      res.status(500).json({ error: "Erro ao cadastrar funcionário." });
      
    }
    
  }

  async listarSelect(req: Request, res: Response){

    const ordemBO = new OrdemBO();

    const ordem = await ordemBO.listarSelect();

    if (ordem) {
       res.status(200).json(ordem);
    }else {
       res.status(500).json({ error: "Erro ao listar O.S." });
    }

  }

}

export default OrdemController;
