import pool from "../config/database";
import Funcionario from "../models/Funcionario";

class FuncionarioDAO {

    async verificar(cpf: string): Promise<boolean> {

        try{

           const query = `SELECT * FROM funcionario WHERE cpf = $1`;

           const result = await pool.query(query, [cpf]);

           return result.rows.length > 0;

        } catch (error) {
            console.error("Erro ao buscar funcionário no banco:", error);
            return false;
        }


    }

    async cadastrar(funcionario: Funcionario): Promise<boolean> {

        try {

            const query = `INSERT INTO funcionario (nome, cpf, data_nascimento, funcao, salario, endereco, cidade, estado)VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING idfunc`;
            const values = [
                funcionario.nome,
                funcionario.cpf,
                funcionario.data_nascimento,
                funcionario.funcao,
                funcionario.salario,
                funcionario.endereco,
                funcionario.cidade,
                funcionario.estado
            ];

            console.log("Executando INSERT com:", values);

            const result = await pool.query(query, values);

            if (result && result.rows && result.rows[0]) {

                console.log(`Funcionário cadastrado com sucesso! ID: ${result.rows[0].idfunc}`);
                return true;

            } else {

               console.error("Erro: Nenhum dado foi inserido.");
                return false;

            }

        } catch (error) {
            console.error("Erro ao cadastrar funcionário no banco:", error);
            return false;
        }
        
    }

    async listarSelect(){

        try{

            const query = `SELECT idfunc, nome FROM funcionario ORDER BY idfunc`;
            const result = await pool.query(query);
            return result.rows;

        }catch (error) {
            console.error("Erro ao buscar funcionário no banco para o select do usuario:", error);
            return false;
        }
    }

}

export default FuncionarioDAO;
