import UsuarioDAO from "../dao/UsuarioDAO";

class UsuarioBO {
    
    private usuarioDAO: UsuarioDAO;

    constructor() {

        this.usuarioDAO = new UsuarioDAO();

    }

    async verificarLogin(usuario: string, senha: string) {

        return await this.usuarioDAO.buscarPorUsuarioESenha(usuario, senha);  // Consulta no banco se o login é válido
    
    }
}

export default UsuarioBO;
