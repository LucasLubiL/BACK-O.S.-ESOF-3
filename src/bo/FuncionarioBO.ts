import FuncionarioDAO from "../dao/FuncionarioDAO";
import Funcionario from "../models/Funcionario";

class FuncionarioBO {

    private funcionarioDAO: FuncionarioDAO;

    constructor() {

      this.funcionarioDAO = new FuncionarioDAO();

    }

    async cadastrar(funcionario: Funcionario): Promise<boolean> {

      return await this.funcionarioDAO.cadastrar(funcionario);
      
    }

}

export default FuncionarioBO;
