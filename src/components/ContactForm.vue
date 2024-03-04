<!-- eslint-disable vue/multi-word-component-names -->
<!--
    Un formulaire de contact (nom/prénom, objet et message) 
    qui s'envoie à l'adresse e-mail définie en variable d'environnement.
-->
<template>
    <div class="contact-form">
        <div>Feel free if you want to contact me!!!!</div>
        <div class="form">
            <!--<Alert :show="alertShow" :description="alertDescription" :type="alertType" :title="alertTitle" />-->
            <div class="flex">
                <input v-model="form.name" type="text" placeholder="Name" />
                <input v-model="form.email" type="email" placeholder="Email" />
            </div>
            <input v-model="form.subject" type="text" placeholder="Subject" />
            <textarea v-model="form.message" name="msg" placeholder="Message" rows="8"></textarea>
            <div class="mt-10px">
                <button
                    type="button"
                    class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100 w-[100%]"
                    :class="{ 'opacity-50 hover:opacity-50 cursor-not-allowed': sending }"
                    @click="sendEmail()"
                    :disabled="sending"
                >
                    <p style="margin: 0">{{ sending ? 'Sending...' : 'Send' }}</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style></style>