export class PessoaFisica {

    private nome: string;
    private cpf: string;

    public constructor (
        _nome: string,
        _cpf: string,) {
            this.nome = _nome;
            this.cpf = _cpf;
    }
        public getnome() {
                return this.nome;
            }
        
        public setnome(_nome: string) {
                this.nome = _nome;
            }
        
        public getcpf() {
                return this.cpf;
            }
        
        public setcpf(_cpf: string) {
                this.cpf = _cpf;
            }

}