export class PessoaJuridica {

    private proprietario: string;
    private nomeFantasia: string;
    private cnpj: string;

    public constructor (
        _proprietario: string,
        _nomeFantasia: string,
        _cnpj: string,) {

            this.proprietario = _proprietario;
            this.nomeFantasia = _nomeFantasia;
            this.cnpj = _cnpj


    }

    public getproprietario() {
        return this.proprietario;
    }

    public setproprietario(_proprietario: string) {
        this.proprietario = _proprietario;
    }

    public getnomeFantasia() {
        return this.nomeFantasia;
    }

    public setnomeFantasia(_nomeFantasia: string) {
        this.nomeFantasia = _nomeFantasia;
    }

    public getcnpj() {
        return this.cnpj;
    }

    public setcnpj(_cnpj: string) {
        this.cnpj = _cnpj;
    }

}
