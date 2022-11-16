const { response, request } = require('express')


//* OBTENER EVENTOS
const obtenerEventos = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'Eventos obtenidos'
    })

}


//* CREAR EVENTO
const crearEvento = (req = request, res = response) => {

    const body = req.body

    res.json({
        ok: true,
        msg: 'Evento creado',
        body
    })

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