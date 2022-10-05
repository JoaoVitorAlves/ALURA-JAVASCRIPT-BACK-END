/*const livro = {
    nome: "React Native",
    editora: "Casa do Código",
    paginas: 185,
    anunciar: function () {
        console.log("A Alura indica o livro " + this.nome + "!")
    }
}

livro.anunciar()

//////////////////////////////////////////////////////
//Function

const Livro = function (nome, editora, paginas) {
    gNome = nome,
        gEditora = editora,
        gPaginas = paginas

    this.getNome = function () {
        return gNome
    }
    this.getEditora = function () {
        return gEditora
    }
    this.getPaginas = function () {
        return gPaginas
    }
}

const GraphQl = new Livro("GraphQl", "Casa do Código", 143)

console.log(GraphQl.getNome())
console.log(GraphQl.getEditora())
console.log(GraphQl.getPaginas())

*/

///////////////////////////////////////////////////////////////
//Classe

class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo() {
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

//const NodeJS = new Livro("Primeiros passos com NodeJS",
//    "Casa do Código", 195)
//NodeJS.anunciarTitulo()
//NodeJS.descreverTitulo()

//console.log(typeof Livro)

class LivroColecao extends Livro() {
    constructor(nome, nomeColecao) {
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}


const LogicaDeProgramacao = new LivroColecao("Logica de Programação", "Comece a Programar")
LogicaDeProgramacao.descreverColecao()