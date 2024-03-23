
<template>
    <a class="anchor" id="home-hero"></a>
    <div class="home-hero">
        <div class="hero-content">
            <h1> Hey 👋, Welcome!</h1>
            <h1>I'm Salomon KOUASSI!</h1>
            <p>
                A Junior Web Developer Building Awesome Webapps And Websites That Powers The Internet
            </p>
        </div>
    </div>
</template>

<style scoped>

    a.anchor {
        display: block;
        position: relative;
        top: -100px;
        visibility: hidden; 
    }

    a {
        text-decoration: none;
        max-width: 300px;
    }

    .home-hero {
        display: flex;
        margin: 2rem;
        padding: 2rem;
    }

    h1{
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-weight: bold;
        color: black;
    }

    p{
        align-items: center;
        font-size: 1.5rem;
        color: rgb(2, 2, 131);
    }

</style>
