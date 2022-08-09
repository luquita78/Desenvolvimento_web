const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  cep: {
    type: String,
    // required: true,
  },
  logradouro: {
    type: String,
    // required: true,
  },
  numero: {
    type: String,
    // required: true,
  },
  complemento: {
    type: String,
    // required: false,
  },
  cpf: {
    type: String,
    // required: true,
  },
  senha: {
    type: String,
    // required: true,
  }
});

var usuarios = [{usuarios: UsuarioSchema}];

module.exports = mongoose.model("UsuarioSchema", UsuarioSchema), usuarios;
