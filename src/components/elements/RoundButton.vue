<template>
<button class="round-button" :class="classes" :id="id"  @click="$emit('action')">{{buttonName}}</button>
</template>

<script>

export default {
    data() {
        return {
            name: "RoundButton",
            message: {}        
        }
    },
    methods: {
        callMethod(){
          
        }
    },
    props: {
        id: {
            type: String
        },
        buttonName: {
            type: String         
        },
        action: {
            type: Function    
        },
        classes: {
            type: String         
        }
    }
}

</script>

<style lang="scss" scoped>
// 😂
//
.round-button {
    font-family: 'Crossten-ExtraLight';
    width: auto;
    background: transparent;
    border: 0;
    border-radius: 2em;
    padding: 0.2em 1em;
    &:hover{
        cursor: pointer;}
    &.normal {
        padding: 0.3em 1em;}
    &.large{
            padding: 1em 2em;}
    &.red{
            background: red;
            color: #fff;}
    &.indigo{
            background: #2DB4FD;
            color: #fff;}
    &.secbtn{
            width: 10em;}
    &.center{
            margin: 0 auto;}
}    
</style>