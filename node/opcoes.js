function nomeComIdade(nome, idade){
    if (idade === undefined){
        console.log("seu nome é", nome)
    }
    else{
        console.log(`O seu nome é ${nome} e você tem ${idade} anos`)
    }
}

// nomeComIdade("Epaminondas")
// nomeComIdade("carla",18)
// nomeComIdade(18)

function reprtirFrase(frase,n=5){
    for(let x=1;x<=n;x++){
        console.log(frase+" "+x)
    }
}

reprtirFrase("JOIA",6)