let carro ={
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2018,
    preco: 45000,
    motor:{
        cilindradas: 1.4,
        potencia: 100
    },
    acelerar:function(){
        console.log("acelerando...")
    }
};

carro.acelerar()

console.log("Tempo de fabricação:" + (2023-carro.ano))

let pessoa ={
    nome: "Claudio",
    sobrenome: "florindo",
    AnoNascimento: 2004, 
    CPF: "111.111.333-09",
    mostraIdade: function() {
        console.log("sua idade é "+ (2023 - this.AnoNascimento))
    }
};

console.log(pessoa.nome.toUpperCase())

//mostrar idade de uma pessoa
pessoa.mostraIdade()




