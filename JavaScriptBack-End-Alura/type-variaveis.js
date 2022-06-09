//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area);
//var area;

//Por seguração usar sempre o let no bloco de código.

//let altura = 5;
//let comprimento = 7;
//let forma = 'retângulo';
//let area;

//if (forma === 'retângulo') {
//    area = altura * comprimento;
//}
//else {
//    area = (altura * comprimento) / 2;
//}

//console.log(area);

//const são variaveis que vão sempre possui o mesmo valor que nunca vão ser alterados.

//Boa pratica de programação usar let e const
//let: Quando eu sei que o valor da varivel vai mudar
//const: Sempre possui o mesmo valor que nunca vão ser alterado.
const forma = "quadrado";
const altura = 5;
const comprimento = 7;
let area;


if (forma === "triangulo") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
console.log(area);
