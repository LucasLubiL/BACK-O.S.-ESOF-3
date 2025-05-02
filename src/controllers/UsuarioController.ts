import { Request, Response } from "express";
import UsuarioBO from "../bo/UsuarioBO";

const UsuarioController = {

    async login(req: Request, res: Response) {

        const { usuario, senha } = req.body;
        const usuarioBO = new UsuarioBO();
        const usuarioEncontrado = await usuarioBO.verificarLogin(usuario, senha); 

        if (usuarioEncontrado) {

            res.status(200).json(usuarioEncontrado);  // Envia os dados do usuário de volta ao frontend
       
        } else {

            res.status(401).json({ message: "Usuário ou senha inválidos" });  // Caso o login falhe, responde com erro
      
        }

    }
    
};

export default UsuarioController;
