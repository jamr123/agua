<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
          <div class="sidebar-brand-icon">
            <img src="https://i.ibb.co/G3vVtHX/logo.png" class="rounded" width="50" height="50" />
          </div>
          <div class="sidebar-brand-text mx-1">JE</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-fw fa-user"></i>
            <span>{{role}}</span>
          </a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Usuarios</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a v-on:click="router('agregar')" class="nav-link" href="#">
            <i class="fas fa-fw fa-plus"></i>
            <span>Agregar Usuario</span>
          </a>
        </li>
        <li class="nav-item">
          <a v-on:click="router('modificar')" class="nav-link" href="#">
            <i class="fas fa-fw fa-edit"></i>
            <span>Modificar Usuario</span>
          </a>
        </li>
        <li class="nav-item">
          <a v-on:click="router('eliminar')" class="nav-link" href="#">
            <i class="fas fa-fw fa-trash"></i>
            <span>Eliminar Usuario</span>
          </a>
        </li>
        <li class="nav-item">
          <a v-on:click="router('ver')" class="nav-link" href="#">
            <i class="fas fa-fw fa-eye"></i>
            <span>Ver Usuarios</span>
          </a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />
        <div class="sidebar-heading">Dps</div>

        <li class="nav-item">
          <a v-on:click="router('agregarDps')" class="nav-link" href="#">
            <i class="fas fa-microchip"></i>
            <span>Agregar Dps</span>
          </a>
        </li>
        
        <li class="nav-item">
          <a v-on:click="router('eliminarDps')" class="nav-link" href="#">
            <i class="fas fa-microchip"></i>
            <span>Eliminar Dps</span>
          </a>
        </li>

        <li class="nav-item">
          <a v-on:click="router('verDps')" class="nav-link" href="#">
            <i class="fas fa-microchip"></i>
            <span>Ver Dps</span>
          </a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />
      </ul>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <!-- Sidebar Toggle (Topbar) -->
            <button
              id="sidebarToggleTop"
              class="btn btn-link d-md-none rounded-circle mr-3"
              role="button"
              data-toggle="dropdown"
            >
              <i class="fa fa-bars"></i>
            </button>

            <!-- Topbar Navbar -->
            <ul class="navbar-nav ml-auto">
              <div class="topbar-divider d-none d-sm-block"></div>

              <!-- Nav Item - User Information -->
              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{nombre}}</span>
                </a>
                <!-- Dropdown - User Information -->
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Perfil
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Configuracion
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Actividad
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Salir
                  </a>
                </div>
              </li>
            </ul>
          </nav>
         
          <div class="container-fluid">
            

            <div v-if="adminRutas.agregar" class="row">
              <div class="col-lg-12">
                <div class="card shadow mb-4 border-left-primary">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Agregar Usuario</h6>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-6">
                        <hr class="sidebar-divider" />
                        <form>
                          <div class="form-group">
                            <label for="usuario">Email:</label>
                            <input
                              v-model="docUsuario.usuario"
                              type="email"
                              class="form-control"
                              id="usuario"
                            />
                          </div>
                          <div class="form-group">
                            <label for="pass">Password:</label>
                            <input
                              v-model="docUsuario.password"
                              type="text"
                              class="form-control"
                              id="pass"
                            />
                          </div>
                          <div class="form-group">
                            <label for="nombre">Nombre:</label>
                            <input
                              v-model="docUsuario.nombre"
                              type="text"
                              class="form-control"
                              id="nombre"
                            />
                          </div>
                          <div class="form-group">
                            <label for="direccion">Direccion:</label>
                            <input
                              v-model="docUsuario.direccion"
                              type="text"
                              class="form-control"
                              id="direccion"
                            />
                          </div>
                          <div class="form-group">
                            <label for="telefono">Telefono:</label>
                            <input
                              v-model="docUsuario.telefono"
                              type="number"
                              class="form-control"
                              id="telefono"
                            />
                          </div>
                          <div class="form-group">
                            <label for="role">Role:</label>
                            <select
                              v-model="docUsuario.role"
                              type="number"
                              class="form-control"
                              id="role"
                            >
                            
                              <option>clienteAgua</option>
                            </select>
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

            <div v-if="adminRutas.modificar" class="row">
              <div class="col-lg-12">
                <div class="card shadow mb-4 border-left-primary">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Modificar Usuario</h6>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-6">
                        <hr class="sidebar-divider" />

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

            <div v-if="adminRutas.eliminar" class="row">
              <div class="col-lg-12">
                <div class="card shadow mb-4 border-left-primary">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Eliminar Usuario</h6>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-6">
                        <hr class="sidebar-divider" />
                        <form>
                          <div class="form-group">
                            <label for="user">Escriba el usuario que desea eliminar:</label>
                            <input v-model="delUsuario" type="email" class="form-control" id="user" />
                          </div>
                        </form>
                        <hr class="sidebar-divider" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <button
                          v-on:click="eliminarUsuario"
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

            <div v-if="adminRutas.ver" class="row">
              <div class="col-lg-12 col-sm-12">
                <div class="card shadow mb-4 border-left-primary">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Ver Usuarios</h6>
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
                                <th>Usuario</th>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(item, index) in tablaUsuarios" :key="index">
                                <td>{{item.usuario}}</td>
                                <td>{{item.nombre}}</td>
                                <td>{{item.telefono}}</td>
                                <td>{{item.direccion}}</td>
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
  
            <app-agregarDps v-if="adminRutas.agregarDps" ></app-agregarDps>
            <app-verDps v-if="adminRutas.verDps" ></app-verDps>
            <app-eliminarDps v-if="adminRutas.eliminarDps" ></app-eliminarDps>



          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; jamrelectronics.com.mx 2019</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div
      class="modal fade"
      id="logoutModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{nombre}}</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Esta Seguro de Cerrar Sesion</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
            <button
              v-on:click="salir"
              class="btn btn-primary"
              type="button"
              data-dismiss="modal"
            >Salir</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mensaje Modal-->
    <div
      class="modal fade"
      id="mensajeModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mensajeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="mensajeModalLabel">{{nombre}}</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">{{modalMsg}}</div>

          <div class="modal-footer">
            <button class="btn btn-success" type="button" data-dismiss="modal">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
   
