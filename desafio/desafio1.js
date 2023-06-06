const leia= require("prompt-sync")()

let nome  = leia("digite seu nome agui: ")
let salario = parseFloat(leia("digite seu salário agui: "))
let imposto 


if(salario<=2500){
    console.log(nome + " você está isento do imposto ")
}
else if (salario<=5000){
    imposto = salario * 0.15
    console.log(nome +" por seu salario ser de "+ salario + "o imposto que você deve pagar é de " + imposto)
    console.log("seu salario liquido é de " + (salario-imposto))
}
else {
    imposto = salario * 0.25
    console.log(nome +" por seu salario ser de "+ salario + "o imposto que você deve pagar é de " + imposto)
    console.log("seu salario liquido é de " + (salario-imposto))
}
