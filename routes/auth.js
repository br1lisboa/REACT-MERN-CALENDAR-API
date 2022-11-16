/* 
    Rutas de usuarios
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { crearUsuario, loginUsuario, renovarToken } = require('../controllers/auth')

const router = Router()

//* CREAR USUARIO
router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener minimo 6 caracteres').isLength({ min: 6 }),
], crearUsuario)

//* LOGIN
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener minimo 6 caracteres').isLength({ min: 6 }),
], loginUsuario)

//* RENEW TOKEN
router.get('/renew', renovarToken)

module.exports = router