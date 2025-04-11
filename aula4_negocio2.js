//adicionar nota
const notas = [10, 6, 8]
//adiciona um item ao final do array
notas.push(9)
console.log(notas)
// deleta o último item do array
notas.pop()
console.log(notas)

//adiciona um item no inicio do array
notas.unshift('morango')
console.log(notas)

// deleta o primeiro item do array
notas.shift()
console.log(notas)

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara']


//slice: dividindo uma lista em outras duas de tamanhos iguais

const ListadeEstudantes = ['João', 'Juliana', 'Ana', 'Carlos', 'Lara', 'Aline', 'Guilherme', 'carlos', 'Paula', 'Renata']

console.log(ListadeEstudantes)

const sala1 = ListadeEstudantes.slice(0, ListadeEstudantes.lenght/2)
const sala2 = ListadeEstudantes.slice(ListadeEstudantes.lenght/2)
console.log(sala1)
console.log(sala2)

//slice(inicio, qtd para deletar, elemento a ser adicionado
const lista2 = ['João', 'Juliana', 'Ana', 'Caio', 'Lara']
lista2.splice(2,2, 'Rodrigo')
console.log(lista2)

// concatenar listas/arrays
const sala3s = ['Evandro', 'Camila', 'Maria']
const salaPython = ['Juliana', 'Leonardo', 'Raquel']

const salasUnidas =sala3s.concat(salaPython)
console.log(salasUnidas)

//listas de listas
const alunos = ['Evandro', 'Camila', 'Maria', 'Gabriel']
const media = [10, 5, 6, 8, 9]
const lista = [alunos, media]

console.log(`A aluna na posição 1 é: ${lista[0][1]}
     e sua média é: ${lista[1][1]}`)
     