var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var alertas = new Schema({
    usuario: String,
    dispositivo:String,
    variable:String,
    valMax:String,
    valMin:String,
    act:Boolean,
    fechaAlta:{type:Date,default:Date.now()},
    ultimoAcceso:Date
});


module.exports =  mongoose.model('alertas', alertas ,'alertas');