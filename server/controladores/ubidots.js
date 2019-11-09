const ubidotsApp = require("../modelos/ubidots.js");
const servicio = require("../servicios/servicios");
const bcrypt = require("bcrypt-nodejs");
const moment = require("moment");
const config = require("../config.js");

function getUbidata(req,res){

    
    if (req.query.token != null && req.query.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.query.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {
                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",
                });

            } else {

                ubidotsApp.findOne({
                    usuario: payload.usuario
                }, (err, respuesta) => {
                    if (err) console.log(`administrador error ${err}`);

                    if (respuesta != null) {


                        res.status(200).send({
                            estado: "OK",
                            mensaje: "data",
                            data:respuesta.dataUbi

                        });



                    } else {
                        res.status(200).send({
                            estado: "fail",
                            mensaje: "fallo de seguridad",

                        });


                    }

                });


            }


        } else {
            res.status(200).send({
                estado: "fail",
                mensaje: "fallo de seguridad",

            });
        }
    }

}



module.exports = {
    getUbidata,

}