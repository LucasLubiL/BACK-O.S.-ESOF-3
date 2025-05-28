import pool from "../config/database";
import Pagamento from "../models/Pagamento";

class PagamentoDAO {

    async cadastrar(pagamento: Pagamento): Promise<boolean> {
        return true
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
