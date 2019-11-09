<template>
<div>
  <app-login v-if="rutas.appLogin" ></app-login>
  <app-administrador v-if="rutas.appAdministrador"></app-administrador>
  <app-cliente-domotica v-if="rutas.clienteDomotica"></app-cliente-domotica>
  
</div>

</template>
   
<script>
import login from "./login.vue"
import administrador from "./administrador.vue";
import clienteDomotica from "./clienteDomotica.vue";
export default {
  name: "Api",
  data() {
    return {
      rutas: {
        appLogin: false,
        appAdministrador: false,
        clienteDomotica:false,
      }
    };
  },
  computed: {},
  methods: {
    inicio: function() {
       this.enrutador("appLogin");
    },
    enrutador: function(ruta) {
       this.rutas = {
        appLogin: false,
        appAdministrador: false,
        clienteDomotica:false,
      };

      this.rutas[ruta] = true;
    }
  },

  mounted: function() {
    this.inicio();
   
  },
  created: function() {
   this.$on("enrutador", data => { 
     this.enrutador(data);
    });


  },
  components: {
    'app-login':login,
    'app-administrador':administrador,
    'app-cliente-domotica':clienteDomotica,
  }
};
</script>

<style scoped>
</style>