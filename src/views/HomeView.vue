<script setup></script>

<template>
  <main>
    <section class="my-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 col-12 mb-4 mb-lg-0">
            <div class="text-center text-lg-start ms-0 ms-lg-5">
              <h2 class="fw-ssc mb-0"><strong class="text-ssc">S</strong>tudent</h2>
              <h2 class="fw-ssc mb-0"><strong class="text-ssc">S</strong>ervice</h2>
              <h2 class="fw-ssc mb-0"><strong class="text-ssc">C</strong>enter</h2>
              <p class="text-muted fs-5 mb-4">Datang, Buat Tiket, Proses</p>
              <a href="#layanan" class="btn btn-ssc px-4 py-2">Lihat Layanan</a>
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
            <span class="text-ssc"><i class="bi bi-book-half me-2"></i>Panduan</span> Pengajuan
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
                      <div class="d-flex d-md-block px-2">
                        <span class="bg-ssc badge-timeline py-1 text-white fw-semibold mb-2">{{
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
          <span class="text-ssc"><i class="bi bi-book-half me-2"></i>Kategori</span> Layanan
        </h3>
        <div class="row">
          <div v-for="item in layanan" :key="item" class="col-lg-3 col-12">
            <div @click="displayListLayanan(item.id)" :class="displayLayanan === item.id ? 'active-layanan' : ''" class="card mb-3 cursor-pointer">
              <div class="card-body">
                <div class="text-center mb-3">
                  <lord-icon
                    :src="`https://cdn.lordicon.com/${item.icon}.json`"
                    trigger="morph"
                    :colors="`primary:${item.colorPrimary},secondary:${item.colorSecondary}`"
                    style="width: 100px; height: 100px"
                  >
                  </lord-icon>
                </div>
                <h6 class="fw-semibold text-center">{{ item.title }}</h6>
              </div>
            </div>

            <div class="d-lg-none d-block">
              <Transition name="fade">
                <div v-show="displayLayanan == item.id" class="my-5">
                  <div v-if="item.service.length" class="mb-4">
                    <h2 class="text-ssc">Layanan {{ item.title }}</h2>
                    <div class="badge-ssc-layanan"></div>
                  </div>
                  <div v-if="item.service.length" class="row mb-5">
                    <div class="col-12 mb-4">
                      <ul class="list-group">
                        <li v-for="itemChild in item.service" :key="item" @click="displayDetailLayanan(itemChild.id)"  
                          :class="serviceId == itemChild.id ? 'bg-ssc text-white' : ''" class="list-group-item py-3 cursor-pointer">
                          <i class="bi bi-check2-square me-2"></i>{{ itemChild.title }}
                        </li>
                      </ul>
                    </div>
                    <div class="col-12">
                      <div v-for="itemChild in item.service" :key="item" >
                        <Transition name="slide-fade">
                          <div v-show="serviceId == itemChild.id" class="card">
                            <div class="card-header bg-transparent fw-semibold h5 py-3">
                              {{ itemChild.title }}
                            </div>
                            <div class="card-body">
                              <div class="text-center">
                                <img :src="itemChild.imgUrl" alt="" class="img-fluid img-layanan">
                              </div>
                              <p class="card-text">{{ itemChild.description }}</p>
                            </div>
                          </div>
                        </Transition>
                      </div> 
                    </div>
                  </div>
                  <div class="my-1"> 
                    <div class="row">
                      <div class="col-12">
                        <div class="mb-5">
                          <h2 class="text-ssc">{{  item.informationTitle }}</h2>
                          <div class="badge-ssc-layanan"></div>
                        </div>
                        <p class="mb-4">{{  item.informationDescription }}</p>
                        <div>
                          <a :href="item.igUrl" target="_blank" class="text-ssc-hover mb-3 d-block h5 accordion text-decoration-none"> 
                            <i class="bi bi-instagram me-3"></i> {{ item.igUsername }} 
                          </a>
                          <a :href="item.webUrl" target="_blank" class="text-ssc-hover d-block h5 accordion text-decoration-none"> 
                            <i class="bi bi-globe me-3"></i> {{ item.webUrl }} 
                          </a>
                        </div>
                      </div>
                      <div class="col-12">
                        <img :src="item.informationImg" alt="" class="img-fluid">
                      </div>
                    </div>
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
                  <div v-if="item.service.length" class="mb-5">
                    <h2 class="text-ssc">Layanan {{ item.title }}</h2>
                    <div class="badge-ssc-layanan"></div>
                  </div>
                 <div v-if="item.service.length" class="row mb-layanan">
                  <div class="col-4">
                    <ul class="list-group">
                      <li v-for="itemChild in item.service" :key="item" @click="displayDetailLayanan(itemChild.id)"  
                        :class="serviceId == itemChild.id ? 'bg-ssc text-white' : ''" class="list-group-item py-3 cursor-pointer">
                        <i class="bi bi-check2-square me-2"></i>{{ itemChild.title }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-8">
                    <div v-for="itemChild in item.service" :key="item" >
                      <Transition name="slide-fade">
                        <div v-show="serviceId == itemChild.id" class="card">
                          <div class="card-header bg-transparent fw-semibold h5 py-3">
                            {{ itemChild.title }}
                          </div>
                          <div class="card-body">
                            <div class="text-center">
                              <img :src="itemChild.imgUrl" alt="" class="img-fluid img-layanan">
                            </div>
                            <p class="card-text">{{ itemChild.description }}</p>
                          </div>
                        </div>
                      </Transition>
                    </div> 
                  </div>
                 </div>
                 <div class="my-5">
                 
                  <div class="row">
                    <div class="col-6">
                      <div class="mb-5">
                        <h2 class="text-ssc">{{  item.informationTitle }}</h2>
                        <div class="badge-ssc-layanan"></div>
                      </div>
                      <p class="mb-4">{{  item.informationDescription }}</p>
                      <div>
                        <a :href="item.igUrl" target="_blank" class="text-ssc-hover mb-3 d-block h5 accordion text-decoration-none"> 
                          <i class="bi bi-instagram me-3"></i> {{ item.igUsername }} 
                        </a>
                        <a :href="item.webUrl" target="_blank" class="text-ssc-hover d-block h5 accordion text-decoration-none"> 
                          <i class="bi bi-globe me-3"></i> {{ item.webUrl }} 
                        </a>
                      </div>
                    </div>
                    <div class="col-6">
                      <img :src="item.informationImg" alt="" class="img-fluid">
                    </div>
                  </div>
                  
                 
                 </div>
                </div>
              </Transition>
              
            </div>
          </div>
        
        
      </div>
    </section>
    <section class="bg-dark py-5 text-white">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12 mb-4 mb-lg-0">
            <h2 class="fw-bold">Student Service Center</h2>
            <div class="mt-3">
              <div class="h5 mb-3">Contact: </div>
              <p><strong>Address:</strong>  Jl. Ketintang No.156, Gayungan, Surabaya, Jawa Timur 60231</p>
              <p><strong>Phone:</strong> (+6231) 8280800</p>
              <p><strong>Email:</strong> humas@ittelkom-sby.ac.id</p>
            </div>
          </div>
          <div class="col-md-6 col-12 mb-4 mb-lg-0">
            <h4 class="fw-bold">Aplikasi Student Service Center</h4>
            <div class="mt-3">
              <p>Ditunjukkan untuk mempermudah perangkat kerja serta mahasiswa Institut Teknologi Telkom Surabaya untuk melakukan pelaporan pemintaan bantuan, demi terciptanya lingkungan kerja serta perkuliahan yang lebih baik dan efisien.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <p class="float-md-start font-sm text-muted mb-0">
              &copy; 2023, <strong class="text-ssc">IT Telkom Surabaya</strong> Studen Service Center
            </p>
          </div>
          <div class="col-lg-6 col-12">
            <p class="float-md-end font-sm text-muted mb-0">
              <a href="https://ittelkom-sby.ac.id/" target="_blank" class="text-ssc-hover text-decoration-none fw-semibold">IT Telkom Surabaya.</a>
              All rights reserved
            </p>
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
      displayLayanan: 1,
      serviceId: 1,
    }
  },
  methods: {
    displayListLayanan(id) {
      this.serviceId = 1
      this.displayLayanan = id
    },
    displayDetailLayanan(id){
      this.serviceId = id
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
        colorSecondary: '#000000',
        service: [
          {
            id: 1,
            title: 'Registrasi (KRS)',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/registrasi-krs.png',
            description: 'Merupakan registrasi mahasiswa pada setiap semester awal perkuliahan'
          },
          {
            id: 2,
            title: 'Ujian (UTS & UAS)',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/uts-uas.png',
            description: 'Layanan pengumuman jadwal kegiatan ujian akademik yang bertujuan untuk melakukan pengukuran dan penilaian kompetensi peserta didik, sebagai dasar kegiatan evaluasi pembelajaran perkuliahan'
          },
          {
            id: 3,
            title: 'Surat Keterangan Aktif',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/surat-keterangan-aktif.png',
            description: 'Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu.'
          },
          {
            id: 4,
            title: 'Layanan Perkuliahan',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/layanan-perkuliahan.png',
            description: 'Layanan panduan mengenai proses pelayanan perkuliahan yang ada di IT Telkom Surabaya.'
          },
          {
            id: 5,
            title: 'Ijazah dan Transkrip Nilai',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/akademik/registrasi-krs.png',
            description: 'Layanan mengenai proses penerbitan transkrip dan ijazah kepada calon lulusan dan pihak terkait sehingga proses penerbitan transkrip dapat terkendali.'
          },
        ],
        informationTitle: 'Informasi Akademik',
        informationDescription: 'Merupakan unit yang bertugas mengelola administrasi akademik yang mencakup kegiatan layanan administrasi akademik, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Akademik, silakan kunjungi:',
        igUsername: 'akademikitts',
        igUrl: 'https://www.instagram.com/akademikitts/',
        webUrl: 'https://akademik.ittelkom-sby.ac.id/',
        informationImg: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-academic.png'
      },
      {
        id: 2,
        title: 'PuTi',
        icon: 'qhgmphtg',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000',
        service: [
          {
            id: 1,
            title: 'Manajemen Akun',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/manajemen-akun.png',
            description: 'Merupakan registrasi mahasiswa pada setiap semester awal perkuliahan'
          },
          {
            id: 2,
            title: 'Akses Internet',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/internet.png',
            description: 'Layanan untuk pengaduan mengenai akses internet yang putus nyambung (Blind Spot) dan login wifi undefined, serta peminjaman Orbit atau kebutuhan internet untuk event'
          },
          {
            id: 3,
            title: 'Layanan aplikasi',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/layanan-aplikasi.png',
            description: 'Layanan untuk mengatasi aplikasi (iGracias, Elearning dsb) yang terkena masalah seperti bug dan error yang berdampak terhadap keberlangsungan kegiatan akademik.'
          },
          {
            id: 4,
            title: 'Layanan Hosting',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/layanan-hosting.png',
            description: 'Layanan untuk memenuhi permintaan domain dan VPS untuk keperluan hosting aplikasi atau website'
          },
          {
            id: 5,
            title: 'Pengembangan aplikasi',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/pengembangan-app.png',
            description: 'Layanan pembuatan solusi sistem informasi untuk memenuhi kebutuhan proses bisnis.'
          },
        ],
        informationTitle: 'Informasi PuTi',
        informationDescription: 'Merupakan unit yang bertugas mengelola administrasi puti yang mencakup kegiatan layanan administrasi puti, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit PuTi, silakan kunjungi:',
        igUsername: 'puti.ittelkomsby',
        igUrl: 'https://www.instagram.com/puti.ittelkomsby/',
        webUrl: 'https://puti.ittelkom-sby.ac.id/',
        informationImg: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-puti.png'
      },
      {
        id: 3,
        title: 'Kemahasiswaan',
        icon: 'uukerzzv',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000',
        service: [
          {
            id: 1,
            title: 'Transkrip aktivitas kemahasiswaan (TAK)',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/tak.png',
            description: 'Layanan approval sertifikat TAK sebagai syarat untuk mengikuti sidang tugas akhir/skripsi/proyek akhir, mendapatkan beasiswa, dan mengikuti seleksi mahasiswa berprestasi.'
          },
          {
            id: 2,
            title: 'Surat Tugas / Dispensasi',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/surat-dispen.png',
            description: 'Layanan pembuatan surat tugas atau dispensasi untuk kebutuhan presensi.'
          },
          {
            id: 3,
            title: 'Surat Rekomendasi / Delegasi Lomba',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/surat-lomba.png',
            description: 'Layanan pengajuan surat rekomendasi atau surat pengantar lomba.'
          },
          {
            id: 4,
            title: 'Surat Keterangan Tidak Menerima Beasiswa Dari Kampus',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/surat-beasiswa.png',
            description: 'Layanan pembuatan surat keterangan tidak menerima beasiswa dari kampus untuk keperluan tertentu.'
          },
          {
            id: 5,
            title: 'KTM, Jas Almamater dan Vest',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/puti/pengembangan-app.png',
            description: 'Layanan pendataan, penerimaan jas almamater & vest serta KTM mahasiswa Institut Teknologi Telkom Surabaya.'
          },
          {
            id: 6,
            title: 'Proposal Pengajuan Dana dan LPJ Kegiatan Ormawa dan UKM',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/proposal-pengajuan.png',
            description: 'Layanan terkait pelaksanaan pengusulan & pendanaan program kegiatan ormawa dan UKM.'
          },
          {
            id: 7,
            title: 'Asuransi dan Layanan Kesehatan Telkomedika',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/asuransi.png',
            description: 'Layanan terkait pelaksanaan pengajuan klaim & asuransi kesehatan mahasiswa.'
          },
          
        ],
        informationTitle: 'Informasi Kemahasiswaan',
        informationDescription: 'Merupakan unit yang bertugas mengelola administrasi kemahasiswaan yang mencakup kegiatan layanan administrasi kemahasiswaan, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Kemahasiswaan, silakan kunjungi:',
        igUsername: 'kemahasiswaanitts',
        igUrl: 'https://www.instagram.com/kemahasiswaanitts/',
        webUrl: 'https://kemahasiswaan.ittelkom-sby.ac.id/',
        informationImg: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-kemahasiswaan.png'
      },
      {
        id: 4,
        title: 'Logistik',
        icon: 'sbiheqdr',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000',
        service: [
          {
            id: 1,
            title: 'Peminjaman Asset',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/logistik/peminjaman.png',
            description: 'Layanan peminjaman asset seperti ruangan kuliah, aula rapat, serta perlengkapan audio & video.'
          },
          {
            id: 2,
            title: 'Pemeliharaan Asset Rusak/Hilang',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/kemahasiswaan/surat-dispen.png',
            description: 'Layanan pemeliharaan asset mengenai kelistrikan, air, gedung, audio & video yang rusak atau hilang.'
          },
        ],
        informationTitle: 'Informasi Logistik',
        informationDescription: 'Merupakan unit yang bertugas mengelola administrasi logistik yang mencakup kegiatan layanan administrasi logistik, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Logistik, silakan kunjungi:',
        igUsername: 'logistik.ittelkomsby',
        igUrl: 'https://www.instagram.com/logistik.ittelkomsby/',
        webUrl: 'https://logistik.ittelkom-sby.ac.id/',
        informationImg: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-academic.png'
      },
      {
        id: 5,
        title: 'Keuangan',
        icon: 'vaeagfzc',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000',
        service: [
          {
            id: 1,
            title: 'Pembayaran BPP Semester',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Pembayaran_BPP_Semester.png',
            description: 'Panduan pembayaran Biaya Penyelenggaraan Pendidikan setiap semester.'
          },
          {
            id: 2,
            title: 'Pengajuan Angsuran',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Pengajuan_Angsuran.png',
            description: 'Pengajuan keringanan bagi mahasiswa yang belum dapat melakukan pelunasan pembayaran BPP'
          },
          {
            id: 3,
            title: 'Permintaan Bukti Pembayaran/Kuitansi Pembayaran Biaya Pendidikan',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Permintaan_Bukti_Pembayaran.png',
            description: 'Permintaan bukti pembayaran biaya pendidikan dari mahasiswa atau orang tua/wali mahasiswa'
          },
          {
            id: 4,
            title: 'Permintaan Surat Tagihan/ Invoice Biaya Pendidikan',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Permintaan_Surat_Tagihan.png',
            description: 'Permintaan surat tagihan atau invoice biaya pendidikan dari mahasiswa atau orang tua/wali mahasiswa'
          },
          {
            id: 5,
            title: 'Permintaan Surat Keterangan Bebas Administrasi Keuangan',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/keuangan/Permintaan_Surat_Keterangan.png',
            description: 'Permintaan surat keterangan yang menyatakan bahwa mahasiswa sudah tidak memiliki piutang biaya pendidikan. Surat tersebut digunakan untuk keperluan mengurus proses kelulusan dan proses undur diri'
          },
        ],
        informationTitle: 'Informasi Keuangan',
        informationDescription: 'Merupakan unit yang bertugas mengelola administrasi keuangan yang mencakup kegiatan layanan administrasi keuangan, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Keuangan, silakan kunjungi:',
        igUsername: 'keuangan.ittelkomsby',
        igUrl: 'https://www.instagram.com/keuangan.ittelkomsby/',
        webUrl: 'https://keuangan.ittelkom-sby.ac.id/',
        informationImg: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-keuangan.png'
      },
      {
        id: 6,
        title: 'Pusat Bahasa & Perpustakaan',
        icon: 'gdjyhaga',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000',
        service: [],
        informationTitle: 'Informasi Pusat Bahasa & Perpustakaan',
        informationDescription: 'Merupakan unit yang bertugas mengelola administrasi perpus yang mencakup kegiatan layanan administrasi perpus, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit Pusat Bahasa & Perpustakaan, silakan kunjungi:',
        igUsername: 'akademikitts',
        igUrl: 'https://www.instagram.com/akademikitts/',
        webUrl: 'https://perpus.ittelkom-sby.ac.id/',
        informationImg: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-perpus.png'
      },
      {
        id: 7,
        title: 'FTIB',
        icon: 'nobciafz',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000',
        service: [
          {
            id: 1,
            title: 'Surat Keterangan Aktif Mahasiswa di Fakultas',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu.'
          },
          {
            id: 2,
            title: 'Surat Pengantar dari Kampus untuk Tugas MK dan TA',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Surat pengantar yang dikeluarkan untuk Tugas Mata Kuliah dan Tugas Akhir untuk observasi ke suatu Instansi/perusahaan'
          },
          {
            id: 3,
            title: 'Surat Dispensasi',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Surat resmi untuk keperluan meminta keringanan atau pemakluman dari suatu hal'
          },
          {
            id: 4,
            title: 'Surat Rekomendasi',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Surat yang merekomendasikan mahasiswa atau disebut juga sebagai surat referensi yang membantu pihak ketiga mengetahui dan memahami lebih lanjut tentang mahasiswa tersebut'
          },
          {
            id: 5,
            title: 'Surat Peminjaman Lab dan Perlengkapannya',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Surat peminjaman ruangan atau inventaris laboratorium'
          },
          {
            id: 6,
            title: 'Residensi TA (menginap di kampus)',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Surat keterangan dengan kepentingan menginap di kampus untuk keperluan Tugas Akhir'
          },
          {
            id: 7,
            title: 'Proposal Dana Kegiatan',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Proposal_Dana_Kegiatan.png',
            description: 'Sebuah dokumen rencana acara yang ditulis dengan tujuan permohonan izin dan dukungan berupa dana atau sponsor'
          },
          {
            id: 8,
            title: 'Legalisir KHS & Transkrip',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Legalisir_KHS.png',
            description: 'Pembubuhan cap stempel dan tanda tangan asli oleh pihak yang berwenang pada lembar fotokopi Kartu Hasil Studi & Transkrip'
          },
        ],
        informationTitle: 'Informasi FTIB',
        informationDescription: 'Merupakan unit yang bertugas mengelola administrasi ftib yang mencakup kegiatan layanan administrasi ftib, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit FTIB, silakan kunjungi:',
        igUsername: 'ftib.ittelkomsby',
        igUrl: 'https://www.instagram.com/ftib.ittelkomsby/',
        webUrl: 'https://ftib.ittelkom-sby.ac.id/',
        informationImg: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-ftib.png'
      },
      {
        id: 8,
        title: 'FTEIC',
        icon: 'ckuogwdx',
        colorPrimary: '#000000',
        colorSecondary: '#aa0000',
        service: [
          {
            id: 1,
            title: 'Surat Keterangan Aktif Mahasiswa di Fakultas',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Layanan panduan pengajuan surat yang menjelaskan bahwa mahasiswa sebagaimana termaktub pada surat tersebut berstatus aktif mengikuti perkuliahan di semester tertentu.'
          },
          {
            id: 2,
            title: 'Surat Pengantar dari Kampus untuk Tugas MK dan TA',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Surat pengantar yang dikeluarkan untuk Tugas Mata Kuliah dan Tugas Akhir untuk observasi ke suatu Instansi/perusahaan'
          },
          {
            id: 3,
            title: 'Surat Dispensasi',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Surat resmi untuk keperluan meminta keringanan atau pemakluman dari suatu hal'
          },
          {
            id: 4,
            title: 'Surat Rekomendasi',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Surat yang merekomendasikan mahasiswa atau disebut juga sebagai surat referensi yang membantu pihak ketiga mengetahui dan memahami lebih lanjut tentang mahasiswa tersebut'
          },
          {
            id: 5,
            title: 'Surat Peminjaman Lab dan Perlengkapannya',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Surat peminjaman ruangan atau inventaris laboratorium'
          },
          {
            id: 6,
            title: 'Residensi TA (menginap di kampus)',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Surat_Keterangan_Aktif.png',
            description: 'Surat keterangan dengan kepentingan menginap di kampus untuk keperluan Tugas Akhir'
          },
          {
            id: 7,
            title: 'Proposal Dana Kegiatan',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Proposal_Dana_Kegiatan.png',
            description: 'Sebuah dokumen rencana acara yang ditulis dengan tujuan permohonan izin dan dukungan berupa dana atau sponsor'
          },
          {
            id: 8,
            title: 'Legalisir KHS & Transkrip',
            imgUrl: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/page/fakultas/Legalisir_KHS.png',
            description: 'Pembubuhan cap stempel dan tanda tangan asli oleh pihak yang berwenang pada lembar fotokopi Kartu Hasil Studi & Transkrip'
          },
        ],
        informationTitle: 'Informasi FTEIC',
        informationDescription: 'Merupakan unit yang bertugas mengelola administrasi fteic yang mencakup kegiatan layanan administrasi fteic, pusat bahasa, dan perpustakaan. Informasi lengkap mengenai Unit FTEIC, silakan kunjungi:',
        igUsername: 'fteic.ittelkomsby',
        igUrl: 'https://www.instagram.com/fteic.ittelkomsby/',
        webUrl: 'https://fteic.ittelkom-sby.ac.id/',
        informationImg: 'https://ssc.ittelkom-sby.ac.id/assets-home/imgs/banner/device-fteic.png'
      }
    ]
    return { timeLine, layanan }
  }
}
</script>
