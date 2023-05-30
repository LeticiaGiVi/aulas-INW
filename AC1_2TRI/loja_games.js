class Games{
    constructor(id,descricao,ativo,estoque,preco,lançamento,aparCompativeis){
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque  = estoque;
        this.preco = preco;
        this.lançamento = lançamento;
        this.aparCompativeis = aparCompativeis 
    }

    ativar(){
        this.ativo = true;
    }
    RetirarEstoque(quantidade){
        if(this.ativo){
            if (quantidade<0){
                console.log("impossivel realizar, quantidade negativa")
            }
            else if(quantidade==0){
                console.log("impossivel realizar, quantidade zerada")
            }
            else if (quantidade>this.estoque){
                console.log("impossivel realizar, quantidade insuficiente do produto")
            }
            else{
                this.estoque -= quantidade   
                console.log("o valor da compra foi:" + (quantidade*this.preco))
            }
        }
        else{
            console.log("imposivel realizar, conta inativa")
        }

    }
    IncluirEstoque(quantidade){
        if(this.ativo){
            if (quantidade<0){
                console.log("impossivel realizar, quantidade negativa")
            }

            else if(quantidade==0){
                console.log("impossivel realizar, quantidade zerada")
            }
            else if (quantidade>10){
                console.log("a quantidade maxima é 10")
            }

            else{
                this.estoque += quantidade
            }
        }
        else{
            console.log("imposivel realizar, conta inativa")
        }
    }
}


// programa principal 
const leia = require("prompt-sync")()
console.log("BPS Games")
console.log("Compre melhor e mais barato")
continuar=leia("continuar? S/N ")
if(continuar=="N" || continuar=="n"){
    console.log("Até breve ")
}
else {
    console.log("BPS Games")
    console.log("Compre melhor e mais barato")
    console.log("cadatro inicial do produto ")

 let id = parseInt(leia ("coloque o codigo do produto: "))
 let descricao = leia("digite a descrição do produto: ")
 let preco = parseFloat(leia("coloque o preço do produto: "))
 let lancamento = leia("coloque a data de lançamento do jogo")
 let aparCompativeis = leia("coloque quais dispositivos são compativeis com o jogo: ")
 let p1 = new Games(id,descricao,true,10,preco,lancamento,aparCompativeis)
 console.log("produto cadastrado")


for (let x=1;x<=5; x++){
        console.log ("venda: " + x)
        console.log("produto:" + p1.id)
        console.log("estoque restante "+ p1.estoque)
        let quantidade = 0

        quantidade = parseInt(leia("digite a quantidade do produto que você deseja retirar : "))
         p1.RetirarEstoque(quantidade)

    }

quantidade = parseInt(leia("digite a quantidade do produto que você deseja colocar : "))
p1.IncluirEstoque(quantidade)
console.log("estoque atual "+ p1.estoque)
}    
