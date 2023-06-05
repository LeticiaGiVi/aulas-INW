console.log("nome\tnota\tturma")
console.log("pedro\t10\t2MIB")
console.log("paulo\t09\t2MIB")
console.log("carla\t10\t2MIB")


let nome = "pedro"
let valor1 = 10
let valor2 = 20
let valor3 = valor1+valor2
console.log("oi meu amigo(a) " + nome.toLowerCase())
console.log("a soma dos dois valores é: " +(valor1+valor2))


const leia = require("prompt-sync")()
let numero1, numero2 = 0
numero1 = parseInt(leia("digite o primeiro numero: "))
numero2 = parseInt(leia("digite o segundo numero: "))
console.log("a soma de "+numero1+" e "+numero2+" é "+(numero1+numero2))
