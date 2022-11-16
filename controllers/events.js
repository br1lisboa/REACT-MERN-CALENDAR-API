const { response, request } = require('express')
const Evento = require('../models/Evento')


//* OBTENER EVENTOS
const obtenerEventos = async (req, res = response) => {

    const eventos = await Evento.find()
        .populate('user', 'name')

    res.json({
        ok: true,
        msg: 'Eventos obtenidos',
        eventos
    })

}


//* CREAR EVENTO
const crearEvento = async (req = request, res = response) => {

    const evento = new Evento(req.body)

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
const modificarEventos = async (req, res = response) => {

    /*     const body = req.body */
    const { id } = req.params
    /* console.log(id) */

    try {

        const evento = await Evento.findById(id)

        if (!evento) {
            res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese ID'
            })
        }

        if (evento.user.toString() !== req.uid) {
            res.status(401).json({
                ok: false,
                msg: 'No tiene privilegios para editar este evento'
            })
        }

        const nuevoEvento = {
            ...req.body,
            user: req.uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(id, nuevoEvento, { new: true }) // Este ultimo parametro nos refrezca la peticion

        res.json({
            ok: true,
            msg: 'Evento modificado',
            evento: eventoActualizado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el evento, hable con el administrador'
        })
    }

}

//* ELIMINAR EVENTO
const eliminarEvento = async (req = request, res = response) => {

    const { id } = req.params

    try {

        const eventoEliminado = await Evento.findByIdAndDelete(id)

        if (!eventoEliminado) {
            res.status(404).json({
                ok: false,
                msg: 'No existe evento con ese ID para eliminar'
            })
        }

        if (eventoEliminado.user.toString() !== req.uid) {
            res.status(401).json({
                ok: false,
                msg: 'No tiene privilegios para eliminar este evento'
            })
        }

        res.json({
            ok: true,
            msg: 'Evento eliminado',
            evento: eventoEliminado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Fallo al eliminar el evento, hable con el administrador'
        })
    }

}

module.exports = {
    obtenerEventos,
    crearEvento,
    modificarEventos,
    eliminarEvento
}