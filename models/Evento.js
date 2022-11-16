const { Schema, model } = require('mongoose')

const EventSchema = Sechema({

    title: {
        type: String,
        require: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        require: true
    },
    end: {
        type: Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId, //*ESTO LE DICE A MONGOOSE QUE EL TYPE VA A SER UNA REFERENCIA, Y LA ESPECIFICAMOS ABAJO
        ref: 'Usuario' //* ESTE ES EL NOMBRE DEL OTRO SCHEMA
    }

})

module.exports = model('Evento', EventSchema)