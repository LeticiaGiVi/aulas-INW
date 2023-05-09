const leia = require('prompt-sync')()

let altura1 = leia("Digite a altura 1 : ");
let base1 =  leia("Digite a base 1 : ");
let area1;

let altura2 = leia("Digite a altura 2 : ");
let base2 =  leia("Digite a base 2 : ");
let area2;

area1 = base1*altura1;
area2 = base2*altura2;

console.log("A area do retangulo 1 é: " + area1);
console.log("A area do retangulo 2 é: " + area2);



