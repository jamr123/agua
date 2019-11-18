const loginApp = require("../modelos/login.js");
const usuarioApp = require("../modelos/usuario.js");
const bcrypt = require("bcrypt-nodejs");
const servicio = require("../servicios/servicios");
const config = require("../config");
const moment = require("moment");
const dps=require("../modelos/dps");

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


function agregar(req,res){
    if (req.body.token != null && req.body.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.body.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {

                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",

                });

            } else {

                if(req.body.data.tipo=="vending1"){
                    agregarVending1(req,res);
                }



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

function allDps(req,res){
    dpss=dps.Vending1;
       
    if (req.query.token != null && req.query.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.query.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {

                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",

                });

            } else {

                dpss.find({ }, (err, respuesta) => {
                  
                    if (err) console.log(`administrador error ${err}`);

                    if (respuesta != null) {

                        res.status(200).send({
                            estado: "OK",
                            mensaje: "deviceAll",
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


function modificar(){


}

function eliminar(req,res){
    dpss=dps.Vending1;
     
    if (req.query.token != null && req.query.token != undefined) {
        const payload = servicio.decodeTokenUsuario(req.query.token);
        if (payload != undefined) {

            if (moment().unix() > payload.exp) {
                res.status(200).send({
                    estado: "fail",
                    mensaje: "fallo de seguridad",
                });

            } else {
              
                dpss.findOne({
                    id: req.query.data
                }, (err, respuesta) => {
                    if (err) console.log(`administrador error ${err}`);
                    
                    if (respuesta == null) {

                        res.status(200).send({
                            estado: "OK",
                            mensaje: `El Dps ${req.query.data} No Existe`,

                        });



                    } else {
                        

                        dpss.deleteOne({id:req.query.data}, function (err) {
                            if (err) console.log(err);
                           
                            res.status(200).send({
                                estado: "OK",
                                mensaje: `El Dps ${req.query.data} Ha Sido Eliminado`,
    
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
    }




}

function dpsReg(req,res){
    
   var DATA=req.body;
     
    if(DATA.tipo=="vending1"){

        if(DATA.mode=="login"){
            logVending1(res,DATA)
        }
        if(DATA.mode=="venta"){
            ventaVending1(res,DATA)
        }

    }
    

}

function logVending1(res,DATA){
dpss=dps.Vending1;
    
    loginApp.findOne({
        usuario: DATA.usuario
    }, (err, respuesta) => {

        if (respuesta != null) {

                bcrypt.compare(DATA.password, respuesta.password, function (err, resp) {

                    if (resp) {
                         
                        dpss.findOne({id:DATA.id}, (err, respuesta) => {
                  
                            if (err) console.log(`administrador error ${err}`);
        
                            if (respuesta != null) {
                                console.log(respuesta);
                                res.status(200).send({
                                    estado: "OK",
                                    act:respuesta.act,
                                    l1:respuesta.lts1,
                                    l2:respuesta.lts2,
                                    l3:respuesta.lts3,
                                    c1:respuesta.cts1,
                                    c2:respuesta.cts2,
                                    c3:respuesta.cts3,
                                });
        
        
                            } else {
                                res.status(200).send({
                                    estado: "fail",
                                    mensaje: "fallo de seguridad",
        
                                });
        
        
                            }
        
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

function ventaVending1(req,res,DATA){
    dpss=dps.Vending1;

    res.status(200).send({
        estado: "OK"
    });
}

function agregarVending1(req,res){
   dpss=dps.Vending1;

    dpss.findOne({id:req.body.data.id},(err,respuesta)=>{

        if (respuesta != null) {

            res.status(200).send({
                estado: "OK",
                mensaje: `Dispositivo ${req.body.data.id} ya existe registrado en el sistema`

            });

        } else {
             
            const dpsA=new dpss({

                usuario:req.body.data.usuario,
                id:req.body.data.id,
                tipo:req.body.data.tipo,
                act:req.body.data.act,
                lts1:"0",
                lts2:"0",
                lts3:"0",
                cts1:"0",
                cts2:"0",
                cts3:"0",
                dist:"0",
                alert:"0"
            });

            dpsA.save((err) => {
                if (err) console.log(`administrador error ${err}`);

                res.status(200).send({
                    estado: "OK",
                    mensaje: `Dispositivo ${req.body.data.id} registrado correctamente`,

                });


            });


         
        }

    });

}



module.exports = {

    dpslog,
    agregar,
    allDps,
    eliminar,
    dpsReg
}