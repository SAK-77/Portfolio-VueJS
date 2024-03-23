<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<!--
    Vos créations avec à chaque fois une image et un titre. 
    Une modal s'ouvrira avec plus de photos et détails au clic.
    <NB:>La disposition est libre.</NB:>
    Au survol d'une création, une ombre apparait en bas et à droite.
-->

<script setup>
    import { onMounted, ref, watch } from "vue";
    import {useModalStore} from "../stores/modal.js"
    import Modal from "./ModalProject.vue"


    let store = useModalStore();
    let projects = store.projectArray
    let display = ref(false);
    let title = ref("");
    let date = ref("");
    let technology = ref("");
    let links = ref("");
    let imageLinks = ref("");

    function openModal() {
        display.value = true;
    }

    //Get the project data from the store then assign it to variables
    function getDataForModal(project) {
        title.value = project.title;
        date.value = project.date;
        technology.value = project.technology;
        links.value = project.link;
        imageLinks.value = project.imageLinks;

    }

    function executeFunction(project) {
        getDataForModal(project);
        openModal();
    }

    function handleCloseModal() {
        display.value = false;
    }


    //Create a watch function to verify when the modal is open and a a listener to it when it's true 
    watch(display, (newValue, oldValue) => {
        if(newValue === true) {

            //Add timeout to prevent modal from closing directly

            setTimeout(() => {
                function clickHandler() {
                    let modal = document.querySelector(".modal-container");

                    //Close modal if clicked outside and only outside of it
                    if(modal && !modal.contains(event.target)) {
                        handleCloseModal();
                    }
                }

                window.addEventListener("mousedown", clickHandler)

                //We watch the value again to see when we can remove the listener
                watch(display, (newValue) => {
                    //when display go back to its default value remove evenListener
                    if(newValue === false) {
                        window.removeEventListener("mousedown", clickHandler)
                    }
                })
            }, 200)
        }
    })
</script>

<template>
    <!-- Create an anchor for the anchor link -->
    <a class="anchor" id="project"></a>
    <div class="main-container">
        <h2 class="project-title-section">PROJECTS 🛠️</h2>
        <div class="project-container">
            <ul class="project">
                <li class="project__item" v-for="project in projects" :key="project.id" @click="executeFunction(project)">
                    <h3 class="item__title">{{ project.title }}</h3>
                    <div class="item__background-image" :style="{'background-image': 'url('+ project.imageLinks + ')'}"></div>
                </li>
            </ul>
        </div>
    </div>
    <Modal :display="display" :title="title" :date="date" :technology="technology" :links="links" :imageLinks="imageLinks"  @close="handleCloseModal"></Modal>
</template>


<style>
    a.anchor{
        display: block; 
        position: relative;
        top: -100px;
        visibility: hidden;
    }

    .project-title-section {
        text-align: center;
        margin-top: 60px;
        font-size: 2.3rem;
        font-weight: bold;
        color: rgb(15, 9, 9);
    }

    .main-container {
        background: white;
        margin: 2rem;
        padding: 1rem;
    }

    .project-container{
        padding: 2rem;
    }

    .project {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        list-style: none;
        grid-auto-rows: minmax(auto, auto);
        grid-auto-columns: minmax(auto, auto);

    }

    .project__item {
        margin: 5px;
        text-align: center;
    }

    .item__background-image {
        background-size: cover;
        background-repeat: no-repeat;
        height: 250px;
        width: auto;
        margin-top: 10px;
        border-radius: 15px;
        transition-duration: 450ms;
    }

    .item__background-image:hover {
        transition-duration: 450ms;
        box-shadow: 0px 8px 8px rgb(13, 5, 41);
    }

    .item__title {
        color: rgb(136, 128, 128);
        font-weight: bold;

    }

    ::-webkit-scrollbar {
        background-color: rgb(63, 63, 63);
    }

    ::-webkit-scrollbar-track-piece {
        background-color: rgb(63, 63, 63);
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgb(255, 255, 255);
        border-radius: 25px;
        border: 2px solid black;
    }

</style>