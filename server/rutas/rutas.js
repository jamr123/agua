'use strict'

const express = require('express');
const api = express.Router();
const controladorlogin = require('../controladores/login');
const usuarios = require('../controladores/usuarios');
const ubi=require('../controladores/ubidots');
const subscribe=require('../controladores/pushNoti');
const alertas=require('../controladores/alertas');
const socket=require('../controladores/socketio');
const dps=require('../controladores/dps');
///////rutas--login//////
api.post('/login', controladorlogin.login);
api.post('/session', controladorlogin.session);

api.get('/usuarios',usuarios.getUsuario);
api.get('/usuariosAll',usuarios.getUsuarios);
api.post('/usuarios',usuarios.postUsuario);
api.put('/usuarios',usuarios.putUsuario);
api.delete('/usuarios',usuarios.deleteUsuario);

api.get('/ubidots',ubi.getUbidata);

api.post('/alertas',alertas.agregar);
api.get('/alertas',alertas.getAlertas);
api.delete('/alertas',alertas.eliminar);
api.put('/alertas',alertas.actualizar);

api.get('/socket',socket.getSocket);

api.post('/subscribe',subscribe.subscribe );
api.delete('/subscribe',subscribe.deleteNot );

api.post('/dps', dps.dpslog);
api.post('/agregardps', dps.agregar);
api.get('/getDps',dps.allDps);

module.exports = api

