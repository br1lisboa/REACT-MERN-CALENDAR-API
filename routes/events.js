const { Router } = require("express");
const { obtenerEventos, modificarEventos, eliminarEvento, crearEvento } = require("../controllers/events");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router()


//* Obtener eventos
router.get('/', validarJWT, obtenerEventos)

//* Crear evento
router.post('/', validarJWT, crearEvento)

//* Actualizar evento
router.put('/:id', validarJWT, modificarEventos)

//* Borrar evento
router.delete('/:id', validarJWT, eliminarEvento)

module.exports = router
