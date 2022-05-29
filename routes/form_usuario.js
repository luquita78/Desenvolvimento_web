var router = require('express').Router()

/*Exibindo formulario de cadastro de usuario*/

router.get('/',(req, res) => {
    return res.render('form_usuario');
});

module.exports = router;