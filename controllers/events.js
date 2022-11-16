const { response, request } = require('express')

const obtenerEventos = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'Eventos obtenidos'
    })

}

const crearEvento = (req = request, res = response) => {

    const body = req.body

    res.json({
        ok: true,
        msg: 'Evento creado',
        body
    })

}

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