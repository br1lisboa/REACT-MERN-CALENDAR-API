const { Schema, model } = require('mongoose')


//* MODELO DE USUARIO PARA MONGO
const UsuarioSchema = Schema({

    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true
    }

})

module.exports = model('Usuario', UsuarioSchema)