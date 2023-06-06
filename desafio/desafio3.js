const leia = require("prompt-sync")()
let numero = parseInt(leia("digite um numero inteiro positivo:"))
let total = 0

for(let x=1; x<=numero; x++){
    if((x%2)==1){
    console.log(x)
    total += x
    }
}
console.log(total)