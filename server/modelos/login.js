var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var loginUsuario = new Schema({
    usuario: String,
    password:String,
    role:String
});


module.exports =  mongoose.model('login', loginUsuario,'login');

