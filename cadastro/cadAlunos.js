// requisitando o pacote mongoose
const mongoose = require('mongoose');

//criar a chave de conexão
mongoose.connect('mongodb://127.0.0.1:27017/escola',
{useNewUrlParser : true,
 useUnifiedTopology : true,
 serverSelectionTimeoutMS : 10000});

 //executando a conexão
 const db = mongoose.connection;

 db.on('error', console.error.bind(console, 'connection error'));
 
 db.once('open', function(){
     console.log(" Estamos conectados no mongoDB");
 });

//segunda - fase - usando o banco 
//criando um schema

 const alunoSchema = new mongoose.Schema({
    matricula: String,
    nome: String,
    idade : Number,
    turma : String
})

//criando model
const  Alunos = mongoose.model("alunos", alunoSchema);

//colocar dados dentro da collection
const Carlos = new Alunos({
    matricula: "rm501",
    nome: "Carlos Silva",
    idade : 17,
    turma : "2MIB"
})

const Otto = new Alunos({
    matricula: "rm1001",
    nome: "Otto Oliveira",
    idade : 15,
    turma : "1MIB"
})

Carlos.save();
Otto.save();