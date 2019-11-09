var nodemailer = require('nodemailer')
var config=require("../config")


function enviarEmail(destino,password){
// Definimos el transporter
var transporter = nodemailer.createTransport({
    service:"Gmail",
    auth: {
        user: config.EMAIL.email,
        pass: config.EMAIL.password
    }
   
})
// Definimos el email
var mailOptions = {
from: 'Remitente',
to: destino,
subject: 'Asunto',
text: `usuario: ${destino} <br> password ${password}`
}

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error)
     
    } else {
        console.log("Email sent")
     
    }
})

}

module.exports={

    enviarEmail
}

