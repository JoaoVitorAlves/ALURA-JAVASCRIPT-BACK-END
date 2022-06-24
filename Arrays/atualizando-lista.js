const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//listaDeChamada.splice(1, 2, 'Rodrigo')
listaDeChamada.splice(2, 0, 'Rodrigo')
//splice: você pode utilizar idicando o elemento que vai ser retirado 
//igual no exemplo que esta começando no numero 1 e termina no numero 2, e a o terceiro parametro indica qual 
//nome você pode esta passado
//Se não quiser tirar um elemento do array, pode se utilizar o 0 no segundo paramentro 

console.log(`Lista de chamada: ${listaDeChamada}`)