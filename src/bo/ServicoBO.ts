import ServicoDAO from "../dao/ServicoDAO";
import Servico from "../models/Servico";

class ServicoBO {

    private servicoDAO: ServicoDAO;

    constructor() {

      this.servicoDAO = new ServicoDAO();

    }

    async cadastrar(servico: Servico): Promise<boolean> {
     
      const verific = await this.servicoDAO.verificar(servico.nomeServico);

      if(verific){
        return false;
      }
      
      return await this.servicoDAO.cadastrar(servico);


    }

    async listarSelect(){
      return await this.servicoDAO.listarSelect();
    }

}

export default ServicoBO;
