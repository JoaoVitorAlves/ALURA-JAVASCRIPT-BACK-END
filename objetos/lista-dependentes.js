//DESAFIO - Listas de dependentes
// Verificar a melhor forma de agregar a informação
// de um novo dependente ao objeto Cliente.

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com",
    fones:["5528999093465","5528999088888"], 
    dependentes: [{
        nome:"Sara",
        parentesco:"filha",
        dataNasc:"13/09/2012"
    }]

}

//Adicionando um novo dependente ao array.
cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

//console.log(cliente)

//Como saber trazer o filho mais novo?
const filhaMaisNova = cliente.dependentes.filter
   (
    dependente => 
    dependente.dataNasc === "04/01/2014"
)

console.log(filhaMaisNova[0].nome)