<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<!--
    • Le header est présent sur toutes les pages.
    • une photo(de moi en mode logo) qui ramène en haut de la page d'accueil lorsqu'on clique dessus.
    • Un menu avec des liens d'ancrage vers AboutView, Projects et le ContactForm.
-->

<script setup>
    /*import ThemeChanger from './ThemeChanger.vue';*/
    
    import { onMounted, ref } from "vue";
    //import Contact from "./Contact.vue"
    //import Home from "../views/HomeView.vue";

    const display = ref(true);

    onMounted(() => {
        let linksContainer = document.querySelector(".navigation");
        let links = linksContainer.querySelectorAll("a");
        let project = document.querySelector("#project");
        let contact = document.querySelector("#contact");
        let presentation = document.querySelector("#presentation");
        let home = document.querySelector("#home-hero")

        //Function to set an underline when scrolling on the right section
        function changeStyleOnScroll() {
            let projectTop = project.offsetTop;
            let contactTop = 600;
            let presentationTop = -20;
            window.onscroll = () => {
                let currentSection = "";
                if (scrollY >= contactTop) {
                    currentSection = contact.id
                } else if (scrollY >= projectTop) {
                    currentSection = project.id;
                } else if (scrollY >= presentationTop) {
                    currentSection = presentation.id;
                }

                links.forEach(link => {
                    link.classList.remove("active");
                    if(link.classList.contains(currentSection)){
                        link.classList.add("active");
                    }
                })
            }
        }
                

        //Function to add underline when a link is clicked and remove the underline from the othes links
        function changeLinkStyleOnCLick() {
            links.forEach(link => {
                link.addEventListener("click",() => {
                    links.forEach(link => {
                        link.classList.remove("active");
                    })
                    link.classList.add("active");
                })
            })
        }
        
        changeLinkStyleOnCLick();
        changeStyleOnScroll()
    })

</script>

<template>

    <header class="header">
        <div class="header-container">
            <div class="header-child logo-container">
                <div class="logo-img-cont">
                    <img
                    src=""
                    alt="logo Image" class="logo-img" />
                </div>
                <h4>Assoua KOUASSI</h4>
            </div>

            <div class="header-child navigation">
                <nav>
                    <ul class="navigation-links">
                        <li class="navigation-link"><a href="#home-hero"> Home </a></li>
                        <li class="navigation-link"><a href="#about"> About </a></li>
                        <li class="navigation-link"><a href="#project"> Projects </a></li>
                        <li class="navigation-link"><a href="#contact"> Contact </a></li>
                        <!-- <li><button class="btn btn-theme btn-sm"><a href="">Download CV</a></button></li> -->
                    </ul>
                </nav>
            </div>
        </div>
    </header>            
</template>

<style scoped>
    .header {
        position: fixed;
        background: grey;
        width: 100%;
    }

    .header-container {
        margin: 1rem;
        display: flex;
    }

    .header-child {
        flex: 1;
    }

    .logo-container {
        display: flex;
        align-items: center;
        margin: 5px;
        cursor: pointer;
        font-size: 1rem;
    }

    .navigation {
        display: flex;
        align-items: center;
        justify-content: end;
    }

    ul{
        list-style: none;
    }

    li{
        display: inline;
    }

    a{
        text-decoration: none;
        color: rgb(24, 23, 23);
        font-size: 1rem;
        font-weight: bold;
    }

    a:active {
        text-decoration: #000;
    }

    a:hover {
        text-shadow: rgb(16, 9, 112) 1px 0 10px;
        transition-duration: 450ms;
    }

    .logo-img-cont {
        margin-right: 0.8rem;
        width: 3.2rem;
        height: 2.5rem;
        overflow: hidden;
        border-radius: 30rem;
        background: rgb(185, 181, 181);
        border-style: solid;
        color: white;
    }


    .logo-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h4 {
        color: #000;
        font-weight: bold;
    }

    .navigation-link {
        padding: 0.2rem;
    }
</style>

