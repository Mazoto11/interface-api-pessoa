export class Veiculo {

    private tipo: string;
    private modelo: string;
    private fabricante: string;

    public constructor (
        _tipo: string,
        _modelo: string,
        _data_nascimento: Date,
        _fabricante: string,
        _endereco: string,
        _email: string,
        _altura: number,
        _peso: number,) {

            this.tipo = _tipo;
            this.modelo = _modelo;
            this.fabricante = _fabricante

    }

    public gettipo() {
        return this.tipo;
    }

    public settipo(_tipo: string) {
        this.tipo = _tipo;
    }

    public getmodelo() {
        return this.modelo;
    }

    public setmodelo(_modelo: string) {
        this.modelo = _modelo;
    }

    public getfabricante() {
        return this.fabricante;
    }

    public setfabricante(_fabricante: string) {
        this.fabricante = _fabricante;
    }

}