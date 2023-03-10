<template>
  
  <Header v-show="$route.path != '/login' "/>
  <RouterView />
  <BackToTop />
</template>

<script>
  // import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/Header.vue'
  import BackToTop from './components/BackToTop.vue'
  export default {
    name: 'App',
    components: {
      Header,
      BackToTop
    }
  }
</script>
<style scoped>

</style>

