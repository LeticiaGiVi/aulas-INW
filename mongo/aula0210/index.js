
//1-configuração do acesso
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/escola", {
    useNewUrlParser : true,
     UseUnifiedTopology : true,
     serverSelectionTimeoutMS : 10000});

const db =  mongoose.connection;

db.on('error', console.error.bind(console, "falha na conexão"))

db.once("open", ()=>{
    console.log("conectado com sucesso")
});

//2 - criando schema 
const alunoSchema = new mongoose.Schema({
    nome:String,
    idade:Number,
    turma:String
});
//criando model
const Alunos = mongoose.model('Alunos',alunoSchema)
//4 -cadastrando variaveis

Alunos.insertMany([
    {nome:"Paulo", idade: 16, turma:"Turma1"},
    {nome:"Maria", idade: 15, turma:"Turma2"},
    {nome:"Marcos", idade: 17, turma:"Turma1"}
])

async function findAlunos(){
    try{
        const alunos = await Alunos.find({});
        console.log("Alunos : ", alunos)
    }
    catch(error){
        console.error("alunos não encontrados : ",error)
    }
}
findAlunos();