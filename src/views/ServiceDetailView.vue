<template>
  <div class="my-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card px-3">
            <div class="card-body">
              <div class="card-title h5 mb-4">Pengajuan tiket layanan untuk <strong class="text-ssc">Layanan Hosting</strong></div>
              <div class="alert alert-info alert-dismissible fade show mb-4" role="alert">
                <p>Catatan</p>
                <p class="">
                  Layanan ini harap dilaporkan maksimal H-1 sebelum acara demi tercapainya suasana pengerjaan yang kondusif 
                  Pengerjaan akan memakan waktu kurang lebih 1 hari kerja.
                </p>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <form action="">
                <select class="form-select w-25" aria-label="Default select example">
                  <option selected>Pilih Jenis Tiket</option>
                  <option value="1">Permintaan</option>
                  <option value="2">Tiket Insiden</option>
                </select>
                <div class="my-3 fw-semibold">Informasi Pengaju</div>
                <div class="mb-3">
                  <input type="text" class="form-control" id="nim" placeholder="NIM">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" id="nama" placeholder="Nama" readonly>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-12 mb-3 mb-lg-0">
                    <input type="text" class="form-control" id="prodi" placeholder="Program Studi" readonly>
                  </div>
                  <div class="col-lg-4 col-12 mb-3 mb-lg-0">
                    <input type="text" class="form-control" id="fakultas" placeholder="Fakultas" readonly>
                  </div>
                  <div class="col-lg-4 col-12 mb-3 mb-lg-0">
                    <input type="text" class="form-control" id="angkatan" placeholder="Angkatan" readonly>
                  </div>
                </div>
                <div class="my-3 fw-semibold">Deskripsi Tiket</div>
                <div id="editor"></div>
                <div class="my-3 fw-semibold">File Attachment</div>
                <div class="mb-3">
                  <input class="form-control" type="file" id="formFile">
                </div>
                <button type="submit" class="btn btn-ssc w-100 my-3">Submit</button>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import { GET_USERNAME } from "../stores/storeconstants";
  export default{
    mounted(){
      if(sessionStorage.getItem("username") == null){
        this.$router.push("/login");
      }
    ClassicEditor
      .create( document.querySelector( '#editor' ) )
      .then( editor => {
        console.log( editor );
      } )
      .catch( error => {
        console.error( error );
      } );
    }
  }
</script>