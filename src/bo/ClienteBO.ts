import ClienteDAO from "../dao/ClienteDAO";
import Cliente from "../models/Cliente";

class ClienteBO {

    private clienteDAO: ClienteDAO;

    constructor() {

       this.clienteDAO = new ClienteDAO();

    }

    async cadastrar(cliente: Cliente): Promise<boolean> {

      const verific = await this.clienteDAO.verificar(cliente.cpf);

      if(verific){
         return false;
      }

      return await this.clienteDAO.cadastrar(cliente);
      
    }

}

export default ClienteBO;
