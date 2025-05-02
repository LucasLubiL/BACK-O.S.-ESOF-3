class Servico{

    private _id: number;
    private _nomeServico: string;

    constructor(id: number, nomeServico: string){
        this._id = id;
        this._nomeServico = nomeServico;
    }

    public get id(): number{
        return this._id;
    }

    public set id(id: number){
        this._id = id;
    }

    public get nomeServico(): string{
        return this._nomeServico;
    }

    public set nomeServico(nomeServico: string){
        this._nomeServico = nomeServico;
    }

}

export default Servico;