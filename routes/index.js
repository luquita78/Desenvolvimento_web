const router = require('express').Router();
const cadastroUsers = require('./form_usuario');
const login = require('./login');
const homeControllers = require("../controllers/homeControllers")


router.get('/', homeControllers.getAll)

router.use('/cadastro', cadastroUsers);
router.use('/login', login);


module.exports = router;