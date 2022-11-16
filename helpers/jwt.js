const jwt = require('jsonwebtoken')

// ESTA fn RECIBE LO QUE QUIERO COLOCAR EN EL JWT
const generarJWT = (uid, name) => {

    // Hacer esta fn como un Promise nos permite hacer un await en los controladores
    return new Promise((resolve, reject) => {

        const payload = { uid, name }

        // Esta fn recibe 3 argumentos, el payload, la llave secreta que uso para firmar mis tokens, y le pusimos un valor de expiracion
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (err, token) => {

            if (err) {
                console.log(err)
                reject('No se pudo generar el token')
            }

            resolve(token)
        })

    })


}

module.exports = {
    generarJWT
}