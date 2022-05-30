const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

module.exports = (mongoose) => {
  const Usuario = new mongoose.model(
    "usuario",
    mongoose.Schema({
      nome: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      cep: {
        type: String,
        required: true,
      },
      logradouro: {
        type: String,
        required: true,
      },
      numero: {
        type: String,
        required: true,
      },
      complemento: { type: String, required: false },
      cpf: {
        type: String,
        required: true,
      },
      senha: {
        type: String,
        required: true,
      },
    })
  );
  return Usuario;
};
