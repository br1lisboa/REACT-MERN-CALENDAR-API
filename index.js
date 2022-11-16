const express = require('express')
require('dotenv').config()


//* CREANDO EL SERVIDOR DE EXPRESS
const app = express()


//* DIRECTORIO PUBLICO
app.use(express.static('public'))


//* LECTURA Y PARSEO DEL BODY
app.use(express.json())


//* RUTAS
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: Eventos 




//* ESCUCHAR PETICIONES
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})