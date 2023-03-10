<template>
  
  <Header v-show="$route.path != '/login' "/>
    <RouterView />
  <Footer v-show="$route.path != '/login' "/>
  <BackToTop />
</template>

<script>
  // import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/Header.vue'
  import BackToTop from './components/BackToTop.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: 'App',
    components: {
      Header,
      BackToTop,
      Footer
    }
  }
</script>
<style scoped>

</style>

