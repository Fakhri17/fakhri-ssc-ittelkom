<script setup>

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
            <span class="text-danger"><i class="bi bi-book-half me-2"></i>Panduan</span> Pengajuan Layanan
          </h3>
          <div class="my-5">
            <div class="row">
              <div class="col-lg-12">
                <div class="horizontal-timeline">
                  <ul class="list-inline items">
                    <li v-for="item in timeLine" :key="item" class="list-inline-item items-list mx-1">
                      <div class="px-2">
                        <span class="bg-danger badge-timeline py-1 text-white fw-semibold mb-2">{{  item.number }}</span>
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
  </main>
</template>

<script>
export default {
  setup(){
    const timeLine = [
      {
        'number': 1,
        'description': 'Mahasiswa Datang ke SSC.',
      },
      {
        'number': 2,
        'description': 'Mahasiswa menaruh KTM ke tempat yang telah disediakan untuk antrian.',
      },
      {
        'number': 3,
        'description': 'Operator memanggil mahasiswa sesuai urutan antrian kedatangan.',
      },
      {
        'number': 4,
        'description': 'Mahasiswa berkonsultasi tentang layanan ke operator.',
      },
      {
        'number': 5,
        'description': 'Operator membantu mahasiswa terkait layanan SSC melalui ticketing aplikasi.',
      },
      {
        'number': 6,
        'description': 'Mahasiswa akan mendapatkan informasi terkait tindak lanjut layanan berdasarkan jenis layanan (1-3 hari).',
      },
      {
        'number': 7,
        'description': 'Selesai.',
      },
    ];
    return { timeLine }
 }

}
</script>
