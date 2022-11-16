const { response, request } = require('express')
const Evento = require('../models/Evento')


//* OBTENER EVENTOS
const obtenerEventos = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'Eventos obtenidos'
    })

}


//* CREAR EVENTO
const crearEvento = async (req = request, res = response) => {

    const evento = new Evento(req.body)
    console.log(evento)

    try {

        evento.user = req.uid
        const eventoGuardado = await evento.save()

        res.status(201).json({
            ok: true,
            msg: 'Evento creado',
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Error al grabar en la base de datos."
        })
    }


}

//* ACTUALIZAR EVENTO
const modificarEventos = (req, res = response) => {

    const body = req.body
    const { id } = req.params

    res.json({
        ok: true,
        msg: 'Evento modificado',
        body,
        id
    })

}

//* ELIMINAR EVENTO
const eliminarEvento = (req = request, res = response) => {

    const { id } = req.params

    res.json({
        ok: true,
        msg: 'Evento eliminado',
        id
    })

}

module.exports = {
    obtenerEventos,
    crearEvento,
    modificarEventos,
    eliminarEvento
}