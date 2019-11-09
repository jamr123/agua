<template>
  <div>
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6  d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">
                        jamrelectronics
                        <br>
                        AGUA
                      </h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          @keyup.enter="login"
                          v-model="usuario"
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          @keyup.enter="login"
                          v-model="password"
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <button
                        v-on:click="login"
                        type="button"
                        class="btn btn-primary btn-user btn-block"
                      >Login</button>

                      <center>
                        <br />
                        <div>{{mess}}</div>
                      </center>
                    </form>

                    <hr />
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="register.html">Create an Account!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
   
<script>
import login from "./login.vue";
import loginCtrl from "../controladores/login.js";
export default {
  name: "login",
  data() {
    return {
      usuario: "",
      password: "",
      mess: " "
    };
  },
  computed: {},
  methods: {
    login: function() {
      if (this.validForm == true) {
        loginCtrl
          .login({ usuario: this.usuario, password: this.password })
          .then(res => {
            this.$parent.$emit("enrutador", res);
          })
          .catch(mensaje => {
            this.mess = mensaje;
          });
      } else {
        this.mess = "Existen campos en blanco";
      }
    }
  },

  computed: {
    validForm: function() {
      if (this.usuario && this.password) {
        return true;
      } else {
        return false;
      }
    }
  },

  mounted: function() {
     if (localStorage.getItem("session")) {
       if (localStorage.getItem("role")) {

         this.$parent.$emit("enrutador", localStorage.getItem("role"));
      
      }
    }
  },
  created: function() {},
  components: {}
};
</script>

<style scoped>
</style>





