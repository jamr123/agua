import server from "./server.js"


export default {

    login(data) {
        return new Promise((resolve, reject) => {
           
            server.sendServer("post","login",data)
                  .then(res=>{
                    if(res.estado=="OK"){
                        localStorage.setItem('session', res.session);
                        localStorage.setItem('role', res.role);
                        resolve(res.role);
                    }
                    else{
                        reject(res.mensaje);
                    }


                  })
                  .catch(e=>{
                   console.log(e);
                  })

        });
    },
    session(data) {
       
        return new Promise((resolve, reject) => {
           
            server.sendServer("post","session",{token:data})
                  .then(res=>{
                    if(res.estado=="OK"){
                        localStorage.setItem('session', res.session);
                        localStorage.setItem('role', res.role);
                        resolve(res.role);
                    }
                    else{
                        reject(res.mensaje);
                    }
                   
                  })
                  .catch(e=>{
                   console.log(e);
                  })

        });

    }



}