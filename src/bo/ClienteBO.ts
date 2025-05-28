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
   
   async listarSelect(){7
      return await this.clienteDAO.listarSelect();
   }

}

export default ClienteBO;
