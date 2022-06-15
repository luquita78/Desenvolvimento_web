const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const router = require("./routes/index");
const connectionDb = require("./database/db")

connectionDb();
const app = express();
app.use(router)



app.set('view engine','html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'static')));


app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081/ ")
});
