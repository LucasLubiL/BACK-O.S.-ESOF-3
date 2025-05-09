import { Request, Response } from "express";
import ClienteBO from "../bo/ClienteBO";
import Cliente from "../models/Cliente";

class ClienteController {

  async cadastrar(req: Request, res: Response) {

    const clienteData = req.body;
    const clienteBO = new ClienteBO();
    const cliente = new Cliente(
        clienteData.nome,
        clienteData.cpf,
        new Date(clienteData.data_nascimento),
        clienteData.endereco,
        clienteData.cidade,
        clienteData.estado,
    );

    const resultado = await clienteBO.cadastrar(cliente);

    if (resultado) {

      res.status(201).json({ message: "Cliente cadastrado com sucesso!" });

    } else {

      res.status(400).json({ error: "CPF já cadastrado. Não é possível cadastrar este cliente." });
      
    }
    
  }

}

export default ClienteController;
