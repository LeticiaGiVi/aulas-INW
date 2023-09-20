/* serão informados a nota e o nome do aluno, nota de tarefa e nota da prova
se o aluno não imformar a nota da prova vai direto a recuperação,
a nota inicial de todos os alunos  nas tarefas é 5,
se a média de tarefa+prova for menor ou igual a 6, mostra o nome do aluno,
media e manda a recuperação
se a media for superior, informar o nome, a media e que está aprovado*/

const notas=(nome,AC=5,AT)=>{
    if(AT === undefined){
        console.log(`${nome} você foi reprovado(a), sua prova está zerada`)
    }
    else if(((AT+AC)/2)<=6){
    
            console.log(`${nome} sua média foi ${(AT+AC)/2}, e você foi reprovado`)
    }
    else{
        console.log(`${nome} sua média foi ${(AT+AC)/2}, e você foi Aprovado`)
    }
}

notas("Evaristo")
notas("Evandro",7,4)
notas("Eduarda",5,8)