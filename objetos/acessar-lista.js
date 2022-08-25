const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])

//arrowfunction:  info: função callback 
chaves.forEach(info => console.log(cliente[info]))

//Quando tentamos acessar uma chave que não exite não da erro. 
//mostra que a chave esta undefined
//No C#  e Java acontece o erro.
console.log(cliente["conta"])