const routes = require("express").Router();
const usuarioControllers = require("../controllers/usuariosControlles");
const homeControllers = require("../controllers/homeController");

routes.get("/", homeControllers.getAll);
routes.get("/", usuarioControllers.getAlluser);
routes.post("/create", usuarioControllers.createUser);


module.exports = routes;
