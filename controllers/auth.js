const { response } = require('express')

// * CONTROLADOR CREARUSUARIO
const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body

    res.status(201).json({
        ok: true,
        msg: 'Crear usuario',
        name, email, password
    })

}

// * CONTROLADOR LOGIN
const loginUsuario = (req, res = response) => {

    const { email, password } = req.body

    res.json({
        ok: true,
        msg: 'Login de usuario',
        email, password
    })

}

// * CONTROLADOR RENOVAR TOKEN
const renovarToken = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'Renovar token'
    })

}

module.exports = {
    crearUsuario,
    loginUsuario,
    renovarToken
}