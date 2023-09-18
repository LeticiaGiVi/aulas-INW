const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/agenda',
{useNewUrlParser : true,
 useUnifiedTopology : true,
 serverSelectionTimeoutMS : 10000});


 const db = mongoose.connection;

 db.on('error', console.error.bind(console, 'connection error'));
 
 db.once('open', function(){
     console.log(" Estamos conectados no mongoDB");
 });



 const contatoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    idade : Number,
    email : String
})


const  contato = mongoose.model("contatos", contatoSchema);


const Epaminondas = new contato({
    id: 1,
    nome: "Epaminondas",
    idade : 17,
    email : "epa@gmail.com"
})

const Carla = new contato({
    id: 1,
    nome: "Carla",
    idade : 18,
    email : "carla@gmail.com"
})

Epaminondas.save();
Carla.save();
