'use strict'
const app = require("./app");
const server = require('http').Server(app);
const mongoose = require('mongoose');
const config = require("./config");
const admin=require("./controladores/usuarios.js");
const SocketIo = require('socket.io');
const io = SocketIo.listen(server);



mongoose.connect(config.DB, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }, (err, res) => {

  if (err) throw err
  console.log("datbase lista")
  server.listen(config.PORT, () => {
    console.log(`Api corriendo en el puerto ${config.PORT}`);
    admin.userAdmin();
   

 
  });

  


})



