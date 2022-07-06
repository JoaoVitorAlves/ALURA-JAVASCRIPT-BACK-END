//Precisamos padronizar a lista de alunos para conter
//apenas letras maiúsculas
//['ana Julia', 'Caio vinicius', 'Bia silva']

let nomes = ["ana Julia", "Caio vinicius", "Bia silva"];


const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);