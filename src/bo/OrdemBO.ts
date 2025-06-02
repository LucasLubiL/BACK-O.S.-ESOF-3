import OrdemDAO from "../dao/OrdemDAO";
import Ordem from "../models/Ordem";

class OrdemBO {

    private ordemDAO: OrdemDAO;

    constructor() {

      this.ordemDAO = new OrdemDAO();

    }

    async criarOrdem(ordem: Ordem): Promise<boolean> {

      return await this.ordemDAO.criarOrdem(ordem);

    }

    async listarSelect(){

      return await this.ordemDAO.listarSelect();
      
    }

}

export default OrdemBO;
