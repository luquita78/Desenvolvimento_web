const router = require('express').Router();

/*Exibindo formulario de cadastro de usuario*/

router.get('/',(req, res) => {
    return res.render('tela_login');
});

module.exports = router;