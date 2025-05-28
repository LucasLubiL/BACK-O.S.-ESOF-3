import ServicoDAO from "../dao/ServicoDAO";
import Servico from "../models/Servico";

class ServicoBO {

    private servicoDAO: ServicoDAO;

    constructor() {

      this.servicoDAO = new ServicoDAO();

    }

    async cadastrar(servico: Servico): Promise<boolean> {
      return true
    }

    async listarSelect(){7
      return await this.servicoDAO.listarSelect();
    }

}

export default ServicoBO;
