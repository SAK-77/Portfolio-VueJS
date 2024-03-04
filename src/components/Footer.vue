<!-- eslint-disable vue/multi-word-component-names -->
<!--
  • Le footer est identique sur toutes les pages.
  • Des icônes avec des liens vers vos réseaux sociaux (GitHub, LinkedIn…)
    :  Ils devront s'ouvrir dans un nouvel onglet.  :: social-medias
  • La date de dernière mise à jour du site         :: class="copyright"
-->

<template>
  <div class="footer">
    <SocialMedia/>
    <div class="mid-line"></div>
    <div class="copyright"></div>
  </div>
</template>

<script>
  import SocialMedia from "./SocialMedia.vue";
  export {
    SocialMedia
  }
</script>

<style></style>