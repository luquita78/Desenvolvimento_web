const Task = require("../models/Task");


const getAlltasks = async (req, res) =>{
    try {
        const tasklist = await Task.find();
        return res.render("index", {tasklist});
    } catch (err) {
        res.status(500).send({error: err.message});
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

module.exports = {getAlltasks,createTask};
