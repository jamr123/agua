var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var vending1 = new Schema({
    usuario: String,
    id:String,
    tipo:String,
    lts1:String,
    lts2:String,
    lts3:String,
    cts1:String,
    cts2:String,
    cts3:String,
    act:String,
    alert:String,
    dist:String
});

Vending=mongoose.model('dps', vending1,'dps');

module.exports =  {
    Vending
}