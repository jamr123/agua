<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card shadow mb-4 border-left-primary">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Eliminar Dps</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <hr class="sidebar-divider" />
                <form>
                  <div class="form-group">
                    <label for="user">Escriba el Id Dps que desea eliminar:</label>
                    <input v-model="eliminardps" type="email" class="form-control" id="user" />
                  </div>
                </form>
                <hr class="sidebar-divider" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <button
                  v-on:click="eliminardpss"
                  class="btn btn-danger btn-icon-split float-right"
                  data-toggle="modal"
                  data-target="#mensajeModal"
                >
                  <span class="icon text-white-50">
                    <i class="fas fa-trash"></i>
                  </span>
                  <span class="text">Eliminar</span>
                </button>
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
  name: "EliminarDps",
  data() {
    return {
      eliminardps: ""
    };
  },
  computed: {},
  methods: {
    eliminardpss: function() {
      if (this.eliminardps) {
        adminCtl
          .eliminarDps({
            token: localStorage.getItem("session"),
            data: this.eliminardps
          })
          .then(res => {
            this.$parent.$emit("listenerMsg", res.mensaje);
            this.eliminardps = "";
          });
      } else {
        this.$parent.$emit("listenerMsg", "Existen Campos en Blanco");
      }
    }
  },

  mounted: function() {},
  created: function() {},
  components: {}
};
</script>

<style scoped>
</style>