<template>
  <nav class="navbar navbar-expand-lg shadow">
    <div class="container">
      <router-link to="/" class="navbar-brand me-auto">
        <img src="@/assets/logo-basic-ssc.png" alt="SSC IMG" class="logo-header img-fluid">
      </router-link>
      <div class="d-flex my-3 my-lg-0 d-lg-block d-none">
        <router-link v-if="getUsername().length" class="btn btn-ssc me-3 px-4 py-2" to="/service-list">Layanan</router-link>
        <router-link v-if="!getUsername().length" class="btn btn-ssc px-4 py-2" to="/login">Login</router-link>
        <router-link v-else class="btn btn-ssc px-4 py-2" to="/" @click="resetState()">Logout</router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end d-block d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <!-- <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> -->
          </ul>
          <div class="d-block my-3 my-lg-0">
            <router-link v-if="getUsername().length" class="btn btn-ssc px-4 py-2 d-block mb-3" to="/service-list">Layanan</router-link>
            <router-link v-if="!getUsername().length" class="btn btn-ssc px-4 py-2 mb-3" to="/login">Login</router-link>
            <router-link v-else class="btn btn-ssc px-4 py-2 mb-3" to="/" @click="resetState()">Logout</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
</template>

<script>

  import {  GET_USERNAME, SET_AUTHENTICATION, SET_USERNAME } from "../stores/storeconstants";
   export default {
    methods: {
      getUsername() {
        return this.$store.getters[`auth/${GET_USERNAME}`]
      },
      resetState() {
        this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
        this.$store.commit(`auth/${SET_USERNAME}`, "");
        this.$router.push("/");
        // window.location.reload();
      } 
    },
   }
</script>
