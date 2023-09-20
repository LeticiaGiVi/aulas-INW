//calcular imposto de renda

/* fazer uma função que recebe um valor, esse valor corresponde ao salario
função retorna informação ao usuário baseado em critérios:
Se o valor for menor ou igual a 1.500 retorna 0 ou isento;
se o valor for maior que 1500 e menor que 2500 calcular 15% e retornar;
se o valor for maior que 2500 calcular 25% e retonar.

exibir na tela
no casos de isento a frase "Seu salario [valor], e voce é isento"
nos outros casos
"Seu salario [valor], o imposto é de [imposto] e seu  salario final é [valor-imposto]" */

const impostoDeRenda = (salario)=>{
    if(salario<=1500){
        return 0;
    }
    else if(salario>1500 && salario<2500){
    return salario*0.15;
    }
    else{
        return salario*0.25;
    }
}
    let salario = 2501;

    if(impostoDeRenda(salario) == 0){
        console.log(`Seu salario ${salario}, e voce é isento`)
    }
    else{
        console.log(`Seu salario ${salario}, o imposto é de ${impostoDeRenda(salario)} e seu  salario final é: `, (salario-impostoDeRenda(salario)))
    } 
