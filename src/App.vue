<template>
  <div id="app">
    <header-component></header-component>
    <transition v-cloak :name="transitionName">
      <router-view></router-view>
    </transition>
    <footer-component></footer-component>
    <cookies-notification></cookies-notification>
  </div>
</template>

<script>
import HeaderComponent from './components/shared/Header/Header.vue'
import FooterComponent from './components/shared/Footer/Footer.vue'
import ContactComponent from './components/forms/Contact.vue'
import CookiesNotification from './components/shared/CookiesNotification.vue'
import RoundButton from './components/elements/RoundButton.vue'
import MaterialTextarea from './components/elements/Textarea.vue'
import YoutubeVideo from './components/elements/YtVideo.vue'
import AboutDiagram from './components/diagrams/AboutDiagram.vue'
import ExpertiseDiagram from './components/diagrams/ExpertiseDiagram.vue'

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
  components: {
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CookiesNotification,    
    RoundButton,
    MaterialTextarea,
    AboutDiagram,
    ExpertiseDiagram
  }
}
</script>

<style lang="sass">
.slide-right 
  transition: opacity .5s
  left: 0
.slide-left
  opacity: 0
  left: -100px
body
  background: url('./assets/images/bg.jpg')
  background-size: cover
  box-sizing: border-box
input, textarea
  font-family: Crossten-ExtraLight
h1, h2, h3, h4, h5
  font-family: Crossten-ExtraBold
p
  font-size: 10px
.page-enter-active, .page-leave-active, .slide-left 
  transition: opacity 1s, transform 1s
.page-enter, .page-leave-to, .slide-right 
  opacity: 0
  transform: translateX(-30%)
.boxy 
  background: #5945F3
  padding: 5px
  height: auto
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
  grid-template-columns: auto auto auto auto auto 
  background-color: #fff
  color: #444
  .icon
    text-align: center  
    span
      font-weigth: 700
      font-size: 10px
      color: #5945F3
.double-column
  display: grid
  grid-template-columns: auto auto
  grid-template-rows: auto
  .left-column
    padding: 15%
    justify-self: start
    p
      font-size: 14px
  .right-column
    padding: 15%
    justify-self: end
    ol
      list-style: none
      counter-reset: ncon-counter
      li 
        position: relative
        counter-increment: ncon-counter
        margin-bottom: 30%
        span:nth-child(1)
          font-size: 24px 
          font-weigth: 700
        span:nth-child(2)
          margin-top: 1em
          font-size: 0.8em
          line-height: 1.2em
          float: left
        &::before 
          position: absolute
          font-family: 'Crossten-ExtraBold'
          left: -35px
          bottom: 5px
          content: "0" counter(ncon-counter) ". "
          color: white
          font-size: 0.9em      
.icon-box .icon .icon-img img
  width: 80px
  height: 70px
.text-center
  text-align: center
.v-leave  
  opacity: 1
.v-leave-active  
  transition: opacity 2s 
.v-leave-to  
  opacity: 0
.v-enter 
  opacity: 0; 
.v-enter-active  
  transition: opacity 2s 
.v-enter-to 
  opacity: 1
</style>
