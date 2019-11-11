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

              </form>
              <hr class="sidebar-divider" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <button
                v-on:click="generarPassword"
                class="btn btn-primary btn-icon-split float-left"
              >
                <span class="icon text-white-50">
                  <i class="fas fa-asterisk"></i>
                </span>
                <span class="text">Password</span>
              </button>
              <button
                v-on:click="agregarUsuario"
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

export default {
  name: "AgregarDps",
  data() {
    return {
        docDps:{
        usuario:""
        }
    };
  },
  computed: {},
  methods: {},

  mounted: function() {},
  created: function() {},
  components: {}
};
</script>

<style scoped>
</style>