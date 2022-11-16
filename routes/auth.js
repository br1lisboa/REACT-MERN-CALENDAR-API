/* 
    Rutas de usuarios
    host + /api/auth
*/

const { Router } = require('express')
const { crearUsuario, loginUsuario, renovarToken } = require('../controllers/auth')

const router = Router()

//* CREAR USUARIO
router.post('/new', crearUsuario)

//* LOGIN
router.post('/', loginUsuario)

//* RENEW TOKEN
router.get('/renew', renovarToken)

module.exports = router