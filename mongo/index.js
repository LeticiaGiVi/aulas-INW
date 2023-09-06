//mongodb://localhost:27017

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo',
    {useNewUrlParser : true,
     UseUnifiedTopology : true,
     serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function(){
    console.log(" Estamos logados no mongoDB");
});

const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
})

const  pessoa = mongoose.model("Pessoa", pessoaSchema);

const marcos = new pessoa({
    nome : 'Marcos',
    idade : 25,
    profissao : 'programador'
})

const silvia = new pessoa({
     nome : 'silvia',
     idade : 19,
     profissao : 'estagiaria'
 })

console.log(marcos.nome)
console.log(marcos.idade)
console.log(marcos.profissao)

marcos.save();
silvia.save();