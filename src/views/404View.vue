<script setup>
  import { RouterLink } from "vue-router"
</script>

<template>
  <section class="error404">
    <h1>404 ERROR</h1>
    <img src="../components/images/img404.png" alt="errorImg">
    <h2>An error occured</h2>
    <p>We are Sorry, Go back to : </p>

    <RouterLink to="/">Home</RouterLink>
  </section>
</template>
  
<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }

  h1, h2  {
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    height: 10rem;
    width: 10rem;
    margin: 30px 0;
  }

  a {
    color: white;
    margin-top: 20px;
    border: 2px solid black;
    padding: 5px;
    border-radius: 2px;
    background-color: rgb(32, 32, 32);
    text-decoration: none;
  }

</style>

