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

    async cadastrarUsuario(user: Usuario): Promise<boolean> {

        try{

            const query = "INSERT INTO usuario(usuario,senha,idfunc) values($1, $2, $3) RETURNING iduser";
            const values = [user.usuario, user.senha, user.idFuncionario];
            
            console.log("Executando INSERT com:", values);

            const result = await pool.query(query, values);

            if (result && result.rows && result.rows[0]) {

                console.log(`Usuário cadastrado com sucesso! ID: ${result.rows[0].idfunc}`);
                return true;

            } else {

                console.error("Erro: Nenhum dado foi inserido.");
                return false;

            }

        }catch (error) {
            console.error("Erro ao cadastrar usuário no banco:", error);
            return false;
        }

    }

}

export default UsuarioDAO;
