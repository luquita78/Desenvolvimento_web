const express = require("express");
const path = require('path');
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://Lucas:ssd030497@projetodw.psodxye.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    
});

const db = mongoose.connection;
db.on("error", (error)=> console.error(error));
db.once("open", ()=>console.log("Conectado ao banco de dados"));

const app = express();



app.use(express.json());

app.use(express.static(path.join(__dirname, 'static')));

app.get("/", function(req,res){
    res.sendFile(__dirname +"/views/index.html")
});

app.get("/cadastro", function(req,res){
    res.sendFile(__dirname +"/views/formulario_usuario.html")
});

app.get("/login", function(req,res){
    res.sendFile(__dirname +"/views/tela_login.html")
});

app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081/ ")
});
