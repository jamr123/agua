const webpush = require("web-push");
const subscripcion=require("../modelos/notificaciones");
const servicio = require("../servicios/servicios");
const moment = require("moment");

const publicVapidKey = "BDoQeJFcxz8Js-P3-ghvVv5OEssDK4WWWecAIP53PGzNw7ZEN93ZuwaejgiUQyVG1HBB3T4XeflH5ILi9t6JTc0";
const privateVapidKey = "m2ZVn1Z2lubyHDW5A3LoCw3tOa8hSKVzgyW7WfAsduw";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

function subscribe(req, res) {

  if (req.body.token != null && req.body.token != undefined) {
    const payload = servicio.decodeTokenUsuario(req.body.token);
    if (payload != undefined) {

      if (moment().unix() > payload.exp) {

        res.status(200).send({
          estado: "fail",
          mensaje: "fallo de seguridad",

        });

      } else {

            
        subscripcion.findOne({
          usuario: payload.usuario,
          sub:req.body.data
      }, (err, respuesta) => {

            if(respuesta==null){

              const subs= new subscripcion({
                usuario: payload.usuario,
                sub: req.body.data,
                });

            subs.save((err) => {
              if (err) console.log(`administrador error ${err}`);
                  res.status(200).send({
                    estado: "OK",
              
                  });
              });

            }
            else{
              res.status(200).send({
                estado: "OK",
          
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

function deleteNot(req,res){

  
  if (req.query.token != null && req.query.token != undefined) {
    const payload = servicio.decodeTokenUsuario(req.query.token);
    if (payload != undefined) {

        if (moment().unix() > payload.exp) {
            res.status(200).send({
                estado: "fail",
                mensaje: "fallo de seguridad",
            });

        } else {

          subscripcion.deleteOne({
                usuario: payload.usuario,
                sub:req.query.data
            }, function (err) {
                if (err) console.log(err);

                res.status(200).send({
                    estado: "OK",
                    mensaje: `A`,

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

function mess(titulo, usuario,mensaje) {

  subscripcion.find({
    usuario: usuario
}, (err, respuesta) => {
    if (err) console.log(`administrador error ${err}`);
    

    if (respuesta != null) {

      
       for(var j in respuesta){

        const payload = JSON.stringify({ title: titulo,body:mensaje,icon:"https://i.ibb.co/52c8bLN/logo-ie.png"});
      
        webpush
        .sendNotification(JSON.parse(respuesta[j].sub), payload)
        .catch(err => console.error(err));
       
       }
      
      


    } else {
        
    }

});




}


module.exports = {

  subscribe,
  mess,
  deleteNot
}