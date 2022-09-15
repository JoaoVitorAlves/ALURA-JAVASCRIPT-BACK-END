//DESAFIO - Fazendo depósitos
//Adicionando uma propriedade que permita "ações",
//para que os clientes que estão cadastrados consigam fazer
//operações bancárias.

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com",
    fones:["5528999093465","5528999088888"], 
    dependentes: [
        {
            nome:"Sara",
            parentesco:"filha",
            dataNasc:"13/09/2012" },
        {
            nome:"Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],
    saldo:100,

    depositar:function(valor)
    {
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)