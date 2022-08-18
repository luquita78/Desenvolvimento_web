const routes = require("express").Router();
const taskController = require("../controllers/TaskController")


routes.get("/", taskController.getAlltasks);
routes.post("/create", taskController.createTask);

module.exports = routes;