var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var notify = new Schema({
    usuario: String,
    sub:String,
    fechaAlta:{type:Date,default:Date.now()},
    ultimoAcceso:Date
});


module.exports =  mongoose.model('notisubscribe', notify,'notisubscribe');