const leia= require("prompt-sync")()

let nome  = leia("digite seu nome agui: ")
nascimento = parseInt(leia("digite o ano em que voce nasceu: "))
let idade = 2023 - nascimento

if (idade<=3){
    console.log("não atendemos bebes")
}
else if (idade<=13){
    console.log(nome+" faixa infantil")
}
else if (idade<=17){
    console.log(nome+" faixa adolecente")
}
else if (idade<=65){
    console.log(nome+" faixa adulto")
}
else {
    console.log("não atendemos idosos")
}