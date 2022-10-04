class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const andre = new Cliente("Andre", "andre@email.com", "11455899922", 100)

andre.exibirSaldo()

andre.depositar(5000)

console.log(andre)