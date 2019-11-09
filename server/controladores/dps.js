const loginApp = require("../modelos/login.js");
const usuarioApp = require("../modelos/usuario.js");
const bcrypt = require("bcrypt-nodejs");
const servicio = require("../servicios/servicios");
const config = require("../config");
const moment = require("moment");

function dpslog(req, res) {
    var LOGIN=JSON.parse(req.body.data)
    console.log(LOGIN.usuario)
    
    loginApp.findOne({
        usuario: LOGIN.usuario
    }, (err, respuesta) => {

        if (respuesta != null) {

                bcrypt.compare(LOGIN.password, respuesta.password, function (err, resp) {

                    if (resp) {


                        res.status(200).send({
                            estado: "OK",
                            session: servicio.crearTokenUsuario({
                                usuario:respuesta.usuario
                            }),
                        });


                        

                    } else {
                        res.status(200).send({
                            estado: "fail",
                            mensaje: "Password Incorrecto",
                        })
                    }

                });
            
        } else {


            res.status(200).send({
                estado: "fail",
                mensaje: "Usuario no existe ",

            });
        }

    });


}




module.exports = {

    dpslog
}