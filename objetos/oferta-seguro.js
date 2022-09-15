//DESAFIO - Oferta de seguro
//Percorrer um objeto, verificar se existe a chave
//`dependentes` e, caso existia, enviar uma mensagem de
//oferta de seguro

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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
//includes:ele verifica possui a informação no array.
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}
//Pode se utilizar objetos do Javascript para Objetos de Arrays:
//key: printa as chaves, values: printa os valores  e entries:tras o array com varios arrauys dentro dele. 
oferecerSeguro(cliente)