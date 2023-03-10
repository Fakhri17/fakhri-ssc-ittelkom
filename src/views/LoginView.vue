<template>
  <div
    style="
      background: url('https://ssc.ittelkom-sby.ac.id/assets-factory/imgs/theme/background.jpg');
      background-size: cover;
    "
  >
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div class="card shadow px-1" style="width: 350px;">
        <div class="card-body">
          <h4>Student Service Center</h4>
          <h5 class="mb-4">Sign in</h5>
          <form name="login-form" class="my-4">
            <div class="mb-3">
              <input type="text" class="form-control w-100" placeholder="Username" v-model="input.username">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model="input.password">
            </div>
            <button type="submit" class="btn btn-ssc px-4 py-2 w-100" v-on:click.prevent = "login()">Login</button>
          </form>
          <div class="text-center mb-4">
            <router-link class="text-ssc text-center" to="/">Back To Home</router-link>
            
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_AUTHENTICATION, SET_USERNAME, GET_USERNAME } from "../stores/storeconstants";
import { useStore } from 'vuex'
  export default {
    data(){
      return{
        input:{
          username: "",
          password: ""
        },
      }
    },
    setup(){
      const store = useStore()
      const coba = store.getters[`auth/${GET_USERNAME}`]
      return{
        coba
      }
    },
    methods:{
      login(){
        //make sure username OR password are not empty
        if(this.input.username != "" && this.input.password != ""){
          this.output = "Authentication complete"
          //stores true to the set_authentication and username to the set_username 
          this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
          this.$store.commit(`auth/${SET_USERNAME}`, this.input.username);
          this.output = "Authentication complete."
          this.$router.push("/");
        }else{
          this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
          this.output = "Username and password can not be empty"
        }
      }
    },
    
  }
</script>
