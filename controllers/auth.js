const { response } = require('express')


const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body

    res.json({
        ok: true,
        msg: 'Crear usuario',
        name, email, password
    })

}

const loginUsuario = (req, res = response) => {

    const { email, password } = req.body

    res.json({
        ok: true,
        msg: 'Login de usuario',
        email, password
    })

}

const renovarToken = (req, res = repsonse) => {

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