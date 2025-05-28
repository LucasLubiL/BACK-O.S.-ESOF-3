import PagamentoDAO from "../dao/PagamentoDAO";
import Pagamento from "../models/Pagamento";

class PagamentoBO {

    private pagamentoDAO: PagamentoDAO;

    constructor() {

      this.pagamentoDAO = new PagamentoDAO();

    }

    async cadastrar(pagamento: Pagamento): Promise<boolean> {
      return true
    }

    async listarSelect(){7
      return await this.pagamentoDAO.listarSelect();
    }

}

export default PagamentoBO;
