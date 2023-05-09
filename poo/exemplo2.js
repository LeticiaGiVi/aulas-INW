let aviao={
    empresa : "latam",
    modelo : "ATR-72",
    velocidadeMaxima: 800,
    numDePassageiros : 74,
    ligado : false,
    velocidade : 0,
    ligar: function(){
        this.ligado = true
        console.log ("avião ligado..")
    } ,
    desligar: function(){
        this.ligado = false
        console.log ("avião desligado..")
    },
    acelerar: function(){
        console.log("velocidade atual " + this.velocidade)
        if(this.ligado && this.velocidade<this.velocidadeMaxima){
            this.velocidade= this.velocidade + 10
        }
        console.log("Acelerando..")
    },
    desacelerar: function(){
        console.log("velocidade atual " + this.velocidade)
        if(this.ligado && this.velocidade>0){
            this.velocidade= this.velocidade - 10
        }
        console.log("Desacelerando..")
    },
    decolar: function() {
        if(this.ligado & this.velocidade == 200){
            console.log("decolando....")
        }
    },
    pousar: function(){
        if(this.ligado & this.velocidade ==200){
            console.log("pousando....")
        }
    }
}


aviao.ligar();

for(let x=1;x<=20; x++){
    aviao.acelerar();
    console.log("velocidade atual : " + aviao.velocidade)
}

aviao.decolar();

for(let x=1;x<=60; x++){
    aviao.acelerar();
    console.log("velocidade atual : " + aviao.velocidade)
}

for(let x=1;x<=60; x++){
    aviao.desacelerar();
    console.log("velocidade atual : " + aviao.velocidade)
}

aviao.pousar();

for(let x=1;x<=20; x++){
    aviao.desacelerar();
    console.log("velocidade atual : " + aviao.velocidade)
}

aviao.desligar();
