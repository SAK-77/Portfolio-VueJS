<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a class="anchor" id="about"></a>
  <div class="about">
    <h1>About Me</h1>
    <p>My name is Salomon KOUASSI, I'm still learning web developement.
      At the moment I did not build any full fledged website but all my projects can be seen here.  
    </p>
    <br/>
    <p>
      I love learning and I'm always looking to get better day after day.
    </p>
  </div>
</template>

<style scoped>
  a.anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden; 
  }

  .about{
    margin: 2rem;
  }

  h1{
    color: black;
    text-align: center;
    margin-top: 60px;
    font-size: 2.3rem;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: white;
    max-width: 300px;
  }
</style>

<script>
</script>
