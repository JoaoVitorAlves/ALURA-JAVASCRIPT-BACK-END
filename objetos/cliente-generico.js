/*
DESAFIO - Cliente genérico
Gerar uma função que permita a criação de novos clientes a partir de um modelo.
*/
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

const andre = new Cliente("Andre", "12345688899", "andre@email.com", 100)

console.log(andre);