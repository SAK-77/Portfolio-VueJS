<template>
  <div class="error404">
    <h1 v-if="error.statusCode === 404">404 ERROR</h1>
    <h1 v-else>An error occured</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
  
<style>
  @media (min-width: 1024px) {
    .error404 {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    background-image{
      all:("img404.jpg");
    } 
  }
</style>

