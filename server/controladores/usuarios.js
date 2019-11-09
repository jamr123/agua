const usuarioApp = require("../modelos/usuario.js");
const alerta=require('../modelos/alertas');
const subscripcion=require("../modelos/notificaciones");
const loginApp = require("../modelos/login.js");
const ubidotsApp = require("../modelos/ubidots.js");
const servicio = require("../servicios/servicios");
const bcrypt = require("bcrypt-nodejs");
const moment = require("moment");
const config = require("../config.js");
const axios = require('axios');

function getUsuario(req, res) {

    if (req.query.token != null && req.query.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.query.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {
                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",
                });

            } else {

                usuarioApp.findOne({
                    usuario: payload.usuario
                }, (err, respuesta) => {
                    if (err) console.log(`administrador error ${err}`);

                    if (respuesta != null) {

                        res.status(200).send({
                            estado: "OK",
                            mensaje: "Bienvenido",
                            nombre: respuesta.nombre,
                            direccion: respuesta.direccion,
                            telefono: respuesta.telefono

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

function postUsuario(req, res) {
   


    if (req.body.token != null && req.body.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.body.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {

                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",

                });

            } else {


                usuarioApp.findOne({
                    usuario: req.body.usuario
                }, (err, respuesta) => {

                    if (respuesta != null) {

                        res.status(200).send({
                            estado: "Existe",
                            mensaje: `Usuario ${req.body.usuario} ya existe registrado en el sistema`,

                        });



                    } else {

                        const userApp = new usuarioApp({
                            usuario: req.body.usuario,
                            nombre: req.body.nombre,
                            telefono: req.body.telefono,
                            direccion: req.body.direccion,
                        });

                        userApp.save((err) => {
                            if (err) console.log(`administrador error ${err}`);

                            bcrypt.genSalt(10, (err, salt) => {
                                if (err) return err
                                bcrypt.hash(req.body.password, salt, null, (err, hash) => {


                                    const userlogin = new loginApp({
                                        usuario: req.body.usuario,
                                        password: hash,
                                        role: req.body.role
                                    });


                                    userlogin.save((err) => {
                                        if (err) console.log(`administrador error ${err}`)

                                        res.status(200).send({
                                            estado: "OK",
                                            mensaje: `Usuario ${req.body.usuario} registrado correctamente`,
                
                                        });

                                    });


                                });


                            });


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

function getUsuarios(req,res){

    
    if (req.query.token != null && req.query.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.query.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {

                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",

                });

            } else {

                usuarioApp.find({ }, (err, respuesta) => {
                  
                    if (err) console.log(`administrador error ${err}`);

                    if (respuesta != null) {

                        res.status(200).send({
                            estado: "OK",
                            mensaje: "usuarriosAll",
                            data:respuesta

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
function putUsuario(req,res){

}

function deleteUsuario(req,res){

     
    if (req.query.token != null && req.query.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.query.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {
                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",
                });

            } else {

                usuarioApp.findOne({
                    usuario: req.query.data
                }, (err, respuesta) => {
                    if (err) console.log(`administrador error ${err}`);
                    
                    if (respuesta == null) {

                        res.status(200).send({
                            estado: "OK",
                            mensaje: `El Usuario ${req.query.data} No Existe`,

                        });



                    } else {
                        
                       if(config.ADMISTRADOR.usuario==req.query.data){

                        res.status(200).send({
                            estado: "OK",
                            mensaje: `El Usuario ${req.query.data} No Puede Ser Eliminado`,

                        });


                       }else{

                        usuarioApp.deleteOne({usuario:req.query.data}, function (err) {
                            if (err) console.log(err);
                           
                            loginApp.deleteOne({usuario:req.query.data}, function (err) {
                                if (err) console.log(err);
                                
                                noti(req,res);

                              });

                          });




                       }

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

function userAdmin() {

    usuarioApp.findOne({
        usuario: config.ADMISTRADOR.usuario
    }, (err, respuesta) => {

        if (respuesta == null) {

            const userApp = new usuarioApp({
                usuario: config.ADMISTRADOR.usuario,
                nombre: config.ADMISTRADOR.nombre,
                telefono: config.ADMISTRADOR.telefono,
                direccion: config.ADMISTRADOR.direccion,
            });

            userApp.save((err) => {
                if (err) console.log(`administrador error ${err}`);

                bcrypt.genSalt(10, (err, salt) => {
                    if (err) return err
                    bcrypt.hash(config.ADMISTRADOR.password, salt, null, (err, hash) => {


                        const userlogin = new loginApp({
                            usuario: config.ADMISTRADOR.usuario,
                            password: hash,
                            role: config.ADMISTRADOR.role
                        });


                        userlogin.save((err) => {
                            if (err) console.log(`administrador error ${err}`);

                            console.log("ADMISTRADOR CONFIGURADO");

                        });


                    });

                });
            });


        } else {

            console.log("ADMISTRADOR YA CONFIGURADO");

        }

    });


}


function noti(req,res){
 
   subscripcion.deleteMany({usuario:req.query.data}, function (err) {
        if (err) console.log(err);
        
        res.status(200).send({
            estado: "OK",
            mensaje: `El Usuario ${req.query.data} Se Ha Eliminado`,

        });

      }); 


    }





module.exports = {
    getUsuario,
    getUsuarios,
    putUsuario,
    postUsuario,
    deleteUsuario,
    userAdmin

}
