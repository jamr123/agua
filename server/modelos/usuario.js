var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dataUsuarios = new Schema({
    usuario: String,
    nombre:String,
    telefono:String,
    direccion:String,
    fechaAlta:{type:Date,default:Date.now()},
    ultimoAcceso:Date
});


module.exports =  mongoose.model('users', dataUsuarios,'users');