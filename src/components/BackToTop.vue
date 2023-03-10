<template>
   <transition name="fade">
    <button @click="BackToTop()" type="button" class="btn btn-ssc btn-floating btn-lg" id="btn-back-to-top">
      <i class="bi bi-arrow-up"></i>
  </button>

  </transition>
</template>

<script>
export default {
 
  methods: {
    BackToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    scrollFunction(){
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-back-to-top").style.display = "block";
      } else {
        document.getElementById("btn-back-to-top").style.display = "none";
      }
    },
  },
  mounted() {
    
    window.addEventListener('scroll', this.scrollFunction)
  },
}
</script>
