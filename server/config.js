module.exports = {

    PORT: process.env.PORT || 3333,
    DB: process.env.MONGODB || 'mongodb://Jorge:Jorge135@localhost:27017/agua',
    SECRET_TOKEN_AUTH:'JAMR_AGUA_13579',
    EMAIL:{
        email:"",
        password:""
    },
    ADMISTRADOR:{
        usuario:"agua@jamrelectronics.com.mx",
        password:"Agua135",
        role:"appAdministrador",
        nombre:"Jorge Meza",
        direccion:"hshhs",
        telefono:"123456789" 

        }

}

/*
db.createUser( { user: "Jorge", pwd: "Jamr135",roles: [ { role: "userAdminAnyDatabase", db: "admin" }]});
db.createUser( { user: "Jorge", pwd: "Jorge135",roles: [ { role: "readWrite", db: "agua" }]});

*/