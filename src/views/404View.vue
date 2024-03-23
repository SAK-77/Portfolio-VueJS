<script setup>
  import { RouterLink } from "vue-router"
</script>

<template>
  <section class="error404">
    <h1>404 ERROR</h1>
    <img src="../components/images/img404.jpg" alt="errorImg">
    <h2>An error occured</h2>
    <p>We are Sorry, Go back to : </p>

    <RouterLink to="/">Home</RouterLink>
  </section>
</template>
  
<style scoped>
  section {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    /*background-image: url('../components/images/img404.jpg');*/
  }

  h1, h2  {
    font-size: 8rem;
    font-weight: bold;
  }

  img {
    height: 200px;
    width: 200px;
    margin: 30px 0;
    color: white;
  }

  a {
    color: white;
    margin-top: 20px;
    border: 2px solid black;
    padding: 5px;
    border-radius: 2px;
    background-color: rgb(32, 32, 32);
  }

</style>

