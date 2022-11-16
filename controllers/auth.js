const { response } = require('express')
const Usuario = require('../models/Usuario')

// * CONTROLADOR CREAR USUARIO
const crearUsuario = async (req, res = response) => {

    const { email, password } = req.body
    try {

        // VALIDAMOS QUE EL CORREO NO EXISTA EN NUESTRA DB
        let usuario = await Usuario.findOne({ email })
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese correo'
            })
        }

        // PASADA LA VALIDACION INSTANCIAMOS EL MODEL CON LOS DATOS DEL BODY
        usuario = new Usuario(req.body)

        await usuario.save()

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

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