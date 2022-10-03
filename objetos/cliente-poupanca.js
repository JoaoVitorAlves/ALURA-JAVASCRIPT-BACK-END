/*
Desafio - Cliente poupança.
Aproveitaro o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupanças.
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

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    //Esta herdando todos os atributos da função cliente.
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("Juliana", "12345678999", "ju@email.com", 100, 300)

ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

ju.depositarPoup(30)

console.log(ju.saldoPoup)