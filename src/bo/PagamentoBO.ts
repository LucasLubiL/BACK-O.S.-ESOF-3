import PagamentoDAO from "../dao/PagamentoDAO";
import Pagamento from "../models/Pagamento";

class PagamentoBO {

    private pagamentoDAO: PagamentoDAO;

    constructor() {

      this.pagamentoDAO = new PagamentoDAO();

    }

    async cadastrar(pagamento: Pagamento): Promise<boolean> {

      const verific = await this.pagamentoDAO.verificar(pagamento.nome);

      if(verific){
        return false;
      }
      
      return await this.pagamentoDAO.cadastrar(pagamento);

    }

    async listarSelect(){
      return await this.pagamentoDAO.listarSelect();
    }

}

export default PagamentoBO;
