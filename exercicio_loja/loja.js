const leia= require("prompt-sync")()

let codigos = ["GRP0X-01","GRP0X-02","GRP0X-03","GRP0X-04","GRP0X-05","GRP0X-06","GRP0X-07","GRP0X-08","GRP0X-09","GRP0X-10"]
let produtos = ["boné      ","calça       ","bermuda afro","bata      ","camisa afro","saia rodada","saia style","macacão      ","camiseta temática","calça social afro"]
let valor = [100,150,90,140,150,90,90,150,100,90.5]
let estoque = [10,10,10,10,10,10,10,10,10,10]
let carrinho = [0,0]


console.log("nome")
console.log("slogan")
console.log("produto\tpreço\testoque")
for(let x=0; x<=codigos.length; x++){
    console.log(produtos[x]+"\t"+valor[x]+"\t"+estoque[x])
}


let compras = leia("Deseja fazer compras? S/N: ")


if (compras=="s" || compras=="S"){

    console.log("nome")
    console.log("slogan")
    console.log("codigo\tproduto\tpreço\testoque")
    for(let x=0; x<codigos.length; x++){
        console.log(codigos[x]+"\t"+produtos[x]+"\t"+valor[x]+"\t"+estoque[x])
    }
    let codigo = leia("Digite o codigo do produto que você deseja comprar : ")

    let comprando = 1
    do{
        for(let i=0; i<codigos.length; i++){
            if(codigo == codigos[i]){
                let q = 0
                console.log(codigos[i]+"\t"+produtos[i]+"\t"+valor[i]+"\t"+estoque[i])
                let qntdd=parseInt(leia("digite a quantidade nessessaria: "))
                if(qntdd<= estoque[i]){
                    estoque=estoque-qntdd
                    carrinho[q] = qntdd
                    q++
                    comprando ++
                }
                else{
                    console.log("codigo invalido")
                }
            }
        }

    } while(comprando<=2)
}
else{
    console.log("Até breve!")
}

