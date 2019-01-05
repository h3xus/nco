<template>
    <div class="container">
        <div class="row">
            <label for="name"></label><br/>    
            <input id="name" v-model="name">
            <label for="phone"></label><br/>    
            <input id="phone" v-model="phone">
            <label for="email"></label><br/>    
            <input id="email" v-model="email">
            <label for="message"></label><br/>    
            <textarea id="message" cols="30" rows="10"></textarea><br/>
            <input type="submit" value="Send">
        </div>
    </div>
</template>

<script src="./contact-component.js">
</script>

<style lang="sass">

</style>
