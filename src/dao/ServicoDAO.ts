import pool from "../config/database";
import Servico from "../models/Servico";

class ServicoDAO {

    async cadastrar(servico: Servico): Promise<boolean> {
       
         try {

            const query = `INSERT INTO servico(nome_service)VALUES($1) RETURNING idservice`;
            const values = [
                servico.nomeServico
            ];

            console.log("Executando INSERT com:", values);

            const result = await pool.query(query, values);

            if (result && result.rows && result.rows[0]) {

                console.log(`Serviço cadastrado com sucesso! ID: ${result.rows[0].idservice}`);
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

    async verificar(servico: string): Promise<boolean> {

        try{

            const query = `SELECT * FROM servico WHERE nome ILIKE $1`;

            const result = await pool.query(query, [servico]);

            return result.rows.length > 0;

        }catch (error) {
            console.error("Erro ao buscar serviço no banco:", error);
            return false;
        }

    }

    async listarSelect(){

        try{

            const query = `SELECT idservice, nome_service FROM servico ORDER BY idservice`;
            const result = await pool.query(query);
            return result.rows;

        }catch (error) {
            console.error("Erro ao buscar tipo de servico no banco para o select do servico:", error);
            return false;
        }
    }

}

export default ServicoDAO;
