<template>
  <div>
    <div class="col-lg-12">
      <div class="card shadow mb-4 border-left-primary">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Agregar Dps</h6>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-6">
              <hr class="sidebar-divider" />
              <form>

                <div class="form-group">
                  <label for="usuario">Usuario:</label>
                  <input
                    v-model="docDps.usuario"
                    type="usuario"
                    class="form-control"
                    id="usuario"
                  />
                </div>

                <div class="form-group">
                  <label for="usuario">Id:</label>
                  <input
                    v-model="docDps.id"
                    type="usuario"
                    class="form-control"
                    id="usuario"
                  />
                </div>

                <div class="form-group">
                    <label for="role">Tipo:</label>
                    <select
                        v-model="docDps.tipo"
                        type="number"
                        class="form-control"
                        id="role"
                    >
                    
                        <option>vending1</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="role">Activacion:</label>
                    <select
                        v-model="docDps.act"
                        type="number"
                        class="form-control"
                        id="role"
                    >
                        <option>Activo</option>
                        <option>Bloqueado</option>
                    </select>
                </div>

              </form>
              <hr class="sidebar-divider" />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <button
                v-on:click="agregardps"
                class="btn btn-success btn-icon-split float-right"
                data-toggle="modal"
                data-target="#mensajeModal"
              >
                <span class="icon text-white-50">
                  <i class="fas fa-plus"></i>
                </span>
                <span class="text">Agregar</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
   
<script>
/*componentes*/

/*controladores*/
import adminCtl from "../controladores/administrador.js";
export default {
  name: "AgregarDps",
  data() {
    return {

        docDps:{
        usuario:"",
        id:"",
        tipo:"",
        act:""
        }

    };
  },
  methods: {
      agregardps: function() {
      if (this.docDps.usuario && this.docDps.id && this.docDps.tipo && this.docDps.act) {
       

       adminCtl
       .agregarDps({token:localStorage.getItem("session"),data:this.docDps})
       .then(res=>{
         console.log(res.mensaje);
         this.$parent.$emit("listenerMsg",res.mensaje );
       });

        
      } else {
    
         this.$parent.$emit("listenerMsg","Existen Campos en Blanco" );

      }

    }
  },
  computed: {},
  mounted: function() {},
  created: function() {},
  components: {}
};
</script>

<style scoped>
</style>