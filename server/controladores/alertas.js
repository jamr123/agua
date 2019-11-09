const alerta = require('../modelos/alertas');
const servicio = require("../servicios/servicios");
const moment = require("moment");
const config = require("../config.js");
const axios = require('axios');

function agregar(req, res) {



    if (req.body.token != null && req.body.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.body.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {

                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",

                });

            } else {

                const alertaapp = new alerta({
                    usuario: payload.usuario,
                    dispositivo: req.body.data.dispositivo,
                    variable: req.body.data.variable,
                    valMax: req.body.data.valMax,
                    valMin: req.body.data.valMin,
                    act: req.body.data.act,
                });

                alertaapp.save((err) => {
                    if (err) console.log(`administrador error ${err}`);


                    res.status(200).send({
                        estado: "OK",
                        mensaje: `Alerta registrada correctamente`,
                    });

                });


            }




        } else {
            res.status(200).send({
                estado: "fail",
                mensaje: "fallo de seguridad",

            });
        }


    } else {

        res.status(200).send({
            estado: "fail",
            mensaje: "fallo de seguridad",

        });
    }
}

function eliminar(req, res) {


    if (req.query.token != null && req.query.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.query.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {
                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",
                });

            } else {

                alerta.deleteOne({
                    _id: req.query.data
                }, function (err) {
                    if (err) console.log(err);

                    res.status(200).send({
                        estado: "OK",
                        mensaje: `Aterta eliminada correctamente`,

                    });

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

function getAlertas(req, res) {



    if (req.query.token != null && req.query.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.query.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {

                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",

                });

            } else {

                alerta.find({
                    usuario: payload.usuario
                }, (err, respuesta) => {

                    if (err) console.log(`administrador error ${err}`);

                    if (respuesta != null) {

                        res.status(200).send({
                            estado: "OK",
                            mensaje: "alertasAll",
                            data: respuesta

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

function actualizar(req,res) {
    

if (req.body.token != null && req.body.token != undefined) {
    const payload = servicio.decodeTokenUsuario(req.body.token);
    if (payload != undefined) {

        if (moment().unix() > payload.exp) {

            res.status(200).send({
                estado: "fail",
                mensaje: "fallo de seguridad",

            });

        } else {

            alerta.findOne(req.body.data, function(err, respuesta) {
               
                   if(respuesta!=null)
                   {
                    respuesta.act = !req.body.data.act;
                    respuesta.save();
                    
                    res.status(200).send({
                        estado: "OK",
                        act:!req.body.data.act
                  
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


} else {

    res.status(200).send({
        estado: "fail",
        mensaje: "fallo de seguridad",

    });
}

}

module.exports = {
    agregar,
    eliminar,
    getAlertas,
    actualizar

}