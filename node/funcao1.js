//criação da função
function escreverNoConsole(){
    console.log("Escrevendo no console")
}

//Execução da função
escreverNoConsole();

const textoNoConsole = function(){
    console.log('Outra forma de criar uma função')
}
textoNoConsole();

const textoPorParametro = function(texto){
    console.log(`O valor do parâmetro é: ${texto}`)
}
textoPorParametro('Terceiro exemplo')

const textoUsandoArrow = (texto)=> console.log(texto)

textoUsandoArrow("Quarto exemplo usando arrow function ")