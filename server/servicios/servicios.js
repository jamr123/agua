'use strict'
//const jwt=require("jwt-simple");
const moment = require("moment");
const config = require("../config");

const jwt = require('jwt-simple-error-identify').jwt;
const ExpiredToken = require('jwt-simple-error-identify').ExpiredToken; //the error
const InvalidAlgorithm = require('jwt-simple-error-identify').InvalidAlgorithm; //the error


function crearTokenUsuario(usuario) {


    const payload = {

        usuario: usuario.usuario,
        role: usuario.role,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }
    return jwt.encode(payload, config.SECRET_TOKEN_AUTH);

}

function decodeTokenUsuario(token) {
    try {
        let payload = jwt.decode(token, config.SECRET_TOKEN_AUTH)

        return payload
    } catch (err) {

        if (err instanceof ExpiredToken) {
            return undefined
        }
        if (err instanceof InvalidAlgorithm) {
            return undefined
        }
    }

}



module.exports = {

    crearTokenUsuario,
    decodeTokenUsuario
}