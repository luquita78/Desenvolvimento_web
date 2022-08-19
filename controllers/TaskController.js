const Task = require("../models/Task");

const getAlltasks = async (req, res) => {
  try {
    const tasklist = await Task.find();
    return res.render("index", { tasklist, task: null, taskDelete: null });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);

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
      res.render("index", { task, taskDelete: null, tasklist });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", { task: null, taskDelete, tasklist });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = req.body;

    await Task.updateOne({ _id: req.params.id }, task);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = { getAlltasks, createTask, getTaskById, updateTask, deleteTask };