<script>
import adminCtl from "../controladores/administrador.js";
import agregardps from "../componentes/agregarDps.vue";
import eliminardps from "../componentes/eliminarDps.vue";
import verdps from "../componentes/verDps.vue"
export default {
  name: "Administrador",
  data() {
    return {
      nombre: "",
      role: "",
      search: "",
      docUsuario: {
        token: "",
        role: "",
        usuario: "",
        password: "",
        nombre: "",
        direccion: "",
        telefono: "",
        ubidotsApikey:"",
        ubidotsDispositivos:"",
      },
      modalMsg: "",

      adminRutas: {
        agregar: true,
        modificar: false,
        eliminar: false,
        ver: false,
        agregarDps:false,
        eliminarDps:false,
        verDps:false
      },
      tableUsers: [],
      delUsuario: ""
    };
  },
  methods: {
    salir: function() {
      localStorage.clear();
      sessionStorage.clear();
      location.reload();
    },
    generarPassword: function() {
      let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
      let pass = "";
      let i = 0;
      let longitud = 8;
      for (i = 0; i < longitud; i++)
        pass += caracteres.charAt(
          Math.floor(Math.random() * caracteres.length)
        );
      this.docUsuario.password = pass;
    },
    agregarUsuario: function() {
      if (this.validForm == true) {
        if (this.validUsuario == true) {
          this.modalMsg = "Procesando......";

          adminCtl
            .agregarUsuario(this.docUsuario)
            .then(res => {
              this.modalMsg = res;
              this.setInit();
            })
            .catch(e => {
              if (e.estado == "fail") {
                this.salir();
              } else {
                this.modalMsg = e;
                this.setInit();
              }
            });
        } else {
          this.modalMsg = "Escriba una direccion de email valida";
        }
      } else {
        this.modalMsg = "Existen Campos en Blanco";
      }
    },
    setInit: function() {
      this.docUsuario.usuario = "";
      this.docUsuario.nombre = "";
      this.docUsuario.direccion = "";
      this.docUsuario.telefono = "";
      this.docUsuario.password = "";
      this.docUsuario.ubidotsDispositivos="";
      this.docUsuario.ubidotsApikey="";
    },
    router: function(ruta) {
      this.adminRutas = {
        agregar: false,
        modificar: false,
        eliminar: false,
        ver: false,
        agregarDps:false,
        eliminarDps:false,
        verDps:false
      };

      this.adminRutas[ruta] = true;

      if (this.adminRutas.ver == true) {
        this.getUsuarios();
      }
    },
    getUsuarios: function() {
      adminCtl
        .getUsuarios({ token: this.docUsuario.token, data: "admin" })
        .then(res => {
          console.log(res);
          this.tableUsers = res;
        })
        .catch(e => {});
    },
    eliminarUsuario: function() {
      if (this.validFormEliminar == true) {
        adminCtl
          .delUsuario({ token: this.docUsuario.token, data: this.delUsuario })
          .then(res => {
            this.modalMsg=res.mensaje;
            this.delUsuario="";
          })
          .catch(e => {

            if (e.estado == "fail") {
                this.salir();
              }
          });
      } else {
        this.modalMsg = "El Campo Eliminar Esta En Blanco";
      }
    }

  },
  computed: {


    validForm: function() {
      if (
        this.docUsuario.usuario &&
        this.docUsuario.password &&
        this.docUsuario.nombre &&
        this.docUsuario.direccion &&
        this.docUsuario.telefono
      ) {
        return true;
      } else {
        return false;
      }
    },
    validUsuario: function() {
      if (
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
          this.docUsuario.usuario
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    tablaUsuarios: function(data) {
      if (this.tableUsers.length > 0) {
        return this.tableUsers.filter(item => {
          return (
            item.usuario.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        return [];
      }
    },
    validFormEliminar: function() {
      if (this.delUsuario) {
        return true;
      } else {
        return false;
      }
    }


  },
  filters: {},

  mounted: function() {
    if (localStorage.getItem("session")) {
      adminCtl
        .dataUsuario({ token: localStorage.getItem("session"), data: "admin" })
        .then(res => {
          this.nombre = res.nombre;
          this.docUsuario.token = localStorage.getItem("session");
        })
        .catch(e => {
          this.salir();
        });
    } else {
      this.salir();
    }

    if (localStorage.getItem("role")) {
      this.role = localStorage.getItem("role");
    }
  },
  created: function() {
    
      this.$on("listenerMsg", data => {
      this.modalMsg = data;
    });
    
  },
  components: {
    "app-agregarDps":agregardps,
    "app-eliminarDps":eliminardps,
    "app-verDps":verdps
  }
};
</script>
<style scoped>
.row {
  --table-width: 100%; /* Or any value, this will change dinamically */
}
tbody {
  display: block;
  max-height: 300px;
  overflow-y: auto;
}
thead,
tbody tr {
  display: table;
  width: var(--table-width);
  table-layout: fixed;
}

th,
td {
  text-align: center;
  font-size: 89%;
}

::-webkit-scrollbar {
  display: none;
}
.buscar {
  width: 30%;
  margin: 1%;
  float: right;
}
</style>