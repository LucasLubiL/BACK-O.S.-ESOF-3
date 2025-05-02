import pool from "../config/database";
import Usuario from "../models/Usuario";

class UsuarioDAO {
    async buscarPorUsuarioESenha(usuario: string, senha: string): Promise<Usuario | null> {

        try{

            const query = "SELECT u.*, f.funcao FROM usuario u JOIN funcionario f ON f.idfunc = u.idfunc WHERE u.usuario = $1 and senha = $2";
            const values = [usuario, senha];

            const result = await pool.query(query, values);

            if (result.rows.length > 0) {
                const row = result.rows[0];
                const usuarioEncontrado = new Usuario(
                    row.iduser,
                    row.usuario,
                    row.senha,
                    row.idfunc,
                    row.funcao
                );
                return usuarioEncontrado;
            }
            

        }catch(error){
            console.error("Erro ao cadastar BANCO", error);
        }
        
        return null;
    }
}

export default UsuarioDAO;
