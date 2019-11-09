const loginApp = require("../modelos/login.js");
const usuarioApp = require("../modelos/usuario.js");
const bcrypt = require("bcrypt-nodejs");
const servicio = require("../servicios/servicios");
const config = require("../config");
const moment = require("moment");



function login(req, res) {
    loginApp.findOne({
        usuario: req.body.usuario
    }, (err, respuesta) => {


        if (respuesta != null) {

            


                bcrypt.compare(req.body.password, respuesta.password, function (err, resp) {

                    if (resp) {
                        res.status(200).send({
                            estado: "OK",
                            mensaje: "Bienvenido",
                            role: respuesta.role,
                            session: servicio.crearTokenUsuario({
                                usuario:respuesta.usuario,
                                role:respuesta.role
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

function session(req, res) {
    if (req.body.token != null && req.body.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.body.token);
        if(payload!=undefined){
            
           if(moment().unix()>payload.exp){

            res.status(200).send({
                estado: "fail",
                mensaje: "fallo de seguridad",

            });

           }else{

            res.status(200).send({
                estado: "OK",
                mensaje: "Bienvenido",
                role: payload.role,
                session: servicio.crearTokenUsuario({
                    usuario:payload.usuario,
                    role:payload.role

                }),
            });

           }


        }else{
            res.status(200).send({
                estado: "fail",
                mensaje: "fallo de seguridad",

            });
        }
    }


}



module.exports = {

    login,
    session
}