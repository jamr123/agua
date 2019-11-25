var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var venta = new Schema({
    usuario: String,
    id:String,
    cantidad:String,
    precio:String,
    fecha:String,
    hora:String,
    
});

Ventas=mongoose.model('ventas', venta,'ventas');

module.exports =  {
    Ventas
}