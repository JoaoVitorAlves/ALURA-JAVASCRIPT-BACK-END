//DESAFIO - Puxando relatório 
//Percorrer um objeto e extrair informações básicas do
//cliente em um formato mais legível e de forma
//automatizada para fornecer a outros departamentos do banco.

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

let relatorio = "";

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    }else {
        relatorio += ` 
        ${info} ==> ${cliente[info]}
        `
    }
    
}

console.log(relatorio)
