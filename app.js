const express = require("express");
const path = require('path');


const app = express();



app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

app.get("/", function(req,res){
    res.sendFile(__dirname +"/views/index.html")
})

app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081/ ")
});
