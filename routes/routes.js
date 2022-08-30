const routes = require("express").Router();
const taskController = require("../controllers/TaskController")


routes.get("/", taskController.getAlltasks);
routes.post("/create", taskController.createTask);
routes.get("/getById/:id/:method",taskController.getTaskById);
routes.post("/update/:id", taskController.updateTask);
routes.get("/deleteTask/:id",taskController.deleteTask);
routes.get("/check/:id",taskController.taskCheck);
module.exports = routes;