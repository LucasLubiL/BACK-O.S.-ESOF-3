import UsuarioDAO from "../dao/UsuarioDAO";
import Usuario from "../models/Usuario";

class UsuarioBO {
    
    private usuarioDAO: UsuarioDAO;

    constructor() {

        this.usuarioDAO = new UsuarioDAO();

    }

    async verificarLogin(usuario: string, senha: string) {

        return await this.usuarioDAO.buscarPorUsuarioESenha(usuario, senha);  // Consulta no banco se o login é válido
    
    }

    async cadastrar(user: Usuario): Promise<boolean> {
        
        const verific = await this.usuarioDAO.verificar(user.idFuncionario);
       
        if(verific){
            return false;
        }

        return await this.usuarioDAO.cadastrarUsuario(user);

    }

}

export default UsuarioBO;
