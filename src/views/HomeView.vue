<!--
  • Votre nom et prénom
  • Une courte présentation
  • Vos créations avec à chaque fois une image et un titre. Une modal s'ouvrira avec plus de photos et détails au clic. La disposition est libre.
  • Un formulaire de contact (nom/prénom, objet et message) qui s'envoie à l'adresse e-mail définie en variable d'environnement.
-->

<script setup>
  import Header from "../components/Header.vue"
  import Footer from "../components/Footer.vue"
  import Project from "../components/Project.vue"
  import Contact from "../components/ContactForm.vue"
  import About from "../components/About.vue";
  import Home from "../components/HomeHero.vue";
</script>


<template>
  <div class="page-container">
    <Header></Header>
    <div class="main">
      <Home></Home>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
  background-color: rgba(202, 198, 211, 0.156);
}

</style>