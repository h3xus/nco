<template>
    <div class="three-columns">
              <div class="box">
                  <img src="./../../assets/images/diagrams/results/idea.png" alt="">
              </div>
              <div class="box">
                  <img src="./../../assets/images/diagrams/results/research.png" alt="">
              </div>
              <div class="box">
                  <img src="./../../assets/images/diagrams/results/solution.png" alt="">
              </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.three-columns {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 1em;
    .box {
        background: #EBEBEB;
        border-radius: 1em;
        padding: 1em;
        transition: transform .2s ease-in;
        &:hover {
            transform: scale(0.8);
        }
        img{
            width: 160px;
            height: 160px;
        }
    }
}
</style>
