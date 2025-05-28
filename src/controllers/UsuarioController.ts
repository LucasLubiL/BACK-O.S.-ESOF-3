import { Request, Response } from "express";
import UsuarioBO from "../bo/UsuarioBO";
import Usuario from "../models/Usuario";

class UsuarioController {

    async login(req: Request, res: Response) {

        const { usuario, senha } = req.body;
        const usuarioBO = new UsuarioBO();
        const usuarioEncontrado = await usuarioBO.verificarLogin(usuario, senha); 

        if (usuarioEncontrado) {

            req.session.funcionarioId = usuarioEncontrado.idFuncionario;
            req.session.funcionarioNome = usuarioEncontrado.usuario;

            res.status(200).json(usuarioEncontrado);  // Envia os dados do usuário de volta ao frontend
       
        } else {

            res.status(401).json({ message: "Usuário ou senha inválidos" });  // Caso o login falhe, responde com erro
      
        }

    }

    async cadastrar(req: Request, res: Response){

        const data = req.body;
        const usuarioBO = new UsuarioBO();
        const user = new Usuario();
        user.usuario = data.usuario;
        user.senha = data.senha;
        user.idFuncionario = data.func;

        const resultado = await usuarioBO.cadastrar(user);

        if(resultado){

            res.status(201).json({ message: "Usuário cadastrado com sucesso!" });

        }else {

            res.status(201).json({ message: "Erro ao cadastrar Usuário" });
            
        }

    }
    
};

export default UsuarioController;
