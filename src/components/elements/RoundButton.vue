<template>
<button class="round-button" :buttonName=buttonName>{{buttonName}}</button>
</template>

<script>

export default {
    data() {
        return {
            message: {}        
        }
    },
    props: {
        buttonName: {
            type: String         
        },
        buttonFunc: {

        },
         onClick: {
            type: Function,
            required: true
        }
    }
}

</script>

<style lang="sass" scoped>
// 😂
//
.round-button
    width: auto
    background: transparent
    border: 1px solid #000
    border-radius: 2em
.normal-button
    padding: 0.2em 1em;
.large-button
    padding: 1em 2em    

</style>