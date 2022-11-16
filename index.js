const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./databse/config')
require('dotenv').config()


//* CREANDO EL SERVIDOR DE EXPRESS
const app = express()

//* CONEXION BASE DE DATOS
dbConnection()

//* CORS
app.use(cors())

//* DIRECTORIO PUBLICO
app.use(express.static('public'))


//* LECTURA Y PARSEO DEL BODY
app.use(express.json())


//* RUTAS
app.use('/api/auth', require('./routes/auth'))
app.use('/api/event', require('./routes/events'))


// TODO: CRUD: Eventos 




//* ESCUCHAR PETICIONES
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${process.env.PORT}`)
})