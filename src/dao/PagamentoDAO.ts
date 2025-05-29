import pool from "../config/database";
import Pagamento from "../models/Pagamento";

class PagamentoDAO {

    async cadastrar(pagamento: Pagamento): Promise<boolean> {

        try {

            const query = `INSERT INTO pagamento(nome)VALUES($1) RETURNING idpag`;
            const values = [
                pagamento.nome 
            ];

            console.log("Executando INSERT com:", values);

            const result = await pool.query(query, values);

            if (result && result.rows && result.rows[0]) {

                console.log(`Pagamento cadastrado com sucesso! ID: ${result.rows[0].idpag}`);
                return true;

            } else {

               console.error("Erro: Nenhum dado foi inserido.");
                return false;

            }

        } catch (error) {
            console.error("Erro ao cadastrar pagamento no banco:", error);
            return false;
        }

    }

    async verificar(pagamento: string): Promise<boolean> {

        try{

            const query = `SELECT * FROM pagamento WHERE nome ILIKE $1`;

            const result = await pool.query(query, [pagamento]);

            return result.rows.length > 0;

        }catch (error) {
            console.error("Erro ao buscar pagamento no banco:", error);
            return false;
        }

    }

    async listarSelect(){

        try{

            const query = `SELECT idpag, nome FROM pagamento ORDER BY idpag`;
            const result = await pool.query(query);
            return result.rows;

        }catch (error) {
            console.error("Erro ao buscar forma de pagamento no banco para o select do pagamento:", error);
            return false;
        }
    }

}

export default PagamentoDAO;
