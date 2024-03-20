<!-- eslint-disable no-undef -->
<!-- eslint-disable no-unused-vars -->
<!--
    • Le titre.
    • La date de création.
    • Les technologies utilisées.
    • Un lien pour visiter le site ou le fichier PDF selon le projet (dans un nouvel onglet).
    • Un lien vers le repository GitHub le cas échéant.
    • La modal se fermera lorsqu'on clique sur le bouton de fermeture ou en dehors. 
        Elle devra rester fixe sur la page même si on scrolle.
-->
<script setup>
    import { onMounted, ref } from 'vue';
    import {useModalStore} from '../stores/modal'

    //const display = ref(true);
    
    const props = defineProps(['display', 'title', 'date', 'technology', 'links', 'imageLinks'])

    function closeDisplay() {
        display.value = false;
    }
</script>

<template>
    <section class="modal-container" v-if="display">
        <div class="data-holder">
            <h2 id="modal-title">{{ title }}</h2>
        </div>
        <div class="data-holder">
            <h3 class="title">Date : </h3>
            <p>{{ date }}</p>
        </div>
        <div class="data-holder">
            <h3 class="title">Technology : </h3>
            <p>{{ technology }}</p>
        </div>
        <div class="data-holder">
            <h3 class="title">Link to site/repository: </h3>
            <a :href="links" target="_blank" class="link">Click here</a>
        </div>
        <div class="data-holder">
            <h3 class="title">Link to image exemple: </h3>
            <a :href="imageLinks" target="_blank" class="link">Open me</a>
        </div>
        <div class="button-container">
            <button type="button" class="form__close-button" @click="$emit('close')">X</button>
        </div>
    </section>
</template>



<style scoped>

    .modal-container {
        display: flex;
        position : fixed;
        height : 500px;
        width : 500px;
        flex-direction: column;
        left: 50%;
        top: 50%;
        transform: translateY(-50%);
        transform: translate(-50%, -50%);
        border-radius: 15px;
        padding: 15px; 
        color: white;
        background-color: rgb(25, 20, 73);
        align-items: center;
        z-index: 9999;

        max-height: calc(100vh - 100px);
    }

    .form__close-button {
        position: absolute;
        top: -10px;
        right: -10px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-weight: bold;
    }

    .form__add-button {
        font-weight: bold;
    }

    .add-project-button{
        position: absolute;
        left: 50%;
        top: 84%;
        transform: translate(-50%);
    }

    #modal-title {
        font-weight: bold;
        font-size: 1.3rem;
    }

    .title {
        font-weight: bold;
    }

    .data-holder .link {
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-weight: bolder;
        filter: brightness(1.8);
        border: 2px solid rgb(255, 255, 255);
    }
    
    .data-holder {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 15px;
        padding-bottom: 19px;
    }

</style>