const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');

mongoose.connect('mongodb://127.0.0.1:27017/loja',
{useNewUrlParser : true,
 useUnifiedTopology : true,
 serverSelectionTimeoutMS : 10000});

 //define o schema do projeto vindo do csv

 const produtoSchema = new mongoose.Schema({
    codigo : String,
    descricao : String,
    valor : Number,
    estoque : Number,
 })

 //criar model a partie do schma
 const produto = mongoose.model("produtos", produtoSchema)

 //criar função usando o fs para ler dados
 function lerCSVSalvarNoMongo(){
    const resultados = [];

    fs.createReadStream('exemplo - base.csv')
    .pipe(csv()) //trasforma em objeto
    .on('data', (dados)=>{
        resultados.push(dados)
    })
    .on('end', ()=>{
        produto.insertMany(resultados)
        .then(()=>{
            console.log("Dados inseridos com sucesso")
            mongoose.connection.close();
        })
        .catch((error)=>{
            console.error("Erro ao importar dados", error)
            mongoose.connection.close();
        })
    })
 }

lerCSVSalvarNoMongo();