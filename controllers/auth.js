const { response } = require('express')
const bcrypt = require('bcryptjs')
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

        // ENCRIPTAMOS LA CONTRASEÑA
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password, salt)

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
const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body

    try {

        // VALIDAMOS QUE EL CORREO NO EXISTA EN NUESTRA DB
        const usuario = await Usuario.findOne({ email })
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            })
        }

        // CONFIRMAR EL PASSWORD
        const validPassword = bcrypt.compareSync(password, usuario.password)

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }

        // SI TODO SALE BIEN, GENERAMOS NUESTRO JSON WEB TOKEN

        res.json({
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