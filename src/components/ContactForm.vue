<!-- eslint-disable vue/multi-word-component-names -->
<!--
    Un formulaire de contact (nom/prénom, objet et message) 
    qui s'envoie à l'adresse e-mail définie en variable d'environnement.
-->

<script>
    //import { ref } from "vue";

    //const button = ref(null);

    //const props = defineProps{(["display"])};
/*
    function preventSubmit(event) {
        event.preventDefault();
    }

    function executeFunction() {
        preventSubmit(event);
    }

    executeFunction();*/

</script>

<template>
    <a class="anchor" id="contact-form"></a>
    <div id="contact" class="contact main-section">
        <div class="main-container">
            <h1 class="heading"> Contact 📞</h1>
            <p>
                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
            </p>
            <div class="main-section__content">
                <div class="contact__form-cont">
                    <form class="contact__form">
                        <div class="contact__form-field">
                            <label for="name" class="contact__form-field-label">Name</label>
                            <input placeholder="Enter Your Name" type="text" class="contact__form-field-input" />
                        </div>
                        <div class="contact__form-field">
                            <label for="name" class="contact__form-field-label">Email</label>
                            <input placeholder="Enter Your Email" type="text" class="contact__form-field-input" />
                        </div>
                        <div class="contact__form-field">
                        <label for="name" class="contact__form-field-label">Message</label>
                        <textarea placeholder="Enter Your Message" name="message" id="" cols="30" rows="10"
                            class="contact__form-field-input">
                        </textarea>
                        </div>
                        <button type="submit" class="contact__form-submit">Submit</button>
                    </form>
                    <!--<div class="contact__form-visual"></div>-->
                </div>
            </div>
        </div>
    </div>
</template>



<style>

    a.anchor {
        display: block;
        position: relative;
        top: -50px;
        visibility: hidden; 
    }

    #contact {
        background: rgba(250, 250, 250, 1);
        display: flex;
        margin: 2rem;
    }

    p {
        font-size: 1rem;
        font-weight: bold;
    }

    h1{
        color: black;
        text-align: center;
        margin-top: 60px;
        font-size: 2.3rem;
        font-weight: bold;
    }

    .contact__form-cont {
        border-radius: 1px;
        overflow: hidden;
        display: flex;
        /*grid-template-columns: 1.5fr 1fr;
        /*box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);*/
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    .contact__form {
        background: #fff;
        padding: 1rem;
    }

    .contact__form-field {
        margin-bottom: 1rem;
    }

    .contact__form-field-label {
        font-size: 1.6rem;
        text-transform: uppercase;
        color: #444;
        letter-spacing: 1px;
        display: block;
        margin-bottom: 1rem;
    }

    .contact__form-field-input {
        display: block;
        padding: 1rem;
        width: 100%;
        border: 1px solid rgba(225, 225, 225, 1);
        font-size: 1.6rem;
        resize: none;
        border-radius: 5px;
        font-weight: 400;
        letter-spacing: 1px;
    }

    /* Code for Modern Browsers */
    /* Code for WebKit, Blink, Edge */
    /* Code for Internet Explorer 10-11 */
    /* Code for Microsoft Edge */
    /* Code for Mozilla Firefox 4 to 18 */
    /* Code for Mozilla Firefox 19+ */


    .contact__form-field-input::placeholder {
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .contact__form-field-input::-webkit-input-placeholder {
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .contact__form-field-input:-ms-input-placeholder {
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .contact__form-field-input::-ms-input-placeholder {
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .contact__form-field-input:-moz-placeholder {
        opacity: 1;
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .contact__form-field-input::-moz-placeholder {
        opacity: 1;
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .contact__form-field-input:focus {
        outline: none;
    }

    .contact__form-submit {
        padding: 2rem;
        width: 100%;
        font-size: 1.6rem;
        border: none;
        letter-spacing: 1px;
        font-family: inherit;
        font-weight: 700;
        background: rgb(79, 5, 252)/*rgba(var(--themeColor), 0.5)*/;
        color: #f9f8fc;
        margin-top: 4rem;
        display: block;
        border-radius: 5px;
        cursor: pointer;
    }

    /*.contact__form-visual {
        /*background-image: url('https://i.postimg.cc/mrHQw69n/contact-form-bg.jpg');
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        /*z-index: 1;
    }

    .contact__form-visual::after {
        content: '';
        position: absolute;
        z-index: 20;
        background: whitesmoke/*rgba(var(--themeColor), 0.5);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }*/
</style>