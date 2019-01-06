<template>
    <div class="container">
        <div class="row">
            <label for="name">Name</label><br/>    
            <input id="name" v-model="message.name">
            <label for="phone"></label><br/>    
            <input id="phone" v-model="message.phone">
            <label for="email"></label><br/>    
            <input id="email" v-model="message.email">
            <label for="message"></label><br/>    
            <textarea id="message" v-model="message.message" cols="30" rows="10"></textarea><br/>
            <input type="submit" value="Send">
        </div>
    </div>
</template>

<script src="./contact-component.js">
</script>

<style lang="sass">

</style>
