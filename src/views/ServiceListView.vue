<template>
  <div class="bg-light py-5">
    <div class="container">
      <h2 class="text-center"><span class="text-ssc">List Semua</span> Pengajuan Tiket</h2>
      <div class="my-5">
        <div class="row">
          <div v-for="index in 12" :key="index" class="col-lg-3 col-6 mb-3">
            <router-link @mouseover="cardHover = index" @mouseleave="cardHover = 0" :to="`/service/${index}`" class="text-decoration-none">
              <div :class="cardHover == index ? 'shadow' : '' " class="card">
                <div class="card-body">
                  <img src="https://ssc.ittelkom-sby.ac.id/assets-home/imgs/icon/fakultas-ti-bisnis.svg" alt="" class="img-fluid">
                  <div class="bg-ssc text-white mt-3 px-2 py-1 text-center rounded">
                    <div class="h5">Layanan {{ index }}</div>
                  </div>
                </div>
              </div>
            </router-link>
            
          </div>
        </div>
      </div>
      <div class="py-3 px-3" style="background: url('https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/banner-4.png');  background-size: cover;">
        <div class="mt-5" style="width: 35%;">
          <h4 class="text-ssc">Student Service Centers</h4>
          <h2 class="fs-1 mb-3">Selesaikan problem Semudah itu</h2>
          <a href="#" class="btn btn-ssc px-4 py-2 mb-3">Ajukan Tiket</a>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  // import { GET_USERNAME } from "../stores/storeconstants";

  export default {
    data(){
      return{
        cardHover: 0
      }
    },
    mounted() {
      if(sessionStorage.getItem("username") == null){
        this.$router.push("/login");
      }
      
    },
  }
</script> 