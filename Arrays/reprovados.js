//Depois de calcular a média dos alunos,
//precisamos mostrar quem está reprovado
//entre os alunos:
//"Ana","Marcos","Maria","Mauro"
//7,4.5,8,7.5
//_ : quando parametro tem é porque ele é opcional

const nomes = ["Ana", "Marcos", "Maria", "Mauro"];

const notas = [7, 4.5, 8, 7.5];


const reprovados = nomes.filter((_aluno, indece) => notas[indece] < 5)

console.log(`reprovados : ${reprovados}`);
