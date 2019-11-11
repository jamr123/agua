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

function modificar(){


}

function eliminar(){


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
                act:req.body.data.act
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
    agregar
}