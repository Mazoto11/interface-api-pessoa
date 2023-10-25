export class Residencia {

    private tipo: string;
    private quantComodos: string;
    private garagem: boolean;

    public constructor (
        _tipo: string,
        _quantComodos: string,
        _data_nascimento: Date,
        _garagem: boolean,
        _endereco: string,
        _email: string,
        _altura: number,
        _peso: number,) {

            this.tipo = _tipo;
            this.quantComodos = _quantComodos;
            this.garagem = _garagem

    }

    public gettipo() {
        return this.tipo;
    }

    public settipo(_tipo: string) {
        this.tipo = _tipo;
    }

    public getquantComodos() {
        return this.quantComodos;
    }

    public setquantComodos(_quantComodos: string) {
        this.quantComodos = _quantComodos;
    }

    public getgaragem() {
        return this.garagem;
    }

    public setgaragem(_garagem: boolean) {
        this.garagem = _garagem;
    }

}
