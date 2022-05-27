const router = require('express').Router();

const loginRouter = require('./login.js');
const cadastroRouter = require('./form_usuario.js');

router.get('/', (req, res) =>{
    return res.render('index');
})

router.use('/login', loginRouter);
router.us('/cadastro', cadastroRouter);

module.exports = router;