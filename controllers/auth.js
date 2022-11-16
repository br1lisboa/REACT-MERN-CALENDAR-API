const { response } = require('express')
const { validationResult } = require('express-validator')

const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body

    //* Manejo de errores
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(201).json({
        ok: true,
        msg: 'Crear usuario',
        name, email, password
    })

}

const loginUsuario = (req, res = response) => {

    const { email, password } = req.body

    //* Manejo de errores
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.json({
        ok: true,
        msg: 'Login de usuario',
        email, password
    })

}

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