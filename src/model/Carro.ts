export class Carro {

    private marca: string;
    private modelo: string;
    private cor: string;

    public constructor (
        _marca: string,
        _modelo: string,
        _cor: string,) {

            this.marca = _marca;
            this.modelo = _modelo;
            this.cor = _cor


    }

    public getmarca() {
        return this.marca;
    }

    public setmarca(_marca: string) {
        this.marca = _marca;
    }

    public getmodelo() {
        return this.modelo;
    }

    public setmodelo(_modelo: string) {
        this.modelo = _modelo;
    }

    public getcor() {
        return this.cor;
    }

    public setcor(_cor: string) {
        this.cor = _cor;
    }

}
