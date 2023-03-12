<template>
  <div class="bg-light py-5">
    <div class="container">
      <h2 class="text-center"><span class="text-ssc">List Semua</span> Pengajuan Tiket</h2>
      <div class="mt-4 text-center">
        <div class="text-center h5 mb-3">Cari layanan berdasarkan kategori</div>
        <button v-for="item in categoryLayanan" @click="filterLayanan(item)" class="btn btn-ssc px-2 py-1 me-2 text-white rounded text-center">{{ item }}</button>
      </div>
      <div class="my-5">
        <div class="row">
          <div v-for="item in resultLayanan" :key="item" class="col-lg-3 col-6 mb-3">
            <Transition appear name="slide-fade">
              <router-link @mouseover="cardHover = item.id" @mouseleave="cardHover = 0" :to="`/service/${item.id}`" class="text-decoration-none">
                <div :class="cardHover == item.id ? 'shadow' : '' " class="card">
                  <div class="card-body">
                    <img src="https://ssc.ittelkom-sby.ac.id/assets-home/imgs/icon/fakultas-ti-bisnis.svg" alt="" class="img-fluid">
                    <div class="bg-ssc text-white mt-3 px-2 py-1 text-center rounded">
                      <div class="h5">Layanan {{ item.nama }}</div>
                    </div>
                  </div>
                </div>
              </router-link>
            </Transition>
            
            
          </div>
        </div>
      </div>
      <div class="py-3 px-3" style="background: url('https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/banner-4.png');  background-size: cover;">
        <div class="mt-5 w-text-banner-list">
          <h4 class="text-ssc">Student Service Center</h4>
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
        cardHover: 0,
        selectedLayanan: 'All',
        categoryLayanan: ['All', 'Category A', 'Category B', 'Category C'],
        layanan:[
          {id: 1, nama: 'Layanan 1', category: 'Category A'},
          {id: 2, nama: 'Layanan 2', category: 'Category B'},
          {id: 3, nama: 'Layanan 3', category: 'Category C'},
          {id: 4, nama: 'Layanan 4', category: 'Category A'},
          {id: 5, nama: 'Layanan 5', category: 'Category B'},
          {id: 6, nama: 'Layanan 6', category: 'Category C'},
          {id: 7, nama: 'Layanan 7', category: 'Category A'},
          {id: 8, nama: 'Layanan 8', category: 'Category B'},
          {id: 9, nama: 'Layanan 9', category: 'Category C'},
          {id: 10, nama: 'Layanan 10', category: 'Category A'},
          {id: 11, nama: 'Layanan 11', category: 'Category B'},
          {id: 12, nama: 'Layanan 12', category: 'Category C'},
        ],
      };
    },
    methods: {
      filterLayanan(item){
        this.selectedLayanan = item;
      }
    },
    computed: {
      resultLayanan(){
        if(this.selectedLayanan == 'All'){
          return this.layanan;
        }else{
          return this.layanan.filter((item) => {
            return item.category == this.selectedLayanan;
          });
        }
      }
    },
    mounted() {
      if(sessionStorage.getItem("username") == null){
        this.$router.push("/login");
      }
      
    },
  }
</script> 