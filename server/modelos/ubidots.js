var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dataUbidots = new Schema({
    usuario: String,
    apikey:String,
    token:String,
    dataUbi:String,
    fechaAlta:{type:Date,default:Date.now()},
    ultimoAcceso:Date
});


module.exports =  mongoose.model('ubidots', dataUbidots ,'ubidots');