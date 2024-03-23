<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<!--
    • Le header est présent sur toutes les pages.
    • une photo(de moi comme logo) qui ramène en haut de la page d'accueil lorsqu'on clique dessus.
    • Un menu avec des liens d'ancrage vers HomeHero, AboutView, Projects et le ContactForm.

    • L'élément de menu actif devra être souligné.
-->

<script setup> 
    import { onMounted } from "vue";

    onMounted(() => {
        let linksContainer = document.querySelector("nav");
        let links = linksContainer.querySelectorAll(".menu-link");
        let project = document.querySelector("#project");
        let contact = document.querySelector("#contact");
        let about = document.querySelector("#about");
        let home = document.querySelector("#home-hero");

        //Underline the menu link when scrolling on the right section
        function ActiveLinkStyle() {
            let projectTop = project.offsetTop;
            let contactTop = contact.offsetTop;
            let aboutTop = about.offsetTop;
            let homeTop = home.offsetTop;
            window.onscroll = () => {
                let currentSection = "";
                if (scrollY >= homeTop) {
                    currentSection = home.id;
                } else if (scrollY >= aboutTop) {
                    currentSection = about.id;
                }  else if (scrollY >= projectTop) {
                    currentSection = project.id;
                } else if (scrollY >= contactTop ) {
                    currentSection = contact.id
                }

                links.forEach(link => {
                    link.classList.remove("active");
                    if(link.href.includes(currentSection)){
                        link.classList.add("active");
                    }
                })
            }
        }
        
        //Underline a clicked link and remove the underline from the previous one
        function CLickedLinkStyle() {
            links.forEach(link => {
                link.addEventListener("click",() => {
                    links.forEach(link => {
                        link.classList.remove("active");
                    })
                    link.classList.add("active");
                })
            })
        }
        
        CLickedLinkStyle();
        ActiveLinkStyle()
    })

</script>

<template>

    <header class="header">
        <div class="header-container">
            <div class="header-child logo-container">
                <div class="img-container">
                    <a href="#home-hero">
                        <img src="./icons/Logo.png" alt="logo Image" class="logo-img" />
                    </a>
                </div>
                <a href="#home-hero"><h4>SALOMON KOUASSI</h4></a>
            </div>

            <div class="header-child navigation">
                <nav>
                    <ul>
                        <li><a class="menu-link" href="#home-hero"> HOME </a></li>
                        <li><a class="menu-link" href="#about"> ABOUT </a></li>
                        <li><a class="menu-link" href="#project"> PROJECTS </a></li>
                        <li><a class="menu-link" href="#contact"> CONTACT </a></li>
                        <!-- <li><button"><a href="">---</a></button></li> -->
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
        width: 30%;
    }

    .navigation {
        display: flex;
        align-items: center;
        justify-content: end;
        width: 70%;
    }

    ul{
        list-style: none;
    }

    li {
        display: inline-flex;
        padding: 0.2rem;
    }

    a {
        text-decoration: none;
        color: white/* rgb(24, 23, 23)*/;
        font-size: 1rem;
        font-weight: bold;
    }

    .logo-container a:hover {
        text-shadow: rgb(16, 9, 112) 1px 0 10px;
        transition-duration: 450ms;
    }

    /*.menu-link.active,*/
    .menu-link:active {
        text-decoration: underline;
        text-underline-offset: 0.4rem;
        text-decoration-thickness: 0.2rem;
    }

    .img-container {
        margin-right: 0.8rem;
        width: 2.7rem;
        height: 2.7rem;
        overflow: hidden;
        border-radius: 50%;
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
        color: #fff;
        font-weight: bold;
    }

</style>

