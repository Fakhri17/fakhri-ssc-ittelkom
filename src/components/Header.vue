<template>
  <nav class="navbar navbar-expand-lg py-3">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse border-bottom" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo-basic-ssc.png" alt="SSC IMG" class="logo-header img-fluid">
        </a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item d-lg-none d-block">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item d-lg-none d-block">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item d-lg-none d-block">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
</template>
