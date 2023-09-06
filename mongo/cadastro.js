const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/livros',
    {useNewUrlParser : true,
     UseUnifiedTopology : true,
     serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function(){
    console.log(" Estamos logados no mongoDB");
});

const produtoSchema = new mongoose.Schema({
    descricao: String,
    ano: Number,
    valor : Number,
    estoque : Number
})

const  produto = mongoose.model("produto", produtoSchema);

const radio = new produto({
    descricao:'Coleção Caindo na Real Olá. Espero que alguém esteja ouvindo. Estou enviando esse sinal via rádio num pedido sombrio e desesperado de socorro. As coisas na Universe City não são o que parecem ser. Não posso contar quem sou. Por favor, me chame... por favor me chame apenas de Rádio. Rádio Silêncio. ..',
    ano: 2016,
    valor : 36,
    estoque : 28
})

const heartstopper = new produto({
    descricao:'Heartstopper é um romance gráfico britânico de drama adolescente escrito e ilustrado por Alice Oseman. A webcomic foi adaptada na série homônima dirigida por Euros Lyn e lançada em 2022, a série é um original da Netflix e até o momento tem 2 temporadas, e mais uma confirmada.',
    ano: 2016,
    valor : 45,
    estoque : 42
})

radio.save();
heartstopper.save();