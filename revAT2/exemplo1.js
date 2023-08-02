// objeto é uma entidade estruturada, independente, usada em vetor
//para instalar o prompt-sync, npm i prompt-sync 
const Leia = require("prompt-sync")()
//vetor
let Nomes = []
Nomes[0]="Giovanna"
Nomes[1]=16
Nomes[10]={
    nome:"Vitório",
    idade:16
}

console.log(Nomes)
//vetor em uma posição especifica
console.log(Nomes[4])//posição vazia
console.log(Nomes[10])
//ver tamanho do vetor
console.log(Nomes.length)

