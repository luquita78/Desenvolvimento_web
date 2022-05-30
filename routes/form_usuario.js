const router = require('express').Router();
var usuariosController = require("../controllers/usuariosControlles")

/*Exibindo formulario de cadastro de usuario*/

router.get('/',(req, res) => {
    return res.render('formulario_usuario');
});

router.post('/create', usuariosController.create);

module.exports = router;