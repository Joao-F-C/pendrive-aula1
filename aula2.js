//função sem retorno
function mensagem () {
    console.log('Olá, mundo')
}

mensagem()
//função com retorno
function soma (a,b) {
  return a+b
}
let resultado = soma(5,6)
console.log(resultado)

console.log(soma(5,5))

//função sem parâmetro
function cumprimentar(nome){
    let nome = 'Pedro'
    let nome = 'Ana'
    let nome = 'Joao'
    let idade=16
    console.log(`Olá, ${nome}, sua idade é ${idade}`)
  }
  mensagem()
  
  function mostrarHoralocal(){
    let hora = new Date()
    console.log(`Hora atual: ${hora.toLocaleTimeString()}`)
  }
  //função com parâmetro
  function cumprimenta(nome, idade){
    console.log(`Olá, ${nome}, sua idade é ${idade}`)
  cumprimentar('Ana',20)
  cumprimentar('Pedro',16)
  cumprimentar('Joao',17)

  }

  //função declarativa
mensagem()

function mensagem(){
  console.log('Olá, mundo')
}

//função de expressão

const mensagem1= function(){
    console.log('Olá, mundo')
}
mensagem1()

//função de seta sem parâmetro ARROW FUNCTION
const saudacao = () => 'Olá, turma'
saudacao()

//função de seta com parâmetro
const saudacao1 = (nome) => `Olá, ${nome}`
saudacao1('João')
//funao declarativa
let nome = 'Emily'
const altura = 1.40


function mensagem (){
  let nome1='lAÍS'
var idade1= 18
console.log(nome)
console.log(idade)
console.log(idade1)
console.log(nome1)
}

function testeVar (){
  if (true){
    let y=20
  }
  console.log(y)
}
testeLet()//y is not defined