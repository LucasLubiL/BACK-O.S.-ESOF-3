import pool from "../config/database";
import Ordem from "../models/Ordem";

class OrdemDAO {

    async criarOrdem(ordem: Ordem): Promise<boolean> {

        try {

            const query = `INSERT INTO ordem (valor, idpag, idservice, idcliente, idfunc, description_cliente, status_char)VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING idord`;
            const values = [
                ordem.valor,
                ordem.idPag,
                ordem.idService,
                ordem.idCliente,
                ordem.idFunc,
                ordem.descriptionCliente,
                "Aberto"
            ];

            console.log("Executando INSERT ORDEM com:", values);

            const result = await pool.query(query, values);

            if (result && result.rows && result.rows[0]) {

                console.log(`OS criada com sucesso! ID: ${result.rows[0].idord}`);
                return true;

            } else {

               console.error("Erro: Nenhum dado da OS foi inserido.");
                return false;

            }

        } catch (error) {
            console.error("Erro ao criar OS no banco:", error);
            return false;
        }
        
    }
        
}

export default OrdemDAO;
