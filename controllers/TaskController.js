const Task = require("../models/Task");

let message = "";
let type = "";

const getAlltasks = async (req, res) => {
  try {
    setTimeout(()=>{
      message = ""
    },1000);
    const tasklist = await Task.find();
    return res.render("index", {
      tasklist,
      task: null,
      taskDelete: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    message = "Insira um texto para inserir uma tarefa!";
    type = "danger";
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    message = "Tarefa criada com sucesso!";
    type = "sucess";
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    const tasklist = await Task.find();
    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", { task, taskDelete: null, tasklist, message, type });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", { task: null, taskDelete, tasklist, message, type });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = req.body;

    await Task.updateOne({ _id: req.params.id }, task);
    message = "Tarefa atualizada com sucesso!";
    type = "sucess";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    message = "Tarefa deletada com sucesso!";
    type = "sucess";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const taskCheck = async (req, res) => {
try {
  const task = await Task.findOne({_id: req.params.id});

  if(task.check){
    task.check = false;
  }else{
    task.check = true;
  }
  
  await Task.updateOne({_id: req.params.id},task);
  res.redirect("/");
} catch (err) {
  res.status(500).send({ error: err.message });
}
};

module.exports = {
  getAlltasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  taskCheck
};
