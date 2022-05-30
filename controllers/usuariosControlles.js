const { request } = require("express");
const connectionDb = require("../database/db");
const Usuario = connectionDb.Usuario;

exports.create = (req, res) => {
  if (!req.body.cpf) {
    response.status(400).send({ message: "Campo cpf não pode estar vazio!" });
    return;
  }
  // Cria instância Modelo para usuario
  const istanceUsuario = new Usuario({
    nome: request.body.nome,
    email: request.body.email,
    cep: request.body.cep,
    logradouro: request.body.logradouro,
    numero: request.body.numero,
    complemento: request.body.complemento,
    cpf: request.body.cpf,
    senha: request.body.senha,
  });
  // Insere o usuario no Banco de Dados
  livroInstance
    .save(istanceUsuario)
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.status(500).send({
        message:
          err.message || "Erro durante o processo de inclusão dos dados.",
      });
    });
};
