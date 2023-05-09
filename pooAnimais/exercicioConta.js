class conta{
    constructor(numero,saldo,ativa){
            this.numero = numero;
            this.saldo = saldo;
            this.ativa = ativa
    }

    credito(valor){
        this.saldo = this.saldo+valor;
        //console.log("seu saldo atual é: " + this.saldo)
    }
    debito(valor){
        if(valor<0){
            console.log("impossivel fazer, numero negativo...")
        }
        else if (this.saldo<valor){
            console.log("impossivel fazer, saldo indisponivel... ")

        }
        else{
            this.saldo = this.saldo - valor
            //console.log("seu saldo atual é :" + this.saldo)
        }
    }
}

//programa principal

let c1 = new conta(14,0,true)

console.log("Saldo atual conta: "+ c1.saldo)
c1.credito(100)
console.log("Saldo atual conta: "+ c1.saldo)
c1.debito(50)
console.log("Saldo atual conta: "+ c1.saldo)
c1.debito(60)
console.log("Saldo atual conta: "+ c1.saldo)