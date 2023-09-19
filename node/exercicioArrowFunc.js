const analise = (numero)=> {
        if ((numero/2)==0){
            console.log(numero,'par')
        }
        else{
            console.log(numero,"impar")
        }
        if(numero<0){
            console.log("negativo");
        }
       else if(numero==0){
        console.log ("zero");
       }
       else{
        console.log("positivo")
       }
}

analise(50)


// ou 

/*
const exemploProf = (texto)=> {
    if(texto<0){
        console.log(texto,"negativo");
    }
   else if(texto==0){
    console.log (texto,"zero");
   }
   else if ((texto/2)==0){
    console.log(texto,'par')
    }
    else {
        console.log(texto,"impar")
    }

}

exemploProf(-3)
*/

function escreverLinha(tamanho=80){
    let linha
    for(let x=1; x<=tamanho; x++){
        linha = linha + "-"
    }
    console.log(linha)
}
escreverLinha(80)