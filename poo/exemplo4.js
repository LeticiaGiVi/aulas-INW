class retangulo{
    constructor(altura,base){
        this.altura = altura;
        this.base = base
    }
    mostrarArea(){
        console.log("Area do retangulo é : "+(this.altura*this.base))
    }
}

const leia = require('prompt-sync')()
let base1 = leia("digite a base 1 : ")
let altura1 = leia("digite a altura 1 : ")
let base2 = leia("digite a base 2 : ")
let altura2 = leia("digite a altura 2 : ")


let objeto1 = new retangulo(altura1,base1);
let objeto2 = new retangulo(altura2,base2);


objeto2.mostrarArea();
objeto1.mostrarArea();