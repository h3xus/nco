<template>
    <div class="component" :class="classes">              
            <material-input id="name" v-model="message.name" inputName="name" inputCaption="Name"></material-input>            
            <material-input id="phone" v-model="message.phone" inputName="tel" inputCaption="Telephone number"></material-input>                     
            <material-input id="email" v-model="message.phone" inputName="e-mail" inputCaption="e-mail"></material-input>                          
            <label for="message"></label><br/>    
            <!-- <textarea id="message" v-model="message.message" cols="30" rows="10"></textarea><br/>            -->
            <material-textarea buttonName="Send"></material-textarea> 
            <round-button classes="indigo large" buttonName="Send"></round-button>
    </div>
</template>

<script src="./contact-component.js">
</script>

<style lang="scss">
.component{
    margin: 0;
    width: auto;
    &.white {
        background: #fff;
    }
    &.wide {
        width: 100%;
    }
}
</style>
