//criar a promise dentro de uma função 
// quando se usa "function" é uam função declarada, quando se usa "=>" é uma função anonima 

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}
// chamada da função
falarDepoisDe(3, "Oi turma 2MIB")
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))