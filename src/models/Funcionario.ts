import Cliente from './Cliente';

class Funcionario extends Cliente {

    private _funcao: string;
    private _salario: number;

    constructor(nome: string, cpf: string, data_nascimento: Date, endereco: string, cidade: string, estado: string, funcao: string, salario: number, id?: number) {
        super(nome, cpf, data_nascimento, endereco, cidade, estado, id);
        this._funcao = funcao;
        this._salario = salario;
    }
  
    public get funcao(): string {
      return this._funcao;
    }
  
    public set funcao(funcao: string) {
      this._funcao = funcao;
    }

    public get salario(): number {
      return this._salario;
    }

    public set salario(salario: number) {
      this._salario = salario;
    }

  }

export default Funcionario;
  