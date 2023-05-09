class Animal {
    constructor(especie,peso,porte,anoNascimento){
        this.especie = especie;
        this.peso = peso;
        this.porte = porte;
        this.anoNascimento = anoNascimento
    }

    fazBarulho(){
        console.log("fazendo barulho...")
    }
    voltaIdade(){
        return (2023 - this.anoNascimento)
    }
}

class Gato extends Animal{
    constructor(especie,cor,raca){
        super(especie)
        this.cor = cor;
        this.raca = raca
    }
    
    miar(){
        console.log("Miaaauuuuu....")
    }
}

//programa pricncipal
let bicho1 = new Animal("tigre",200,"grande",2000)
let bicho2 = new Animal("galinha",2,"pequeno",2022)
let bicho3 = new Gato("felino","preto","persa")

console.log(bicho1.especie)
bicho1.fazBarulho()
console.log(bicho1.voltaIdade(2023))
console.log(bicho3.especie)
bicho3.fazBarulho()
bicho3.miar()
bicho3.anoNascimento = 2020
console.log(bicho3.voltaIdade(2023))