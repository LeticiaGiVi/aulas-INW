class pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento
    }

    mostrarIdade(){
        console.log(2023-this.anoNascimento)
    }
}

class cliente extends pessoa{
    constructor(cpf,id){
        super(cpf);
        this.id = id
    }
    mostrarNome(){
    console.log("O nome é :"+this.nome)
    }
}

let cliente1 = new pessoa("111.222.333-55","Carlos",1994)
console.log(cliente1)
console.log(cliente1.nome)
console.log(cliente1.cpf)
cliente1.mostrarIdade()
console.log(cliente.id)

let cliente2 = new cliente("111.222.333-44",1)
cliente2.anoNascimento = 2000
cliente2.nome = "epaminondas"
console.log(cliente1)
console.log(cliente1.cpf)
cliente2.mostrarIdade()
console.log(cliente1)
console.log(cliente1.nome)
console.log(cliente2.cpf)
cliente2.mostrarNome()