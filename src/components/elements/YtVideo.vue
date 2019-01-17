<template>
    <div class="youtube-video">
        <iframe width="960" height="447" src="https://www.youtube-nocookie.com/embed/TbTdkPHTyys?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>

export default {
    data() {
        return {
            name: "YoutubeVideo",
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
.youtube-video
    margin-bottom: 3em

</style>