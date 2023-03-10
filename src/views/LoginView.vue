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
          <form action="" class="my-4">
            <div class="mb-3">
              <input type="text" class="form-control w-100" placeholder="Username">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-ssc px-4 py-2 w-100">Login</button>
          </form>
          <div class="text-center mb-4">
            <router-link class="text-ssc text-center" to="/">Back To Home</router-link>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
