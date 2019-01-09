<template>
          <div class="icon-box">
            <div class="icon-1 icon">
              <div class="icon-img">
                <img src="./../../assets/images/diagrams/about/client.png" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon1") }}</span></div>
            <div class="icon-2 icon">
              <div class="icon-img">
                <img src="./../../assets/images/diagrams/about/goals.png" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon2") }}</span></div>
            <div class="icon-3 icon">
              <div class="icon-img">
                <img src="./../../assets/images/diagrams/about/client.png" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon3") }}</span></div>
            <div class="icon-4 icon">
              <div class="icon-img">
                <img src="./../../assets/images/diagrams/about/analyse.png" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon4") }}</span></div>
            <div class="icon-5 icon">
              <div class="icon-img">
                <img src="./../../assets/images/diagrams/about/delivery.png" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon5") }}</span></div>
          </div>  
</template>

<script>
export default {
  name: "AboutDiagram"
}
</script>

<style lang="sass" scoped>
.icon
  position: relative
  counter-increment: ncon-counter
  width: 120px
  .icon-img img
    transition: transform .2s ease-in-out
  &::after
    opacity: 0.2
  &::before
    content: ''
    transition: transform .5s ease-in
    transform: rotateY(90deg)
  &:hover
    .icon-img img
      transform: scale(1.1)
    &::after
      opacity: 1
    &::before
      transform: rotateY(0deg)
      position: absolute
      top: -50px
      left: 10%
      content: counter(ncon-counter)
      font-size: 12em
      font-family: 'Crossten-ExtraBold'
      color: #ccc
      opacity: 0.3
  &:nth-child(n+1):nth-child(odd):nth-child(-n+4)::after
    position: absolute
    content: ""
    background: url(./../../assets/images/diagrams/about/arrow_above.png)  
    background-repeat: no-repeat
    background-size: contain
    height: 50px
    width: 12vw
    top: -70px
    left: 70px
  &:nth-child(n+2):nth-child(even):nth-child(-n+4)::after
    position: absolute
    content: ""
    background: url(./../../assets/images/diagrams/about/arrow_below.png)
    background-repeat: no-repeat
    background-size: contain
    height: 50px
    width: 12vw
    top: 100px
    left: 70px
  .icon-img 
    height: 70px
    img
      position: absolute
      z-index: 1
      left: 20px
      top: 0

</style>
