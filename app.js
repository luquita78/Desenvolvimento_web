 const express = require("express");
 const path = require("path");
 const routes = require("./routes/routes")
 const connectionDb = require("./database/db")

 const app = express();
 const port = 3000;
 connectionDb();
 
 app.set("view engine", "ejs");
 app.use(express.static(path.join(__dirname,"static")));
 app.use(express.urlencoded())
 app.use(routes);

 
 app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
