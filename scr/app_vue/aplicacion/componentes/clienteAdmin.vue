<template>
  <div>
   <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- LATERAL -->
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"    id="accordionSidebar"  >
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
          <div class="sidebar-brand-icon">
            <img src="https://i.ibb.co/G3vVtHX/logo.png" class="rounded" width="50" height="50" />
          </div>
          <div class="sidebar-brand-text mx-3">jamrelectronics</div>
        </a>

        <hr class="sidebar-divider my-0" />
        <li class="nav-item">
          <a v-on:click="router('dispositivos')" id="sidebarToggleTop" class="nav-link" href="#">
            <i class="fas fa-desktop"></i>
            <span>Dispositivos</span>
          </a>
        </li>

        <hr class="sidebar-divider" />
        <div class="sidebar-heading">Estadistica</div>      
        <li class="nav-item">
          <a v-on:click="router('ventas')" id="sidebarToggleTop" class="nav-link" href="#">
            <i class="fas fa-chart-line"></i>
            <span>Ventas</span>
          </a>
        </li>

      
        <hr class="sidebar-divider" />
        <div class="sidebar-heading">Configuracion</div>
        <li class="nav-item">

          <a v-on:click="router('variables')" id="sidebarToggleTop" class="nav-link" href="#">
            <i class="fa fa-cog"></i>
            <span>Variables</span>
          </a>

          <a v-on:click="router('alertas')" id="sidebarToggleTop" class="nav-link" href="#">
            <i class="fa fa-exclamation"></i>
            <span>Alertas</span>
          </a>

        </li>




        <hr class="sidebar-divider d-none d-md-block" />

        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

      </ul>
     
      <div id="content-wrapper" class="d-flex flex-column">
       
        <div id="content">
          
          <!--NAVEGACION -->
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
         
          <div class="container-fluid">
            <!-- CONTENIDO -->


          </div>
         
        </div>
       
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

import cliente from"../controladores/clienteAgua";
export default {
  name: "ClienteAgua",
  data() {
    return {
     nombre: "",
     lateral:{
      dispositivos:true,
      ventas:false,
      variables:false,
      alertas:false
     }

    };
  },
   methods: {
       salir: function() {
      localStorage.clear();
      sessionStorage.clear();
      location.reload();
    },
     router: function(ruta) {
      this.lateral={
      dispositivos:true,
      ventas:false,
      variables:false,
      alertas:false
     }
      this.lateral[ruta] = true;
    }
  },
  computed: {
      internet: function() {
      if (navigator.onLine) {
        return true;
      } else {
        return false;
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

    
  },
  created: function() {
  
  },
  components: {
   
  
  }


};
</script>

<style scoped>
</style>