const leia= require("prompt-sync")()

let matriculas = ["MAT01","MAT02","MAT03","MAT04"]
let alunos = ["Marcos","Pedro","Maria","Paulo"]
let notas = [0,0,0,0]
let situacao  

for(let x=0; x<4; x++){
    console.log(matriculas[x]+"\t"+alunos[x])
    notas[x]=parseFloat(leia("Coloque a nota do aluno"))
}

console.log("codigo\tproduto\tpreço")
console.log("______________________________________________")
for(let x=0; x<4; x++){
    console.log(matriculas[x]+"\t"+alunos[x]+"\t"+notas[x])
}
console.log("______________________________________________")

console.log("alteração de dados")

let matricula = leia("digite a matricula do aluno que voce deseja trocar a nota: ")
for(let x=0; x<4; x++){
    if(matricula==matriculas[x]){
    console.log("nota atual do aluno "+alunos[x]+" : "+notas[x])
    notas[x] = leia("digite a nova nota: ")
    }
}

console.log("matricula\taluno\tnota")
console.log("______________________________________________")
for(let x=0; x<4; x++){
    console.log(matriculas[x]+"\t"+alunos[x]+"\t"+notas[x])
}
console.log("______________________________________________")

// for(let x=0; x<4; x++){
//     if(notas[x]<=5){
//     console.log("o aluno "+alunos[x]+"ficou de rec com nota "+notas[x])
//     }
//     else{
//         console.log("o aluno "+alunos[x]+"ficou de passou com nota "+notas[x])
//     }
// }

for(let x=0; x<matriculas.length; x++){
    if(notas[x]>5){
        situacao = "aprovado"
    }
    else{
        situacao = "reprovado"
    }
    console.log(matriculas[x]+"\t"+alunos[x]+"\t"+notas[x]+"\t"+situacao)
}



