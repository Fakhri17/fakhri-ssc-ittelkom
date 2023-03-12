<template>
  <div class="my-5">
    <div class="container">
      <div class="table-responsive">
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>Profil</th>
              <th>Prodi</th>
              <th>Status</th>
              <th>Keterangan</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in 5" :key="item">
              <td>
                <div class="ms-3">
                  <p class="fw-bold mb-1">1203220013</p>
                  <p class="text-muted mb-0">Fakhri Alauddin</p>
                  <p class="text-muted mb-0">john.doe@gmail.com</p>
                </div>
              </td>
              <td>
                <p class="fw-normal mb-1">Informatika</p>
                <p class="text-muted mb-0">FTIB</p>
              </td>
              <td>
                <p class="fw-normal">Proses</p>
              </td>
              <td>
                <p class="fw-normal">Laporan tentan Layanan 1</p>
              </td>
              <td>
                <p class="fw-normal">12-03-2023</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
  
</template>
