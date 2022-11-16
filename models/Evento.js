const { Schema, model } = require('mongoose')

const EventSchema = Schema({

    title: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, //*ESTO LE DICE A MONGOOSE QUE EL TYPE VA A SER UNA REFERENCIA, Y LA ESPECIFICAMOS ABAJO
        ref: 'Usuario', //* ESTE ES EL NOMBRE DEL OTRO SCHEMA
        required: true
    }

})

module.exports = model('Evento', EventSchema)