const leia = require("prompt-sync")()

let  aluno1, aluno2
let nota1, nota2

aluno1 = leia("digite o nome do aluno 1: ")
nota1 = parseInt(leia("digite o nome do aluno 1: "))

if (nota1<5){
    console.log("Oi "+aluno1+" Você está de rec")
}
else{
    console.log("Oi "+aluno1+" Você foi aprovado")
}


aluno2 = leia("digite o nome do aluno 2: ")
nota2 = parseInt(leia("digite o nome do aluno 2: "))

if (nota2<5){
    console.log("Oi "+aluno2+" Você está de rec")
}
else{
    console.log("Oi "+aluno2+" Você foi aprovado")
}