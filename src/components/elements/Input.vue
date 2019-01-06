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
            type: String,         
        },
        buttonFunc: {

        }
    }
}

</script>

<style lang="sass" scoped>
// 😂
//
.round-button
    width: auto
    padding: 1em 2em
    background: transparent
    border: 1px solid #000
    border-radius: 2em
</style>