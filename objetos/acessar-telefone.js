const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com",
    fones: ["5528999093465","5528999088888"]
}

//importante acessa os arrays com foreach
//foreach: para cada fone ele vai imprimir;
cliente.fones.forEach(fone => console.log(fone))