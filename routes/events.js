/* 
    EVENT ROUTES
    /api/event
*/

const { Router } = require("express");
const { obtenerEventos, modificarEventos, eliminarEvento, crearEvento } = require("../controllers/events");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require('express-validator');
const { isDate } = require("../helpers/isDate");

const router = Router()

// ELevamos un nivel este middle que usamos en todos los endpoints
router.use(validarJWT)

//* Obtener eventos
router.get('/', obtenerEventos)

//* Crear evento
router.post('/', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatoria').custom(isDate),
    check('end', 'La fecha de finalizacion es obligatoria').custom(isDate),
    validarCampos
], crearEvento)

//* Actualizar evento
router.put('/:id', modificarEventos)

//* Borrar evento
router.delete('/:id', eliminarEvento)

module.exports = router
