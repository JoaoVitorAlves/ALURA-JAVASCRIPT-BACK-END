//Desafio - Compondo um objeto
//Adicionar dependentes para um dos clientes
//cadastrados, com nome, idade e parentesco.

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com",
    fones:["5528999093465","5528999088888"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"13/09/2023"
}

console.log(cliente)

//Alterando valor de um objeto
cliente.dependentes.nome = "Sara Silva"

console.log(cliente)