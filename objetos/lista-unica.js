//DESAFIO - Lista de dependentes
//Extrair de uma listagem de clientes apenas as
//informações de dependentes e montar uma lista única,
//para análise de outros departamentos do banco

const clientes = [
    {
        nome: "Andre",
        cpf: "12345678912",
        dependentes: [
            {
                nome:"Sara",
                parentesco:"filha",
                dataNasc:"13/09/2012" 
            }, 
            {
                nome:"Samia Maria",
                parentesco: "filha",
                dataNasc: "04/01/2014"
            }],
        },
        {
            nome: "Juliana",
            cpf: "12588952225",
            dependentes: [
                {
                    nome:"Sophia",
                    parentesco:"filha",
                    dataNasc:"30/08/2020" 
                }]
            }
    ]

//Usando ... os dados vão esta espalhados.
//Pode se usar também o consele.table() para imprimir em formato de tabela.
    const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

    console.table(listaDependentes)
    console.log(listaDependentes)