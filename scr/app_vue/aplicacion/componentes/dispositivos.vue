<template>
  <div>
  
     
       <div v-for="(item, index) in dpsall" :key="index" class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary mb-1">Tipo: {{item.tipo}} </div>
                      <div class="text-xs font-weight-bold text-primary mb-1">  Id: {{item.tipo}} </div>
                      
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{{item.act}}</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-microchip fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
        </div>
     

  </div>
</template>
   
<script>


import cliente from"../controladores/clienteAgua";

export default {
  name: "Dispositivos",
  data() {
    return {
       dispositivos:[]

    };
  },
  computed: {
      dpsall:function(){
        return this.dispositivos;
      }
  },
  methods: {
 
  },

  mounted: function() {
   cliente.getAllDps({ token: localStorage.getItem("session"), data: "admin" })
   .then(res=>{
     console.log(res.data);
     this.dispositivos=res.data;

   });
   
  },
  created: function() {
  
  },
  components: {
   
  
  }


};
</script>

<style scoped>
</style>