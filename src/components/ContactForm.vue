<!-- eslint-disable vue/multi-word-component-names -->
<!--
    Un formulaire de contact (nom/prénom, objet et message) 
    qui s'envoie à l'adresse e-mail définie en variable d'environnement.
-->

<script>
</script>

<template>
    <a class="anchor" id="contact"></a>
    <div class="main-section">
        <div class="main-container">
            <h1> CONTACT 💬</h1>
            <p>
                For collaborations, contact me by submitting the form below.
                You can also leave some appreciations or remarks here, I will be glad to read you!
            </p>
            
            <div class="form-container">
                <form action="mailto:enocassoua@gmail.com" method="post" enctype="plain/text">
                    <div class="form-field">
                        <label for="name" class="field-label">Name</label>
                        <input placeholder="Enter Your Name" type="text" class="field-input" />
                    </div>

                    <div class="form-field">
                        <label for="name" class="field-label">Email</label>
                        <input placeholder="Enter Your Email" type="text" class="field-input" />
                    </div>

                    <div class="form-field">
                        <label for="name" class="field-label">Message</label>
                        <textarea placeholder="Enter Your Message" name="message" id="" cols="30" rows="10"
                            class="field-input">
                        </textarea>
                    </div>
                    <button type="submit" ref="button" class="form-submit">Submit</button>
                </form>
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

    .main-section {
        background: rgba(250, 250, 250, 1);
        display: flex;
    }

    p {
        font-size: 1.2rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }

    h1{
        color: black;
        text-align: center;
        font-size: 2.3rem;
        font-weight: bold;
    }

    .form-container {
        border-radius: 1px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    form {
        background: #fff;
        padding: 2.5rem;
    }

    .form-field {
        margin-bottom: 1rem;
    }

    .field-label {
        font-size: 1.6rem;
        text-transform: uppercase;
        color: #444;
        letter-spacing: 1px;
        display: block;
        margin-bottom: 1rem;
    }

    .field-input {
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


    .field-input::placeholder {
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .field-input::-webkit-input-placeholder {
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .field-input:-ms-input-placeholder {
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .field-input::-ms-input-placeholder {
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .field-input:-moz-placeholder {
        opacity: 1;
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .field-input::-moz-placeholder {
        opacity: 1;
        color: rgb(175, 175, 175);
        font-weight: 400;
        font-size: 1.6rem;
    }

    .field-input:focus {
        outline: none;
    }

    .form-submit {
        padding: 2rem;
        width: 100%;
        font-size: 1.6rem;
        border: none;
        letter-spacing: 1px;
        font-family: inherit;
        font-weight: 700;
        background: rgb(60, 18, 158)/*rgba(var(--themeColor), 0.5)*/;
        color: #f9f8fc;
        margin-top: 4rem;
        display: block;
        border-radius: 10px;
        cursor: pointer;
    }

</style>