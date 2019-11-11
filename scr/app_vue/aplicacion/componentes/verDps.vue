<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <div class="card shadow mb-4 border-left-primary">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Ver Dps</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12 col-sm-12">
                <hr class="sidebar-divider" />

                <div class="table-responsive-sm">
                  <div class="input-group buscar">
                    <input
                      v-model="search"
                      type="text"
                      class="form-control"
                      placeholder="Buscar Usuario"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-secondary" type="button">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>

                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Usuario</th>
                        <th>Activacion</th>
                        <th>Tipo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in tablaDps" :key="index">
                        <td>{{item.id}}</td>
                        <td>{{item.usuario}}</td>
                        <td>{{item.act}}</td>
                        <td>{{item.tipo}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr class="sidebar-divider" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <!--button
                          v-on:click="generarPassword"
                          class="btn btn-primary btn-icon-split float-left"
                        >
                          <span class="icon text-white-50">
                            <i class="fas fa-asterisk"></i>
                          </span>
                          <span class="text">Password</span>
                </button-->
              </div>
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
  name: "VerDps",
  data() {
    return {
      Dps:[]
    };
  },
  methods: {},
  computed: { 
    
    tablaDps: function() {
      if (this.Dps.length > 0) {
        return this.Dps.filter(item => {
          return (
            item.usuario.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        return [];
      }
    }
    
 },
  

  mounted: function() {
    adminCtl.getDps({token:localStorage.getItem("session"),data:"data"})
    .then( res=>{
       this.Dps=res;
       console.log(res);
    });
  },
  created: function() {},
  components: {}
};
</script>

<style scoped>
</style>