import pool from "../config/database";
import Servico from "../models/Servico";

class ServicoDAO {

    async cadastrar(servico: Servico): Promise<boolean> {
        return true
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
