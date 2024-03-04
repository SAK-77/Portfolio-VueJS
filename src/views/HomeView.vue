<!--
  • Votre nom et prénom
  • Une courte présentation
  • Vos créations avec à chaque fois une image et un titre. Une modal s'ouvrira avec plus de photos et détails au clic. La disposition est libre.
  • Un formulaire de contact (nom/prénom, objet et message) qui s'envoie à l'adresse e-mail définie en variable d'environnement.
-->

<script setup>
  //import Header from '../components/Header.vue';
  //import Footer from '../components/Footer.vue';
  import About from "./AboutView.vue";
  import Project from '../components/Project.vue';
  import ContactForm from "../components/ContactForm.vue";
</script>

<template>
  <div class="main">
    <About/>
    <Project />
    <ContactForm/>
  </div>
</template>

<style>

</style>
