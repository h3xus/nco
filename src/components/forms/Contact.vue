<template>
    <div class="container">
        <div class="row">              
            <material-input id="name" v-model="message.name" buttonName="Name"></material-input>            
            <material-input id="phone" v-model="message.phone" buttonName="Telephone number"></material-input>                     
            <material-input id="email" v-model="message.phone" buttonName="e-mail"></material-input>                          
            <label for="message"></label><br/>    
            <!-- <textarea id="message" v-model="message.message" cols="30" rows="10"></textarea><br/>            -->
            <material-textarea buttonName="Send"></material-textarea> 
            <round-button classes="indigo large" buttonName="Send"></round-button>
        </div>
    </div>
</template>

<script src="./contact-component.js">
</script>

<style lang="sass">

</style>
