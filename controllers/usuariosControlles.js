const UsuarioSchema = require("../models/usuarios");

const getAlluser = async (req, res) => {
  try {
    const userList = await UsuarioSchema.find();
    return res.render("index", {userList: userList});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createUser = async (req, res) => {
  const usuario = req.body;

  try {
    await UsuarioSchema.create(usuario);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAlluser,
  createUser,
};
