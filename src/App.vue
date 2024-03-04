<script >
  import { RouterLink, RouterView } from 'vue-router'
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import HomeView from "./views/HomeView.vue";

  export {
    Header,
    Footer,
    RouterLink,
    RouterView,
    HomeView
  };
</script>

<template>

  <Header/>
  <HomeView/>
  <Footer/>
    
  <RouterLink></RouterLink>

</template>

<style>

</style>
