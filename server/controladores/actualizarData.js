const usuarioApp = require("../modelos/usuario");
const ubiApp = require("../modelos/ubidots");
const alerta=require('../modelos/alertas');
const config=require("../config");
const notify=require("../controladores/pushNoti");
const axios = require('axios');
var IO;

function dataAct(io){
    IO=io;
   setTimeout(actualizar,1000);
    
}

async function actualizar(){
 

var dataVarsUbi=[];
var users= await getUsuarios();



       if(users!=null){
        for(var d in users){


            if(users[d].usuario!=config.ADMISTRADOR.usuario){

             var ubiData=await getubiData(users[d].usuario); 
             var alertasUser= await alertas(users[d].usuario);
             var apiKey=ubiData['apikey'];
             var dataUbi=JSON.parse(ubiData['dataUbi']);
             var token= await tokenUbidots(apiKey);
            


             for(f in dataUbi){
                var datos=[];

               var urlvar= await urlVar( dataUbi[f].device,token);
               var variables=await variablesUbi(urlvar,token);
               


                  for(h in variables){

                    if(alertasUser.length>0){
                       
                        for(var z in alertasUser){
                            
                            if(alertasUser[z].variable==variables[h].name){

                                if(alertasUser[z].act==true){

                                    if( parseFloat(variables[h].last_value.value) > parseFloat(alertasUser[z].valMax)){
                                        
                                    
                                        notify.mess(`Alerta ${variables[h].name} `,users[d].usuario,`${variables[h].name}=${variables[h].last_value.value}  Mayor Al Valor Maximo=${alertasUser[z].valMax}`);
                                    }
                                    if( parseFloat(variables[h].last_value.value) < parseFloat(alertasUser[z].valMin)){
    
                                        
                                        notify.mess(`Alerta ${variables[h].name}`,users[d].usuario,`${variables[h].name}=${variables[h].last_value.value}  Menor Al Valor Minimo=${alertasUser[z].valMin}`);
                                    }
                                }

                            }

                        }
                       

                    }


                    datos.push({
                         var:variables[h].name,
                         val:variables[h].last_value.value
                    });

                    

                  }
                  var dts={
                      device:dataUbi[f].device,
                      vars:datos
                  }
                dataVarsUbi.push(dts);

               }
             }
            if(dataVarsUbi.length>0){

                IO.emit(users[d].usuario, {
                    value:dataVarsUbi
                  });

            }
          }




       }
   


      setTimeout(actualizar,60000);

}

function getUsuarios(){

    return new Promise((resolve,reject)=>{
       
        usuarioApp.find({ }, (err, respuesta) => {
                  
            if (err) console.log(`administrador error ${err}`);

            if (respuesta != null) {

               resolve(respuesta);


            } else {
            
              console.log("Error data base");
              reject("error");

            }

        });

    });

}

function getubiData(usuario){
    return new Promise((resolve,reject)=>{
       
        ubiApp.findOne({usuario:usuario }, (err, respuesta) => {
                  
            if (err) console.log(`administrador error ${err}`);

            if (respuesta != null) {
               resolve(respuesta);


            } else {
            
              console.log("Error data base");
              reject("error");

            }

        });

    });
}

function tokenUbidots(apikey){

    return new Promise((resolve,reject)=>{

        axios
    .post('https://industrial.api.ubidots.com/api/v1.6/auth/token/',{},{headers: {'x-ubidots-apikey': apikey}})
    .then(response =>{

               
               resolve(response.data.token); 
        
                })
    .catch(error => {
        console.log(error);
        reject("error");
        
    });

    }

    );
}

function urlVar(device,token){

    return new Promise((resolve,reject)=>{

    axios
    .get('https://industrial.api.ubidots.com/api/v1.6/devices/'+device+'/',{headers: {'X-Auth-Token': token}})
    .then(response =>{
       
        resolve(response.data.variables_url);

     } )
    .catch(error => {
        console.log(error);
        reject("error")
    });

    });

}

function variablesUbi(urlvar,token){
 
    return new Promise((resolve,reject)=>{
       
        axios
            .get(urlvar,{headers: {'X-Auth-Token': token}})
            .then(response =>{

                resolve(response.data.results);
            }
                )
            .catch(error => {
                console.log(error);
                reject("error")
            });
    });

}

function alertas(usuario){
   
    return new Promise((resolve,reject)=>{
        
        alerta.find({ usuario: usuario }, (error, result) => {
            if(error) {
              return console.log(`Error has occurred: ${error}`);
            }
           
            resolve(result);
          })

    });

}




module.exports = {
    dataAct

}
