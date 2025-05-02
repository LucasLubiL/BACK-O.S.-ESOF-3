class Ordem{

    private _id: number;
    private _status: string;
    private _description: string;
    private _valor: number;
    private _ordData: Date;
    private _idPag: number;
    private _idService: number;
    private _idFunc: number;
    private _idCliente: number;
    private _msgDev: string;

    constructor(id: number, status: string, description: string, valor: number, ordData: Date, idPag: number, idService: number, idFunc: number, idCliente: number, msgDev: string){
        this._id = id;
        this._status = status;
        this._description = description;
        this._valor = valor;
        this._ordData = ordData;
        this._idPag = idPag;
        this._idService = idService;
        this._idFunc = idFunc;
        this._idCliente = idCliente;
        this._msgDev = msgDev;
    }

    public get id(): number{
        return this._id;
    }

    public set id(id: number){
        this._id = id;
    }

    public get status(): string{
        return this._status;
    }

    public set status(status: string){
        this._status = status;
    }

    public get description(): string{
        return this._description;
    }

    public set description(description: string){
        this._description = description;
    }

    public get valor(): number{
        return this._valor;
    }

    public set valor(valor: number){
        this._valor = valor;
    }

    public get ordData(): Date{
        return this._ordData;
    }

    public set ordData(ordData: Date){
        this._ordData = ordData;
    }

    public get idPag(): number{
        return this._idPag;
    }

    public set idPag(idPag: number){
        this._idPag = idPag;
    }

    public get idService(): number{
        return this._idService;
    }

    public set idService(idService: number){
        this._idService = idService;
    }

    public get idFunc(): number{
        return this._idFunc;
    }

    public set idFunc(idFunc: number){
        this._idFunc = idFunc;
    }

    public get idCliente(): number{
        return this._idCliente;
    }

    public set idCliente(idCliente: number){
        this._idCliente = idCliente;
    }

    public get msgDev(): string {
        return this._msgDev;
    }

    public set msgDev(msgDev: string) {
        this._msgDev = msgDev;
    }

}

export default Ordem;