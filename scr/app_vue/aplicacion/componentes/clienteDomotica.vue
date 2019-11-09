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
          <div class="sidebar-brand-text mx-3">jamrelectronics</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Charts -->
        <li class="nav-item">
          <a v-on:click="router('monitor')" id="sidebarToggleTop" class="nav-link" href="#">
            <i class="fas fa-eye"></i>
            <span>Monitor</span>
          </a>
        </li>

        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Config</div>

        <!-- Nav Item - Charts -->
        <li class="nav-item">
          <a v-on:click="router('areas')" id="sidebarToggleTop" class="nav-link" href="#">
            <i class="fas fa-home"></i>
            <span>Areas</span>
          </a>
        </li>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a v-on:click="router('dispositivos')" id="sidebarToggleTop" class="nav-link" href="#">
            <i class="fa fa-microchip"></i>
            <span>Dispositivos</span>
          </a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />
        <!-- Heading -->
        <div class="sidebar-heading">Control</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a v-on:click="router('control')" id="sidebarToggleTop" class="nav-link" href="#">
            <i class="fa fa-cloud-moon"></i>
            <span>Escenas</span>
          </a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <!-- Sidebar Toggle (Topbar) -->
            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
              <i class="fa fa-bars"></i>
            </button>

            <!-- Topbar Navbar -->
            <ul class="navbar-nav ml-auto">
              <!-- Nav Item - Alerts -->
              <li class="nav-item dropdown no-arrow mx-1">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="alertsDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-bell fa-fw"></i>
                  <!-- Counter - Alerts -->
                  <span v-if="!internet" class="badge badge-danger badge-counter">1</span>
                </a>
                <!-- Dropdown - Alerts -->
                <div
                  class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="alertsDropdown"
                >
                  <h6 class="dropdown-header">Alertas</h6>

                  <a v-if="!internet" class="dropdown-item d-flex align-items-center" href="#">
                    <div class="mr-3">
                      <div class="icon-circle bg-primary">
                        <i class="fas fa-file-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div class="small text-gray-500">OFFLINE</div>
                      <span class="font-weight-bold">Conexion sin internet</span>
                    </div>
                  </a>
                </div>
              </li>

              <!-- Nav Item - Messages -->
              <li class="nav-item dropdown no-arrow mx-1">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="messagesDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-envelope fa-fw"></i>
                  <!-- Counter - Messages -->
                  <!--span class="badge badge-danger badge-counter">7</span-->
                </a>
                <!-- Dropdown - Messages -->
                <div
                  class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="messagesDropdown"
                >
                  <h6 class="dropdown-header">Mensajes</h6>
                  <!--a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="">
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                  </div>
                  </a-->
                </div>
              </li>

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

                  <i class="fas fa-user rounded-circle"></i>
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
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <div v-if="sideMenu.monitor && !switchMonitor" class="row">
              <div v-for="item in areasAgregadas" :key="item" class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Area</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{item}}</div>
                      </div>
                      <div class="col-auto">
                        <i v-on:click="filterdps(item)" class="fas fa-home fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="sideMenu.monitor && switchMonitor" class="row">
              <div v-for="item in filt" :key="item" class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{{item.area}} </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{item.nombre}}</div>
                      </div>

                      <div id="dpsvisual" v-if="item.tipo=='On/Off'" class="row">
                        <div class="col-auto">
                          <center>
                            <a
                              v-on:click="accion(item,'on')"
                              href="#"
                              class="btn btn-warning btn-circle"
                            >
                              <i class="fas fa-wifi"></i>
                            </a>
                            
                          </center>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="sideMenu.areas" class="row">
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-success text-uppercase mb-1"
                        >Agregar Area</div>
                      </div>
                      <div class="col-auto">
                        <i
                          v-on:click="switchAreas=!switchAreas"
                          class="fas fa-plus fa-2x text-gray-300"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="!switchAreas" class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <form>
                          <div class="form-group row">
                            <label for="nombre">Nombre</label>
                            <input
                              v-model="nombreArea"
                              type="text"
                              class="form-control"
                              id="nombre"
                              placeholder="Area"
                            />
                          </div>
                        </form>
                        <center>
                          <a
                            v-on:click="agregarArea"
                            data-toggle="modal"
                            data-target="#infoModal"
                            href="#"
                            class="btn btn-success btn-circle"
                          >
                            <i class="fas fa-plus"></i>
                          </a>
                          <a
                            v-on:click="switchAreas=!switchAreas"
                            href="#"
                            class="btn btn-primary btn-circle"
                          >
                            <i class="fas fa-chevron-left"></i>
                          </a>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="sideMenu.areas && switchAreas" class="row">
              <div v-for="item in areasAgregadas" :key="item" class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Area</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{item}}</div>
                      </div>
                      <div class="col-auto">
                        <i
                          v-on:click="eliminarArea(item)"
                          class="fas fa-trash fa-2x text-gray-300"
                          data-toggle="modal"
                          data-target="#infoModal"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="sideMenu.dispositivos" class="row">
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-success text-uppercase mb-1"
                        >Agregar Dispositivo</div>
                      </div>
                      <div class="col-auto">
                        <i
                          v-on:click="switchdps=!switchdps"
                          class="fas fa-plus fa-2x text-gray-300"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="switchdps" class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >Agregar dispositivo a {{areadps}}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          <form>
                            <div class="form-group">
                              <label for="nom">Nombre:</label>
                              <input v-model="dps.nombre" type="text" class="form-control" id="nom" />
                            </div>
                            <div class="form-group">
                              <label for="nom">IP Local:</label>
                              <input v-model="dps.ip" type="text" class="form-control" id="nom" />
                            </div>
                            <div class="form-group">
                              <label for="id">Id</label>
                              <input v-model="dps.id" type="text" class="form-control" id="id" />
                            </div>
                            <div class="form-group">
                              <label for="role">Tipo:</label>
                              <select v-model="dps.tipo" type="text" class="form-control" id="role">
                                <option>On/Off</option>
                                <option>Dimmer</option>
                                <option>Temperatura</option>
                                <option>Nivel</option>
                                <option>IR</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="role">Area:</label>
                              <select v-model="dps.area" type="text" class="form-control" id="role">
                                <option v-for="(item, index) in Areas" :key="index">{{item}}</option>
                              </select>
                            </div>
                          </form>
                          <center>
                            <a
                              v-on:click="crearDispositivo()"
                              data-toggle="modal"
                              data-target="#infoModal"
                              href="#"
                              class="btn btn-success btn-circle"
                            >
                              <i class="fas fa-plus"></i>
                            </a>
                            <a
                              v-on:click="switchdps=!switchdps"
                              href="#"
                              class="btn btn-primary btn-circle"
                            >
                              <i class="fas fa-chevron-left"></i>
                            </a>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="sideMenu.dispositivos && !switchdps" class="row">
              <div v-for="item in dpsAgregados" :key="item" class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >{{item.area}} --- {{item.tipo}}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{item.nombre}}</div>
                      </div>
                      <div class="col-auto">
                        <i
                          v-on:click="eliminarDispositivo(item)"
                          class="fas fa-trash fa-2x text-gray-300"
                          data-toggle="modal"
                          data-target="#infoModal"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <h5 class="modal-title" id="exampleModalLabel">Salir</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Esta seguro de salir?</div>
          <div class="modal-footer">
            <button   class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a v-on:click="salir()"  class="btn btn-primary" href="#">Salir</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Info Modal-->
    <div
      class="modal fade"
      id="infoModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Domotica</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">{{mess}}</div>
          <div class="modal-footer">
            <button class="btn btn-success" type="button" data-dismiss="modal">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
   
