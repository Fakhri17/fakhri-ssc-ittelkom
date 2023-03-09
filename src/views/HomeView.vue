<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <section class="my-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 col-12 mb-4 mb-lg-0">
            <div class="text-center text-lg-start ms-0 ms-lg-5">
              <h2 class="fw-ssc mb-0"><strong class="text-danger">S</strong>tudent</h2>
              <h2 class="fw-ssc mb-0"><strong class="text-danger">S</strong>ervice</h2>
              <h2 class="fw-ssc mb-0"><strong class="text-danger">C</strong>enter</h2>
              <p class="text-muted fs-5 mb-4">Datang, Buat Tiket, Proses</p>
              <a href="#layanan" class="btn btn-danger px-4 py-2">Lihat Layanan</a>
            </div>
          </div>
          <div class="col-md-7 col-12">
            <div>
              <img src="@/assets/home-img-ssc.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-5">
      <div class="container">
       <div class="py-5">
        <h3><span class="text-danger"><i class="bi bi-book-half me-2"></i>Panduan</span> Pengajuan Layanan</h3>
       </div>
      </div>
    </section>
  </main>
</template>
