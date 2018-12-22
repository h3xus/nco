<template>
  <div id="app">
    <header-component></header-component>
      <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/shared/Header.vue'
import FooterComponent from './components/shared/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
  // },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="sass">
  body
    background: #fff
    background-image: url('./assets/images/bg.jpg');
    box-sizing: border-box
  .content
    margin-left: 10vw
  .content h1
    margin-top: 14vh
    font-size: 28px
    font-weigth: bolder
    color: #5945F3
  .content p
    width: 36vw
    letter-spacing: 2px    
    margin-top: 10vh
    font-weigth: 400
    font-size: 10px
    line-heigth: 8px
  .page-enter-active, .page-leave-active, .slide-left 
    transition: opacity 1s, transform 1s
  .page-enter, .page-leave-to, .slide-right 
    opacity: 0
    transform: translateX(-30%)
</style>
