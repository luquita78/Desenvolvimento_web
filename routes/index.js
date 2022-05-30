const router = require('express').Router();
const cadastroUsers = require('./form_usuario');
const login = require('./login');
const taskControllers = require("../controllers/taskControllers")


router.get('/', taskControllers.getAll)

router.use('/cadastro', cadastroUsers);
router.use('/login', login);


module.exports = router;