<script>
/*componentes*/

/*controladores*/
import cliente from "../controladores/cliente";
export default {
  name: "ClienteDomotica",
  data() {
    return {
      Socket:"",
      nombre: "",
      nombreArea: "",
      areadps: "",
      Areas: [],
      Dispositivos: [],
      switchAreas: true,
      switchdps: false,
      switchMonitor: false,
      sideMenu: {
        monitor: true,
        areas: false,
        control: false,
        dispositivos: false
      },
      dps: {
        nombre: "",
        id: "",
        monitor: false,
        area: "",
        tipo: "",
        ip:""
      },
      mess: "",
      ftd: ""
    };
  },
  methods: {
    salir: function() {
      localStorage.clear();
      sessionStorage.clear();
      location.reload();
    },
    router: function(ruta) {
      this.sideMenu = {
        monitor: false,
        areas: false,
        control: false,
        dispositivos: false
      };
      this.switchMonitor = false;
      this.sideMenu[ruta] = true;
    },
    agregarArea: function() {
      if (this.nombreArea) {
        if (localStorage.getItem("Areas")) {
          this.Areas = JSON.parse(localStorage.getItem("Areas"));
          if (this.Areas.includes(this.nombreArea)) {
            this.mess = "Area ya existe";
          } else {
            this.Areas.push(this.nombreArea);
            localStorage.setItem("Areas", JSON.stringify(this.Areas));
            this.nombreArea = "";
            this.mess = "Area agregada";
            this.switchAreas = !this.switchAreas;
            this.router("areas");
          }
        } else {
          localStorage.setItem("Areas", JSON.stringify([this.nombreArea]));
          this.nombreArea = "";
          this.mess = "Area agregada";
          this.switchAreas = !this.switchAreas;
          this.Areas = JSON.parse(localStorage.getItem("Areas"));
          this.router("areas");
        }
      } else {
        this.mess = "Area en blanco";
      }
    },
    agregarDispositivo: function(item) {
      this.areadps = item;
      this.router("dispositivos");
    },
    crearDispositivo: function() {
      if (this.dps.nombre && this.dps.id && this.dps.area && this.dps.tipo && this.dps.ip) {
        let dpsa = {
          nombre: this.dps.nombre,
          id: this.dps.id,
          area: this.dps.area,
          tipo: this.dps.tipo,
          ip:this.dps.ip
        };
        if (localStorage.getItem("Dispositivos")) {
          this.Dispositivos = JSON.parse(localStorage.getItem("Dispositivos"));
          if (this.Dispositivos.includes(dpsa)) {
            this.mess = "Dispositivo ya existe";
          } else {
            this.Dispositivos.push(dpsa);
            localStorage.setItem(
              "Dispositivos",
              JSON.stringify(this.Dispositivos)
            );
            this.dps.nombre = "";
            this.dps.id = "";
            this.dps.area = "";
            this.dps.tipo = "";
            this.dps.ip="";
            this.dps.monitor = false;
            this.mess = "Dispositivo agregado";
            this.switchdps = !this.switchdps;
            this.router("dispositivos");
          }
        } else {
          localStorage.setItem("Dispositivos", JSON.stringify([dpsa]));
          this.dps.nombre = "";
          this.dps.id = "";
          this.dps.area = "";
          this.dps.tipo = "";
          this.dps.ip="";
          this.dps.monitor = false;
          this.mess = "Dispositivo agregado";
          this.Dispositivos = JSON.parse(localStorage.getItem("Dispositivos"));
          this.switchdps = !this.switchdps;
          this.router("dispositivos");
        }
      } else {
        this.mess = "Dispositivo en blanco";
      }
    },
    eliminarDispositivo: function(item) {
      this.Dispositivos = JSON.parse(localStorage.getItem("Dispositivos"));

      for (let i in this.Dispositivos) {
        if (JSON.stringify(this.Dispositivos[i]) == JSON.stringify(item)) {
          this.Dispositivos.splice(i, 1);
          localStorage.setItem(
            "Dispositivos",
            JSON.stringify(this.Dispositivos)
          );
          this.mess = "Dispositivo borrado";
        }
      }
    },
    eliminarArea: function(item) {
      this.Areas = JSON.parse(localStorage.getItem("Areas"));

      for (let i in this.Areas) {
        if (this.Areas[i] == item) {
          this.Areas.splice(i, 1);
          localStorage.setItem("Areas", JSON.stringify(this.Areas));
          this.mess = "Area borrada";
        }
      }
    },
    reload: function() {
      location.reload();
    },
    filterdps: function(item) {
      this.ftd = item;
      this.switchMonitor = true;
    },
    accion:function(item,data){

      
      window.location.href="http://"+item.ip+"/";
      console.log(item);
      console.log(data);

    }
  },
  computed: {
    internet: function() {
      if (navigator.onLine) {
        return true;
      } else {
        return false;
      }
    },
    areasAgregadas: function() {
      return this.Areas;
    },
    dpsAgregados: function() {
      return this.Dispositivos;
    },
    filt: function() {
      this.Dispositivos = JSON.parse(localStorage.getItem("Dispositivos"));
      if (this.Dispositivos.length > 0) {
        return this.Dispositivos.filter(item => {
          return item.area.indexOf(this.ftd) > -1;
        });
      } else {
        return [];
      }
    }
  },

  mounted: function() {
    
    if (navigator.onLine) {
      if (localStorage.getItem("session")) {
        cliente
          .dataUsuario({
            token: localStorage.getItem("session"),
            data: "admin"
          })
          .then(res => {
            this.nombre = res.nombre;
          })
          .catch(e => {
            if (e.estado == "fali") {
              this.salir();
            }
          });
      }
    } else {
      if (localStorage.getItem("nombre")) {
        this.nombre = localStorage.getItem("nombre");
      }
    }

    if (sessionStorage.getItem("reload")) {
    } else {
      sessionStorage.setItem("reload", "reload");
      location.reload();
    }

    if (localStorage.getItem("Areas")) {
      this.Areas = JSON.parse(localStorage.getItem("Areas"));
    } else {
      this.Areas = [];
    }

    if (localStorage.getItem("Dispositivos")) {
      this.Dispositivos = JSON.parse(localStorage.getItem("Dispositivos"));
    } else {
      this.Dispositivos = [];
    }
  },
  created: function() {},
  components: {}
};
</script>

<style scoped>
</style>