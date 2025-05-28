import pool from "../config/database";
import Cliente from "../models/Cliente";

class ClienteDAO {

    async verificar(cpf: string): Promise<boolean> {

        try{

            const query = `SELECT * FROM cliente WHERE cpf = $1`;

            const result = await pool.query(query, [cpf]);

            return result.rows.length > 0;

        }catch (error) {
            console.error("Erro ao buscar cliente no banco:", error);
            return false;
        }

    }

    async cadastrar(cliente: Cliente): Promise<boolean> {

        try {

            const query = `INSERT INTO cliente (nome, cpf, data_nascimento, endereco, cidade, estado)VALUES ($1, $2, $3, $4, $5, $6) RETURNING idcliente`;
            const values = [
                cliente.nome,
                cliente.cpf,
                cliente.data_nascimento,
                cliente.endereco,
                cliente.cidade,
                cliente.estado
            ];

            console.log("Executando INSERT com:", values);

            const result = await pool.query(query, values);

            if (result && result.rows && result.rows[0]) {

                console.log(`Cliente cadastrado com sucesso! ID: ${result.rows[0].idcliente}`);
                return true;

            } else {

               console.error("Erro: Nenhum dado foi inserido.");
                return false;

            }

        } catch (error) {
            console.error("Erro ao cadastrar cliente no banco:", error);
            return false;
        }
        
    }

    async listarSelect(){

        try{

            const query = `SELECT idcliente, nome FROM cliente ORDER BY idcliente`;
            const result = await pool.query(query);
            return result.rows;

        }catch (error) {
            console.error("Erro ao buscar cliente no banco para o select da ordem:", error);
            return false;
        }
    }

}

export default ClienteDAO;
