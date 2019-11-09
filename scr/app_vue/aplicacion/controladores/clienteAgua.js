import server from "./server.js"
import axios from "axios"

export default {

    dataUsuario(data) {
        return new Promise((resolve, reject) => {

            server.sendServer("get", "usuarios", data)
                .then(res => {
                   
                   
                    if (res.estado == "OK") {
                        resolve(res);
                        localStorage.setItem('nombre', res.nombre);
                    } else {
                        reject(res);
                    }
                })
                .catch(e => {
                    console.log(e);

                });
        });
    }
    ,
    getSocket(data){

        return new Promise((resolve, reject) => {

            server.sendServer("get", "socket", data)
                .then(res => {
                     
                    if (res.estado == "OK") {
                        resolve(res);
                        
                    } else {
                        reject(res);
                    }
                })
                .catch(e => {
                    console.log(e);

                });



        });

    },
    subscribeNoti(data){

        return new Promise((resolve, reject) => {

            server.sendServer("post", "subscribe", data)
                .then(res => {
                     
                    if (res.estado == "OK") {
                        resolve(res);
                        
                    } else {
                        reject(res);
                    }
                })
                .catch(e => {
                    console.log(e);

                });



        });

    },
    delNoti(data){

        return new Promise((resolve, reject) => {

            server.sendServer("delete", "subscribe", data)
                .then(res => {
                     
                    if (res.estado == "OK") {
                        resolve(res);
                        
                    } else {
                        reject(res);
                    }
                })
                .catch(e => {
                    console.log(e);

                });



        });

    }

}