let idade = 10
let altura = 1.60
let nome='João'
//let serve pra declarar uma variável (que pode ser de qualquer tipo)

/* console.log() comando booleano, devolve apenas um entre dos valores.
 EX: True or False */
let booleano= true
console.log(booleano)

console.log("Minha idade é: "+ idade)
console.log(`Meu nome é: ${nome}`)

// conversão de tipos
console.log("2"+"4")
//conversao explícita
console.log( parseInt("2") + parseInt("4"))
//conversao implícita
console.log("10"/"2")

let cliente= true
console.log(typeof cliente)

//variaveis
const nomee= "Pedro"

//operações aritmeticas

let soma = 10 + 20
let subtração = 6-2
let multiplicação = 2*4
let divisao = 14/7
console.log(soma)
console.log(subtração)
console.log(multiplicação)
console.log(divisao)

//operadores lógicos e condições
// &&=and ||= or
if (soma>1 || subtração>10) {
    console.log("verdadeiro")
}else {
    console.log(`falso`)
}