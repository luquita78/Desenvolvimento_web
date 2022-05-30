const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const router = require("./routes/index");
const connectionDb = require("./database/db")

connectionDb();
const app = express();
app.use(router)


/*
const db = mongoose.connection;
db.on("error", (error)=> console.error(error));
db.once("open", ()=>console.log("Conectado ao banco de dados"));
*/


//app.set('views', path.join(__dirname, '/views'));
app.set('view engine','html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'static')));



/*
app.get("/cadastro", function(req,res){
    res.sendFile(__dirname +"/views/formulario_usuario.html")
});

app.get("/login", function(req,res){
    res.sendFile(__dirname +"/views/tela_login.html")
});*/

app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081/ ")
});
