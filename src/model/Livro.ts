export class Livro {

    private titulo: string;
    private editora: string;
    private autor: string;

    public constructor (
        _titulo: string,
        _editora: string,
        _data_nascimento: Date,
        _autor: string,
        _endereco: string,
        _email: string,
        _altura: number,
        _peso: number,) {

            this.titulo = _titulo;
            this.editora = _editora;
            this.autor = _autor

    }

    public gettitulo() {
        return this.titulo;
    }

    public settitulo(_titulo: string) {
        this.titulo = _titulo;
    }

    public geteditora() {
        return this.editora;
    }

    public seteditora(_editora: string) {
        this.editora = _editora;
    }

    public getautor() {
        return this.autor;
    }

    public setautor(_autor: string) {
        this.autor = _autor;
    }

}
