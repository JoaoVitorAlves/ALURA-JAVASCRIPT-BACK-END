//Parâmetros de função

function soma(n1, n2) {
    return n1 + n2;
}

//console.log(soma(50, 25))
//console.log(soma(5, 2))
//console.log(soma(-500, 2))

//Parâmetros x Argumentos

//function nomeIdade(nome, idade) {
//  return `Meu ${nome}, minha idade é: ${idade}`;
//}


function mutiplicacao(n1 = 1, n2 = 1) {
    return n1 * n2;
}

console.log(mutiplicacao(soma(4, 5)))

