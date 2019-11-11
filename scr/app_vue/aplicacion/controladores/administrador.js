import server from "./server.js"


export default {

    dataUsuario(data) {
        return new Promise((resolve, reject) => {

            server.sendServer("get", "usuarios", data)
                .then(res => {
                   
                   
                    if (res.estado == "OK") {
                        resolve(res);
                        sessionStorage.setItem('nombre', res.nombre);
                    } else {
                        reject(res);
                    }
                })
                .catch(e => {
                    console.log(e);

                });
        });
    },
    agregarUsuario(data) {

        return new Promise((resolve, reject) => {

            server.sendServer("post", "usuarios", data)
                .then(res => {
                 
                    if (res.estado == "OK") {
                        resolve(res.mensaje);
                    } else {

                        reject(res);

                    }
                })
                .catch(e => {
                    console.log(e);
                });


        });

    },
    getUsuarios(data) {

        return new Promise((resolve, reject) => {

            server.sendServer("get", "usuariosAll", data)
                .then(res => {

                    if (res.estado == "OK") {
                        resolve(res.data);
                    } else {

                        reject(res);

                    }

                })
                .catch(e => {
                    console.log(e);
                })

        });


    },
    delUsuario(data){
        return new Promise((resolve,reject)=>{

            server.sendServer("delete","usuarios",data)
                  .then(res=>{
                     
                    if (res.estado == "OK") {
                        resolve(res);
                    } else {

                        reject(res);

                    }
                  })
                  .catch(e=>{
                    console.log(e);
                  });

        });

    }
    
}