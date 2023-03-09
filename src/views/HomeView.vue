<script setup></script>

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
              <img src="@/assets/home-img-ssc.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-5">
      <div class="container">
        <div class="py-5">
          <h3 class="mb-5">
            <span class="text-danger"><i class="bi bi-book-half me-2"></i>Panduan</span> Pengajuan
            Layanan
          </h3>
          <div class="my-5">
            <div class="row">
              <div class="col-lg-12">
                <div class="horizontal-timeline">
                  <ul class="list-inline items">
                    <li
                      v-for="item in timeLine"
                      :key="item"
                      class="list-inline-item items-list mx-1"
                    >
                      <div class="px-2">
                        <span class="bg-danger badge-timeline py-1 text-white fw-semibold mb-2">{{
                          item.number
                        }}</span>
                        <p class="text-muted">
                          {{ item.description }}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-5">
      <div class="container">
        <h3 class="mb-5">
          <span class="text-danger"><i class="bi bi-book-half me-2"></i>Kategori</span> Layanan
        </h3>
        <div class="row">
          <div v-for="item in layanan" :key="item" class="col-lg-3 col-12">
            <div @click="displayLayanan = item.id" class="card mb-3 cursor-pointer">
              <div class="card-body">
                <div class="text-center mb-3">
                  <lord-icon
                    :src="`https://cdn.lordicon.com/${item.icon}.json`"
                    trigger="morph"
                    :colors="`primary:${item.colorPrimary},secondary:${item.colorSecondary}`"
                    style="width: 150px; height: 150px"
                  >
                  </lord-icon>
                </div>
                <h6 class="fw-semibold text-center">{{ item.title }}</h6>
              </div>
            </div>

            <div class="d-lg-none d-block">
              <Transition name="fade">
                <div v-show="displayLayanan == item.id" class="my-5">
                  <div class="mb-4">
                    <h2 class="text-danger">Layanan {{ item.title }}</h2>
                    <div class="badge-ssc-layanan"></div>
                  </div>
                
                </div>
              </Transition>
            </div>
           
          </div>
        </div>
        
          <div class="d-none d-lg-block">
            <div v-for="item in layanan" :key="item">
              <Transition name="fade">
                <div v-show="displayLayanan == item.id" class="my-5">
                  <div class="mb-4">
                    <h2 class="text-danger">Layanan {{ item.title }}</h2>
                    <div class="badge-ssc-layanan"></div>
                  </div>
                 
                </div>
              </Transition>
              
            </div>
          </div>
        
        
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      displayLayanan: 1
    }
  },
  setup() {
    const timeLine = [
      {
        number: 1,
        description: 'Mahasiswa Datang ke SSC.'
      },
      {
        number: 2,
        description: 'Mahasiswa menaruh KTM ke tempat yang telah disediakan untuk antrian.'
      },
      {
        number: 3,
        description: 'Operator memanggil mahasiswa sesuai urutan antrian kedatangan.'
      },
      {
        number: 4,
        description: 'Mahasiswa berkonsultasi tentang layanan ke operator.'
      },
      {
        number: 5,
        description: 'Operator membantu mahasiswa terkait layanan SSC melalui ticketing aplikasi.'
      },
      {
        number: 6,
        description:
          'Mahasiswa akan mendapatkan informasi terkait tindak lanjut layanan berdasarkan jenis layanan (1-3 hari).'
      },
      {
        number: 7,
        description: 'Selesai.'
      }
    ]
    const layanan = [
      {
        id: 1,
        title: 'Akademik',
        icon: 'wxnxiano',
        colorPrimary: '#aa0000',
        colorSecondary: '#000000'
      },
      {
        id: 2,
        title: 'PuTi',
        icon: 'qhgmphtg',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000'
      },
      {
        id: 3,
        title: 'Kemahasiswaan',
        icon: 'uukerzzv',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000'
      },
      {
        id: 4,
        title: 'Logistik',
        icon: 'sbiheqdr',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000'
      },
      {
        id: 5,
        title: 'Keuangan',
        icon: 'vaeagfzc',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000'
      },
      {
        id: 6,
        title: 'Pusat Bahasa & Perpustakaan',
        icon: 'gdjyhaga',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000'
      },
      {
        id: 7,
        title: 'FTIB',
        icon: 'nobciafz',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000'
      },
      {
        id: 8,
        title: 'FTEIC',
        icon: 'ckuogwdx',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000'
      }
    ]
    return { timeLine, layanan }
  }
}
</script>
