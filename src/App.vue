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
    background-image: url('./assets/images/bg.jpg')
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
  .boxy 
    background: #5945F3
    padding: 5px
    height: 100vh
    color: #fff
  .boxy h2, .boxy p, .boxy span
    color: #fff
  .boxy-white
    padding: 5px
    height: 80vh
  .boxy-grey
    background: #ccc
    height: 60vh
  .icon-box 
    display: grid
    // grid-gap: 10px
    grid-template-columns: auto auto auto auto auto 
    background-color: #fff
    color: #444
  .icon-box .icon
    text-align: center  
  .icon-box .icon span
    font-weigth: 700
    font-size: 10px
    color: #5945F3
  .double-column
    display: grid
    grid-template-columns: auto auto
    grid-template-rows: auto
  .double-column .left-column
    padding: 15%
    justify-self: start
  .double-column .left-column p
    font-size: 14px
  .double-column .right-column
    padding: 15%
    justify-self: end
  .double-column .right-column ol li
    margin-bottom: 30%
  .double-column .right-column ol li span:nth-child(1)
    font-size: 24px 
    font-weigth: 700
  .double-column .right-column ol li span:nth-child(2)
    margin-top: 20px
    font-size: 8px
    float: left
  ol
    list-style: none
    counter-reset: ncon-counter
  ol li 
    position: relative
    counter-increment: ncon-counter
  ol li::before 
    position: absolute
    left: -20px
    bottom: 5px
    content: "0" counter(ncon-counter) ". "
    color: white
    font-size: 10px
  .icon-box .icon .icon-img img
    width: 80px
    height: 70px
  .text-center
    text-align: center
</style>
