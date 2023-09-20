function somaDois(numero1, numero2){
    return (numero1 + numero2); // return não mostra o resultado, somente executa
}
console.log("O resultado da soma é",somaDois(5,7))
somaDois(5,7)

const parImpar = (numero)=>{
    if(numero<0){
        return"negativo"
    }
    else if (numero==0){
        return"Zero"
    }
    else if((numero%2)==0){
        return "Par"
    }
    else{
        return "impar"
    }
}

console.log(parImpar(2))
console.log(parImpar(5))
console.log(parImpar(-5))
console.log(parImpar(0)) 

