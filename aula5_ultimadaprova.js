//objetos

const estudante = {
    nome: "Vinicius",
    idade: 15,
    prontuário: 1234,
    turma: "Desenvolvimento web",
    bolsista: true,
    telefones: ["1234-56789", "9876-54321"]
/*  endereco:[{
        rua: "Nome da rua",
        numero: 500,
        bairro: "Santa cruz",
    },
    {
        rua: "Rua2",
        numero: "23B",
        bairro:"sabiá"
    }] */
}

console.log(typeof estudante) //object
console.log(estudante)

//acessando propriedades do objeto
console.log(estudante.telefones) //lista de telefones
console.log(estudante.telefone[1])
console.log(estudante['idade'])


/*estudante.endereco = {
    rua: "Nome da rua",
    numero: 15,
    bairro: "Santa cruz"
}
console.log(estudante.endereco.rua)

object keys: verifica se a propriedade existe
*/
const chaveObjeto= Object.keys(estudante)
console.log("", chaveObjeto) // retorna as propriedades como string

if(!chaveObjeto.includes("endereco")){  
    console.error("É necessário ter um endereço cadastrado")
}

