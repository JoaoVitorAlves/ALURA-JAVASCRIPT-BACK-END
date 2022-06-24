//Função normal
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// Arrow function
// Ela não pode ser nomeada
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (n1, n2) => n1 + n2;


// Arrow function com mais de uma linha de instrução
//Se precisar usar mais de uma linha ter que utilizar às chaves {} e o return

const somaNumerosPequenos = (n1, n2) => {
    if (n1 > 10 || n2 > 10) {
        return 'somente números de 1 a 9';
    } else {
        return n1 + n2;
    }
}

console.log(somaNumerosPequenos(1, 1));

// Hoisting: arrow function se comporta com expressão