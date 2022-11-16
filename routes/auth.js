/* 
    Rutas de usuarios
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { crearUsuario, loginUsuario, renovarToken } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

//* CREAR USUARIO
router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener minimo 6 caracteres').isLength({ min: 6 }),
    validarCampos
], crearUsuario)

//* LOGIN
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener minimo 6 caracteres').isLength({ min: 6 }),
    validarCampos
], loginUsuario)

//* RENEW TOKEN
router.get('/renew', validarJWT, renovarToken)

module.exports = router