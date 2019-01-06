<template>
  <div id="app">
    <header-component></header-component>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <footer-component></footer-component>
    <cookies-notification></cookies-notification>
  </div>
</template>

<script>
import HeaderComponent from './components/shared/Header.vue'
import FooterComponent from './components/shared/Footer.vue'
import ContactComponent from './components/forms/Contact.vue'
import CookiesNotification from './components/shared/CookiesNotification.vue'
import RoundButton from './components/elements/RoundButton.vue'

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
    FooterComponent,
    ContactComponent,
    CookiesNotification,    
    RoundButton
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
@import url('https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text')
// @font-face
//   font-family: crossten_extrabold
//   src: url("./../../assets/font/Crossten-ExtraBold.ttf")
// @font-face
//   font-family: crossten_extralight
//   src: url("./../../assets/font/Crossten-ExtraLight.ttf")
body
  background: #fff
  background-image: url('./assets/images/bg.jpg')
  background-size: cover
  box-sizing: border-box
input, textarea
  font-face: crossten_extralight
#app .section 
  background: #eeeeee
  width: 100%
  height: 700px
  margin-top: 0px
  display: flex
  justify-content: center
  align-items: center
// h1, h2
  // font-face: crossten_extrabold
p
  font-size: 10px
.text-center
  text-align: center
.text-body
  font-size: 16px
  // font-face: crossten_extralight
  margin-top: 7px
  line-height: 1.6em
// .content
//   margin-left: 2vw
// .content h1
//   margin-top: 14vh
//   font-size: 28px
//   font-weigth: bolder
//   color: #5945F3
// .content p
//   width: auto
//   word-break: break-word
//   letter-spacing: 2px    
//   margin-top: 10vh
//   font-weigth: 400
//   font-size: 10px
  line-heigth: 8px
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
