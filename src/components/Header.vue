<!-- eslint-disable vue/multi-word-component-names -->
<!--
    • Le header est présent sur toutes les pages.
    • une photo(de moi en mode logo) qui ramène en haut de la page d'accueil lorsqu'on clique dessus.
    • Un menu avec des liens d'ancrage vers AboutView, Projects et le ContactForm.
-->
<template>
    <div class="header">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="NavBar">

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/project">Project</RouterLink>
                <RouterLink to="/contact">Contact Me</RouterLink>
                <RouterLink>Resume</RouterLink>
                <div v-scrollanimation style="transition-delay: 700ms">
                    <ThemeChanger />
                </div>

                <!--
                <div class="header__content">
                    <div class="header__logo-container">
                    <div class="header__logo-img-cont">
                        <img
                        src="./assets/png/john-doe.png"
                        alt="Ram Maheshwari Logo Image"
                        class="header__logo-img"
                        />
                    </div>
                    <span class="header__logo-sub">John Doe</span>
                    </div>
                    <div class="header__main">
                    <ul class="header__links">
                        <li class="header__link-wrapper">
                        <a href="./" class="header__link"> Home </a>
                        </li>
                        <li class="header__link-wrapper">
                        <a href="./#about" class="header__link">About </a>
                        </li>
                        <li class="header__link-wrapper">
                        <a href="./#projects" class="header__link"> Projects </a>
                        </li>
                        <li class="header__link-wrapper">
                        <a href="./#contact" class="header__link"> Contact </a>
                        </li>
                    </ul>
                    <div class="header__main-ham-menu-cont">
                        <img
                        src="./assets/svg/ham-menu.svg"
                        alt="hamburger menu"
                        class="header__main-ham-menu"
                        />
                    </div>
                    </div>
                </div>
                <div class="header__sm-menu">
                    <div class="header__sm-menu-content">
                    <ul class="header__sm-menu-links">
                        <li class="header__sm-menu-link">
                        <a href="./"> Home </a>
                        </li>

                        <li class="header__sm-menu-link">
                        <a href="./#about"> About </a>
                        </li>

                        <li class="header__sm-menu-link">
                        <a href="./#projects"> Projects </a>
                        </li>

                        <li class="header__sm-menu-link">
                        <a href="./#contact"> Contact </a>
                        </li>
                    </ul>
                    </div>
                </div>
                -->
     
            </nav>
        </div>
    </div>
  
    <RouterView />
</template>

<script>
    import ThemeChanger from './ThemeChanger.vue';
    //import {  } from "./";
    export {
        ThemeChanger
    };
    
</script>

<style scoped>
    .header {
        line-height: 1.5;
        max-height: 100vh;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    nav {
        width: 100%;
        font-size: 12px;
        text-align: center;
        margin-top: 2rem;
    }

    nav a.router-link-exact-active {
        color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }

    nav a:first-of-type {
        border: 0;
    }

    @media (min-width: 1024px) {
        .header {
            display: flex;
            place-items: center;
            padding-right: calc(var(--section-gap) / 2);
        }

        .logo {
            margin: 0 2rem 0 0;
        }

        header .wrapper {
            display: flex;
            place-items: flex-start;
            flex-wrap: wrap;
        }

        nav {
            text-align: left;
            margin-left: -1rem;
            font-size: 1rem;

            padding: 1rem 0;
            margin-top: 1rem;
        }
    }
</style>

